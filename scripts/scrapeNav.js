const fs = require('fs');
const cheerio = require('cheerio');

async function scrapeNav() {
    try {
        const res = await fetch("https://egyptianwisdomcenter.org/", {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
            }
        });
        const html = await res.text();
        const $ = cheerio.load(html);
        
        const links = new Set();
        $('a').each((i, el) => {
            const href = $(el).attr('href');
            if (href && href.startsWith('https://egyptianwisdomcenter.org/') && !href.includes('wp-content')) {
                links.add(href);
            }
        });
        
        fs.writeFileSync('nav-links.json', JSON.stringify(Array.from(links).sort(), null, 2));
    } catch (err) {
        console.error(err);
    }
}

scrapeNav();
