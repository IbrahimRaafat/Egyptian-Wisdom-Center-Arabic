const fs = require('fs');
const path = require('path');

const CATEGORIES_URL = path.join(__dirname, '../src/data/categories.json');
const MAPPING_URL = path.join(__dirname, '../src/data/mapping.json');
const ARTICLES_DIR = path.join(__dirname, '../src/data/articles');

const engSlugMap = {
    "تصميم قناة أنبوبية ميتافيزيقية": "metaphysical-conduit-design",
    "تفاصيل معمارية مصرية أنيقة": "elegant-egyptian-architectural-details",
    "معايير التصميم المتناسق": "harmonic-design-criteria",
    "وظيفة المعبد": "the-temples-function",
    "ا لوعي الفلكي": "astronomical-consciousness",
    "الرياضيات وعلم الأعداد": "mathematics-and-numerology",
    "اللغة العالمية الأصلية": "the-original-universal-language",
    "اللغة العربية المصرية المسروقة": "the-stolen-egyptian-arabic-language",
    "اللغة المصرية الراقية": "the-refined-egyptian-language",
    "المكتبة الطبية المصرية المتقدمة": "advanced-egyptian-medical-library",
    "النسب المقدسة": "sacred-proportions",
    "الهندسة المقدسة والعلوم الطبيعية": "sacred-geometry-natural-sciences",
    "كيف تحولت اللغة العالمية الواحدة": "how-the-one-universal-language-transformed"
};

let cats = JSON.parse(fs.readFileSync(CATEGORIES_URL, 'utf8'));
let maps = JSON.parse(fs.readFileSync(MAPPING_URL, 'utf8'));

fs.readdirSync(ARTICLES_DIR).forEach(file => {
    if (!file.startsWith('translated-')) return;
    
    const filePath = path.join(ARTICLES_DIR, file);
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    let englishSlug = engSlugMap[data.title.trim()] || data.title.trim().replace(/\s+/g, '-').toLowerCase();
    
    // Process the content
    let content = data.content;
    
    // 1. Remove titles from the start of the body
    // Often it looks like <p><strong>المصريون القدماء المتعلمون</strong></p><p><strong>ا لوعي الفلكي</strong></p>
    content = content.replace(/<p><strong>[^<]+<\/strong><\/p>\s*<p><strong>[^<]+<\/strong><\/p>/, ''); // Remove first two strong paras
    content = content.replace(new RegExp(`<p><strong>${data.title}<\/strong><\/p>`), ''); // Remove title if standalone
    
    // 2. Convert numbered strong paragraphs to h2
    // e.g. <p><strong>1. الوعي الكوني وعلم الفلك</strong></p>
    // e.g. <p><strong>٢. كبلر Kepler وعلم الفلك المصري</strong></p>
    // e.g. <h3>٢. كبلر <strong>Kepler </strong>وعلم الفلك المصري</h3>
    
    // Some headers might already be h3, change to h2
    content = content.replace(/<h3>(.*?)<\/h3>/g, '<h2>$1</h2>');
    
    // Replace <p><strong> numbered...
    content = content.replace(/<p><strong>([\d١٢٣٤٥٦٧٨٩٠]+\..*?)<\/strong><\/p>/g, '<h2>$1</h2>');
    
    // Replace <p><strong> text... if we explicitly know it's a section header.
    // Let's just catch anything starting with a number and dot inside strong or <p>
    content = content.replace(/<p>([\d١٢٣٤٥٦٧٨٩٠]+\.\s*.*?)<\/p>/g, (match, p1) => {
        if(p1.length < 100) return `<h2>${p1}</h2>`; // if it's short, it's a header
        return match;
    });

    // Remove empty paragraphs
    content = content.replace(/<p>\s*<\/p>/g, '');

    data.content = content;
    data.slug = englishSlug;
    
    // Write new file
    const newFilePath = path.join(ARTICLES_DIR, `${englishSlug}.json`);
    fs.writeFileSync(newFilePath, JSON.stringify(data, null, 2));
    
    // Delete old file
    fs.unlinkSync(filePath);
    
    const oldSlug = file.replace('.json', '');
    
    // Update mapping
    if (maps[oldSlug]) {
        maps[englishSlug] = maps[oldSlug];
        delete maps[oldSlug];
    }
    
    // Update categories
    cats.forEach(cat => {
        cat.sections.forEach(sec => {
            sec.links.forEach(link => {
                if (link.articleSlug === oldSlug) {
                    link.articleSlug = englishSlug;
                }
            });
        });
    });
    
    console.log(`Renamed and processed: ${file} -> ${englishSlug}.json`);
});

fs.writeFileSync(CATEGORIES_URL, JSON.stringify(cats, null, 2));
fs.writeFileSync(MAPPING_URL, JSON.stringify(maps, null, 2));

console.log('Update finished.');
