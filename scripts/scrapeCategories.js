const fs = require('fs');
const cheerio = require('cheerio');

const urls = [
    "https://egyptianwisdomcenter.org/egyptian-society/",
    "https://egyptianwisdomcenter.org/the-social-and-political-system/",
    "https://egyptianwisdomcenter.org/egyptian-cosmic-religion/",
    "https://egyptianwisdomcenter.org/egyptian-architecture-function-and-form-sacred-geometryetc/",
    "https://egyptianwisdomcenter.org/egyptian-ideograms-pictorial-representations-and-meanings/",
    "https://egyptianwisdomcenter.org/learned-ancient-egyptians/",
    "https://egyptianwisdomcenter.org/the-egyptian-musical-heritage/",
    "https://egyptianwisdomcenter.org/vibrant-ancient-egyptian-economy/",
    "https://egyptianwisdomcenter.org/ancient-egypt-bible/",
    "https://egyptianwisdomcenter.org/egypt-and-the-world-past-and-present/"
];

async function scrapeCategories() {
    const data = [];

    for (const url of urls) {
        try {
            console.log(`Fetching ${url}...`);
            const res = await fetch(url, {
                headers: {
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
                }
            });
            const html = await res.text();
            const $ = cheerio.load(html);

            const slug = url.split('/').filter(Boolean).pop();
            const title = $('h1.title-post, h1.entry-title').text().trim() || slug;

            const sections = [];
            let currentSection = { title: "", links: [] };

            $('.entry-content').contents().each((i, el) => {
                const tagName = el.tagName ? el.tagName.toLowerCase() : '';

                // Sometimes section titles are in <p><strong>...</strong></p> or <h2>
                if (tagName === 'h2' || (tagName === 'p' && $(el).find('strong').length > 0)) {
                    const text = $(el).text().trim();
                    if (text && text !== title && text !== '&nbsp;') {
                        if (currentSection.links.length > 0) {
                            sections.push({ ...currentSection });
                        }
                        currentSection = { title: text, links: [] };
                    }
                } else if (tagName === 'ul') {
                    $(el).find('li a').each((j, linkEl) => {
                        const href = $(linkEl).attr('href');
                        const linkText = $(linkEl).text().trim();
                        if (href && linkText) {
                            // Extract article id or page_id if possible
                            let articleSlug = href;
                            if (href.includes('page_id=')) {
                                articleSlug = new URL(href, 'https://egyptianwisdomcenter.org').searchParams.get('page_id');
                            } else {
                                articleSlug = href.split('/').filter(Boolean).pop();
                            }

                            currentSection.links.push({
                                title: linkText,
                                originalHref: href,
                                articleSlug: String(articleSlug)
                            });
                        }
                    });

                    if (!currentSection.title) {
                        currentSection.title = "General";
                    }
                    sections.push({ ...currentSection });
                    currentSection = { title: "", links: [] };
                }
            });

            // Clean up any empty sections
            const validSections = sections.filter(s => s.links.length > 0);

            data.push({
                slug,
                title,
                sections: validSections
            });

        } catch (err) {
            console.error(`Failed to fetch ${url}`, err);
        }
    }

    // save to src/data/categories.json
    fs.mkdirSync('src/data', { recursive: true });
    fs.writeFileSync('src/data/categories.json', JSON.stringify(data, null, 2));
    console.log("Categories successfully scraped and saved!");
}

scrapeCategories();
