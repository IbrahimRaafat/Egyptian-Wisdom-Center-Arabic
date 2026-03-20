const fs = require('fs');

const categories = JSON.parse(fs.readFileSync('src/data/categories.json', 'utf8'));
const navLinks = JSON.parse(fs.readFileSync('nav-links.json', 'utf8'));

// Get all scraped slugs
const scrapedSlugs = new Set();
categories.forEach(cat => {
    // Add category slug itself?
    scrapedSlugs.add(cat.slug);
    
    cat.sections.forEach(sec => {
        sec.links.forEach(link => {
            scrapedSlugs.add(link.articleSlug);
        });
    });
});

// Find missing links
const missingPages = [];
navLinks.forEach(url => {
    // skip foreign languages, categories, feed, etc.
    if (url.match(/\/(category|comments|product-category|products|feed|wp-login.php)\//)) return;
    if (url.match(/\/(fr|de|ru|es|hi|it|ja|nl|ro|sv|zh|pt)\/$/)) return;
    if (url.match(/\/20(19|20|21|22)\//)) return; // dates
    if (url.endsWith('wp-login.php')) return;
    
    // exact match check
    if (url === 'https://egyptianwisdomcenter.org/') {
        missingPages.push(url);
        return;
    }

    const slug = url.split('/').filter(Boolean).pop();
    
    if (!scrapedSlugs.has(slug)) {
        missingPages.push(url);
    }
});

fs.writeFileSync('missing-pages.json', JSON.stringify(missingPages, null, 2));
console.log(`Saved ${missingPages.length} missing pages to missing-pages.json`);
