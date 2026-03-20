const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const { translate } = require('@vitalets/google-translate-api');

const pagesToScrape = JSON.parse(fs.readFileSync('missing-pages.json', 'utf8'));

// Directories
const pagesDir = path.join(__dirname, '../src/data/pages');
const imgDir = path.join(__dirname, '../public/images/scraped_pages');

if (!fs.existsSync(pagesDir)) fs.mkdirSync(pagesDir, { recursive: true });
if (!fs.existsSync(imgDir)) fs.mkdirSync(imgDir, { recursive: true });

async function translateText(text) {
    if (!text || !text.trim() || text.trim().length <= 1) return text;
    try {
        const res = await translate(text, { to: 'ar' });
        return res.text;
    } catch (e) {
        console.error('Translation failed for:', text.substring(0, 30), e.message);
        return text; // fallback to original
    }
}

async function scrapePages() {
    console.log(`Starting translation for ${pagesToScrape.length} pages...`);

    for (const url of pagesToScrape) {
        let slug = url.split('/').filter(Boolean).pop() || 'home';
        const pageJsonPath = path.join(pagesDir, `${slug}.json`);

        if (fs.existsSync(pageJsonPath)) {
            console.log(`Skipping ${slug}, already exists.`);
            continue;
        }

        console.log(`Fetching ${url}...`);
        try {
            const res = await fetch(url, {
                headers: { "User-Agent": "Mozilla/5.0" }
            });
            const html = await res.text();
            const $ = cheerio.load(html);

            // Try different content selectors based on page type
            let contentArea = $('.entry-content');
            if (!contentArea.length) contentArea = $('.elementor-element-populated, .elementor-widget-container').first().parent();
            if (!contentArea.length) contentArea = $('main');
            if (!contentArea.length) contentArea = $('body'); // Fallback if extremely non-standard

            if (!contentArea.length) {
                console.log(`No valid content area found on ${slug}. Skipping.`);
                continue;
            }

            // Clean up unwanted noise (scripts, styles, hidden elements, header, footer)
            contentArea.find('script, style, noscript, iframe, header, footer, nav, .site-header, .site-footer').remove();

            // 1. Download Images and Rewrite Src
            const images = contentArea.find('img');
            for (let i = 0; i < images.length; i++) {
                const img = $(images[i]);
                const src = img.attr('src');
                if (src && src.startsWith('http')) {
                    try {
                        const imgRes = await fetch(src);
                        const buffer = await imgRes.arrayBuffer();
                        let imgName = path.basename(new URL(src).pathname); // e.g. cover.jpg
                        if (!imgName) imgName = `img_${Date.now()}_${i}.jpg`;
                        const localImgPath = path.join(imgDir, imgName);
                        
                        fs.writeFileSync(localImgPath, Buffer.from(buffer));
                        img.attr('src', `/images/scraped_pages/${imgName}`);
                        img.removeAttr('srcset');
                    } catch(err) {
                        console.error(`Failed to download image ${src}:`, err.message);
                    }
                }
            }

            // 2. Rewrite Links
            contentArea.find('a').each((i, el) => {
                const href = $(el).attr('href');
                if (href && href.startsWith('https://egyptianwisdomcenter.org/')) {
                    const linkedSlug = href.split('/').filter(Boolean).pop() || '';
                    if (linkedSlug) {
                        $(el).attr('href', `/${linkedSlug}`);
                    } else {
                        $(el).attr('href', `/`);
                    }
                }
            });

            // 3. Extract and Translate Text Recursively
            const translateNodes = [];
            const walkDOM = (node) => {
                if (node.type === 'text') {
                    const text = node.data.trim();
                    if (text && text.length > 2) { 
                        translateNodes.push(node);
                    }
                } else if (node.type === 'tag') {
                    node.children.forEach(walkDOM);
                }
            };
            
            // Iterate over top-level elements of the resolved container
            contentArea.each((i, el) => {
                if (el.children) el.children.forEach(walkDOM);
            });

            console.log(`  Translating ${translateNodes.length} text nodes for ${slug}...`);
            let count = 0;
            for (const textNode of translateNodes) {
                const originalText = textNode.data;
                const translated = await translateText(originalText);
                textNode.data = textNode.data.replace(originalText, translated);
                count++;
                if (count % 10 === 0) console.log(`    ...translated ${count}/${translateNodes.length}`);
                await new Promise(r => setTimeout(r, 150)); // rate limiting
            }

            // 4. Translate title
            let title = $('h1.entry-title, h1.title-post, h2.elementor-heading-title, title').first().text().trim() || slug;
            title = await translateText(title);

            // 5. Save Data
            // We only need the inner HTML of the primary content wrapper
            const finalHtml = contentArea.html() || '';

            const pageData = {
                title,
                slug,
                originalUrl: url,
                content: finalHtml
            };

            fs.writeFileSync(pageJsonPath, JSON.stringify(pageData, null, 2));
            console.log(`✅ Saved ${slug}.json`);

        } catch (err) {
            console.error(`❌ Global Error on ${url}:`, err.message);
        }
    }
    console.log("Finished scraping and translating pages.");
}

scrapePages();
