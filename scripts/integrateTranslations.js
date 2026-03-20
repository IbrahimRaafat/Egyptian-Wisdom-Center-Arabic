const fs = require('fs');
const path = require('path');
const mammoth = require('mammoth');

const MAPPING_FILE = path.join(__dirname, '../src/data/mapping.json');
const ARTICLES_DIR = path.join(__dirname, '../src/data/articles');
const TRANSLATIONS_DIR = 'c:\\Users\\Ibrahim\\Desktop\\Mostafa Gadalla-20260317T000834Z-3-001\\Mostafa Gadalla';

// Recursive function to find the exact path of a docx file given its basename
function findFileR(dir, filename) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            const found = findFileR(fullPath, filename);
            if (found) return found;
        } else if (file === filename) {
            return fullPath;
        }
    }
    return null;
}

async function integrateTranslations() {
    console.log("Reading mapping...");
    const mapping = JSON.parse(fs.readFileSync(MAPPING_FILE, 'utf8'));

    let successCount = 0;
    let missingCount = 0;

    for (const [slug, docxName] of Object.entries(mapping)) {
        const jsonPath = path.join(ARTICLES_DIR, `${slug}.json`);
        
        if (!fs.existsSync(jsonPath)) {
            console.error(`❌ JSON file not found for ${slug}`);
            missingCount++;
            continue;
        }

        const docxPath = findFileR(TRANSLATIONS_DIR, docxName);
        if (!docxPath) {
            console.error(`❌ Docx file not found for ${docxName}`);
            missingCount++;
            continue;
        }

        console.log(`Processing [${slug}] -> ${docxName}`);

        try {
            // Read Docx to HTML
            const result = await mammoth.convertToHtml({ path: docxPath });
            const arabicHtml = result.value;

            // Update JSON
            const articleData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
            
            // Overwrite content
            articleData.content = arabicHtml;
            // Overwrite title (remove .docx extension from title)
            articleData.title = docxName.replace('.docx', '');

            fs.writeFileSync(jsonPath, JSON.stringify(articleData, null, 2));
            successCount++;
            console.log(`  -> Successfully updated!`);

        } catch (err) {
            console.error(`❌ Failed to process ${slug}:`, err.message);
        }
    }

    console.log(`\nIntegration Complete!`);
    console.log(`Successfully updated: ${successCount} articles.`);
    if (missingCount > 0) console.log(`Failed/Missing: ${missingCount} articles.`);
}

integrateTranslations();
