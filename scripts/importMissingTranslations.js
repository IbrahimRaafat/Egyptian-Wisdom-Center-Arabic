const fs = require('fs');
const path = require('path');
const mammoth = require('mammoth');

const TRANSLATIONS_DIR = 'c:\\Users\\Ibrahim\\Desktop\\Mostafa Gadalla-20260317T000834Z-3-001\\Mostafa Gadalla';
const ARTICLES_DIR = path.join(__dirname, '../src/data/articles');
const CATEGORIES_URL = path.join(__dirname, '../src/data/categories.json');
const MAPPING_URL = path.join(__dirname, '../src/data/mapping.json');

const mapping = JSON.parse(fs.readFileSync(MAPPING_URL, 'utf8'));
const mappedDocNames = Object.values(mapping);

const categoryFolderToSlug = {
    'المصريون القدماء المتعلمون': 'learned-ancient-egyptians',
    'العمارة المصرية': 'egyptian-architecture-function-and-form-sacred-geometryetc'
};

async function processUnmapped() {
    let unmappedFiles = [];
    
    function walk(dir) {
        fs.readdirSync(dir).forEach(file => {
            const full = path.join(dir, file);
            if (fs.statSync(full).isDirectory()) walk(full);
            else if (file.endsWith('.docx') && !file.startsWith('~$')) {
                if (!mappedDocNames.includes(file)) {
                    unmappedFiles.push({ path: full, name: file, parentFolder: path.basename(dir) });
                }
            }
        });
    }
    walk(TRANSLATIONS_DIR);

    console.log(`Found ${unmappedFiles.length} unmapped .docx files.`);
    
    let categoriesData = JSON.parse(fs.readFileSync(CATEGORIES_URL, 'utf8'));

    let addedCount = 0;

    for (let i = 0; i < unmappedFiles.length; i++) {
        const item = unmappedFiles[i];
        const articleTitle = item.name.replace('.docx', '');
        const slug = `translated-${Date.now()}-${i}`;
        
        console.log(`Extracting: ${articleTitle}`);
        try {
            const htmlRes = await mammoth.convertToHtml({ path: item.path });
            
            const articleObj = {
                title: articleTitle,
                slug: slug,
                originalUrl: "",
                content: htmlRes.value
            };
            
            fs.writeFileSync(path.join(ARTICLES_DIR, `${slug}.json`), JSON.stringify(articleObj, null, 2));

            const targetCatSlug = categoryFolderToSlug[item.parentFolder];
            if (targetCatSlug) {
                const catObj = categoriesData.find(c => c.slug === targetCatSlug);
                if (catObj) {
                    if (catObj.sections.length === 0) {
                        catObj.sections.push({ title: "عام", links: [] });
                    }
                    catObj.sections[0].links.push({
                        title: articleTitle,
                        originalHref: "",
                        articleSlug: slug
                    });
                }
            }

            mapping[slug] = item.name;
            addedCount++;
            console.log(` -> Success! mapped as ${slug}`);
        } catch(e) {
            console.error(" -> Failed", item.name, e.message);
        }
    }
    
    fs.writeFileSync(CATEGORIES_URL, JSON.stringify(categoriesData, null, 2));
    fs.writeFileSync(MAPPING_URL, JSON.stringify(mapping, null, 2));
    
    console.log(`\nImport Complete! extracted ${addedCount} new articles.`);
}

processUnmapped();
