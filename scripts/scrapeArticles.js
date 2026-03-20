const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const https = require('https');
const http = require('http');

// Provide paths
const CATEGORIES_URL = path.join(__dirname, '../src/data/categories.json');
const ARTICLES_DIR = path.join(__dirname, '../src/data/articles');
const IMAGES_DIR = path.join(__dirname, '../public/images/scraped');

// Ensure directories exist
if (!fs.existsSync(ARTICLES_DIR)) {
  fs.mkdirSync(ARTICLES_DIR, { recursive: true });
}
if (!fs.existsSync(IMAGES_DIR)) {
  fs.mkdirSync(IMAGES_DIR, { recursive: true });
}

// Helper function to download an image
async function downloadImage(url, destPath) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destPath);
    const client = url.startsWith('https') ? https : http;

    client.get(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        "Referer": "https://egyptianwisdomcenter.org/"
      }
    }, (response) => {
      // Handle redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        return downloadImage(response.headers.location, destPath).then(resolve).catch(reject);
      }
      
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (${response.statusCode})`));
        return;
      }

      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(destPath, () => {});
      reject(err);
    });
  });
}

// Set to track unique urls to scrape to avoid duplicates
const articlesToScrape = new Map(); // slug -> originalHref

// Load categories to find all articles
const categories = JSON.parse(fs.readFileSync(CATEGORIES_URL, 'utf8'));

categories.forEach(category => {
  if (category.sections) {
    category.sections.forEach(section => {
      if (section.links) {
        section.links.forEach(link => {
          if (link.articleSlug && link.originalHref) {
             let fullUrl = link.originalHref;
             if (!fullUrl.startsWith('http')) {
                 if(fullUrl.startsWith('/')) {
                     fullUrl = `https://egyptianwisdomcenter.org${fullUrl}`;
                 } else {
                     fullUrl = `https://egyptianwisdomcenter.org/${fullUrl}`;
                 }
             }
             articlesToScrape.set(link.articleSlug, {
                 url: fullUrl,
                 title: link.title,
                 slug: link.articleSlug
             });
          }
        });
      }
    });
  }
});

async function scrapeArticles() {
  console.log(`Found ${articlesToScrape.size} unique articles to scrape.`);

  for (const [slug, article] of articlesToScrape.entries()) {
    const articleFilePath = path.join(ARTICLES_DIR, `${slug}.json`);
    
    // Skip if already scraped successfully (comment this out if you want to force re-scrape)
    // if (fs.existsSync(articleFilePath)) {
    //   console.log(`[Skipping] ${slug} already exists.`);
    //   continue;
    // }

    console.log(`Fetching [${slug}] from ${article.url}...`);
    try {
      const res = await fetch(article.url, {
        headers: {
          "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8",
          "Accept-Language": "en-US,en;q=0.9,ar;q=0.8"
        }
      });
      
      if (!res.ok) {
        console.error(`  -> Failed to fetch ${article.url}: ${res.status} ${res.statusText}`);
        continue;
      }

      const html = await res.text();
      const $ = cheerio.load(html);

      // Main Content Area
      const contentZone = $('.entry-content');
      if (contentZone.length === 0) {
        console.warn(`  -> Could not find .entry-content for ${slug}. Trying fallback...`);
      }
      
      const content = contentZone.length > 0 ? contentZone : $('body');

      // Process Images
      const images = content.find('img');
      for (let i = 0; i < images.length; i++) {
        const img = images.eq(i);
        let src = img.attr('src');
        if (!src) src = img.attr('data-src'); // handle lazy loaded images

        if (src) {
          // Resolve absolute URL
          if (!src.startsWith('http')) {
             if (src.startsWith('//')) {
               src = `https:${src}`;
             } else if (src.startsWith('/')) {
               src = `https://egyptianwisdomcenter.org${src}`;
             } else {
               src = new URL(src, article.url).href;
             }
          }

          // Generate a local filename based on URL hash or filename
          const urlObj = new URL(src);
          let filename = path.basename(urlObj.pathname);
          // If the filename is empty or lacks extension, generate one
          if (!filename || !filename.includes('.')) {
              filename = `image-${Date.now()}-${i}.jpg`;
          }
          // handle query params in filename edge cases
          filename = filename.replace(/[^a-zA-Z0-9.-]/g, '_');
          
          const localFileName = `${slug}-${filename}`;
          const localPath = path.join(IMAGES_DIR, localFileName);
          const relativePublicPath = `/images/scraped/${localFileName}`;

          try {
            console.log(`  -> Downloading image: ${src}`);
            await downloadImage(src, localPath);
            img.attr('src', relativePublicPath);
            
            // Remove responsive attributes that might break local images or cause external fetching
            img.removeAttr('srcset');
            img.removeAttr('sizes');
            img.removeAttr('data-lazy-src');
            img.removeAttr('data-lazy-srcset');
          } catch (imgErr) {
            console.error(`  -> Failed to download image ${src}: ${imgErr.message}`);
          }
        }
      }

      // Process Links
      content.find('a').each((i, el) => {
        const a = $(el);
        const href = a.attr('href');
        
        if (href) {
          try {
            // Check if it's an internal link
            const isInternal = href.includes('egyptianwisdomcenter.org') || href.startsWith('/');
            
            if (isInternal) {
                let linkedSlug;
                if (href.includes('page_id=')) {
                    linkedSlug = new URL(href, 'https://egyptianwisdomcenter.org').searchParams.get('page_id');
                } else if (!href.startsWith('#')) {
                    // Try to extract slug from path
                    const urlObj = new URL(href, 'https://egyptianwisdomcenter.org');
                    const parts = urlObj.pathname.split('/').filter(Boolean);
                    if (parts.length > 0) {
                        linkedSlug = parts.pop();
                    } else if (urlObj.searchParams.get('p')) {
                        linkedSlug = urlObj.searchParams.get('p');
                    }
                }

                if (linkedSlug) {
                    a.attr('href', `/articles/${linkedSlug}`);
                }
            }
          } catch (e) {
            // Ignore invalid URLs
          }
        }
      });
      
      // Clean up common unwanted elements (like sharing buttons, social widgets)
      content.find('.sharedaddy, .jp-relatedposts, .heateor_sss_sharing_container').remove();

      // Extract raw HTML of the processed content
      const processedHtml = content.html() ? content.html().trim() : '';

      // Create data object
      const articleData = {
        title: article.title,
        slug: slug,
        originalUrl: article.url,
        content: processedHtml
      };

      // Save to JSON
      fs.writeFileSync(articleFilePath, JSON.stringify(articleData, null, 2));
      console.log(`  -> Saved successfully.`);

    } catch (err) {
      console.error(`  -> Failed to scrape [${slug}]: ${err.message}`);
    }
    
    // Polite delay between requests (500ms)
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  console.log("Finished scraping all articles.");
}

scrapeArticles();
