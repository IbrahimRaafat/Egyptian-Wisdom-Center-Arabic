const fs = require('fs');
const path = require('path');

const CATEGORIES_URL = path.join(__dirname, '../src/data/categories.json');

let categories = JSON.parse(fs.readFileSync(CATEGORIES_URL, 'utf8'));

// 1. Remove the 2 articles from 'egyptian-ideograms-pictorial-representations-and-meanings'
let ideogramsCategory = categories.find(c => c.slug === 'egyptian-ideograms-pictorial-representations-and-meanings');
if (ideogramsCategory && ideogramsCategory.sections.length > 0) {
    let links = ideogramsCategory.sections[0].links;
    ideogramsCategory.sections[0].links = links.filter(link => 
        link.articleSlug !== '366' && 
        link.articleSlug !== 'an-overview-of-the-egyptian-formation-of-ideograms'
    );
}

// 2. Set the 11 articles in 'learned-ancient-egyptians' in the requested order
const orderedSlugs = [
    { slug: 'translated-1774630070458-4', title: 'ا لوعي الفلكي' },
    { slug: 'translated-1774630070700-9', title: 'المكتبة الطبية المصرية المتقدمة' },
    { slug: 'translated-1774630070788-11', title: 'الهندسة المقدسة والعلوم الطبيعية' },
    { slug: 'translated-1774630070541-5', title: 'الرياضيات وعلم الأعداد' },
    { slug: 'translated-1774630070762-10', title: 'النسب المقدسة' },
    { slug: 'translated-1774630070591-6', title: 'اللغة العالمية الأصلية' },
    { slug: 'translated-1774630070822-12', title: 'كيف تحولت اللغة العالمية الواحدة' },
    { slug: 'an-overview-of-the-egyptian-formation-of-ideograms', title: 'الشكل الأبجدي للكتابة المصرية', originalHref: '/an-overview-of-the-egyptian-formation-of-ideograms/' },
    { slug: '366', title: 'أنماط كتابة الأبجدية المصرية', originalHref: '/?page_id=366' },
    { slug: 'translated-1774630070661-8', title: 'اللغة المصرية الراقية' },
    { slug: 'translated-1774630070629-7', title: 'اللغة العربية المصرية المسروقة' }
];

let learnedCategory = categories.find(c => c.slug === 'learned-ancient-egyptians');

if (learnedCategory) {
    if (learnedCategory.sections.length === 0) {
        learnedCategory.sections.push({ title: 'عام', links: [] });
    }
    
    learnedCategory.sections[0].links = orderedSlugs.map(item => ({
        title: item.title,
        originalHref: item.originalHref || "",
        articleSlug: item.slug
    }));
}

fs.writeFileSync(CATEGORIES_URL, JSON.stringify(categories, null, 2));

console.log("Updated categories.json with the requested order.");
