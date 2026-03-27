const fs = require('fs');
const path = require('path');
const mammoth = require('mammoth');

const TRANSLATIONS_DIR = 'c:\\Users\\Ibrahim\\Desktop\\Mostafa Gadalla-20260317T000834Z-3-001\\Mostafa Gadalla';
const ARTICLES_DIR = path.join(__dirname, '../src/data/articles');
const MAPPING_URL = path.join(__dirname, '../src/data/mapping.json');
const EXTRACTED_IMAGES_DIR = path.join(__dirname, '../public/images/extracted');

if (!fs.existsSync(EXTRACTED_IMAGES_DIR)) {
    fs.mkdirSync(EXTRACTED_IMAGES_DIR, { recursive: true });
}

let mapping = JSON.parse(fs.readFileSync(MAPPING_URL, 'utf8'));
const slugToDocName = mapping; 

async function processTranslations() {
    let reextractedCount = 0;
    
    // We only want to re-extract the ones that have slug starting with 'translated-'
    const translatedSlugs = Object.keys(slugToDocName).filter(slug => slug.startsWith('translated-'));
    
    console.log(`Found ${translatedSlugs.length} recently translated articles to re-extract with images.`);
    
    for (const slug of translatedSlugs) {
        const docName = slugToDocName[slug];
        let docPath = '';
        
        // Find the full path of the docx file in TRANSLATIONS_DIR
        function findDocPath(dir) {
            fs.readdirSync(dir).forEach(file => {
                const full = path.join(dir, file);
                if (fs.statSync(full).isDirectory()) findDocPath(full);
                else if (file === docName) {
                    docPath = full;
                }
            });
        }
        findDocPath(TRANSLATIONS_DIR);
        
        if (!docPath) {
            console.error(`Could not find .docx for ${slug} (${docName})`);
            continue;
        }

        console.log(`Re-extracting: ${docName}`);
        
        try {
            let imageIndex = 0;
            const options = {
                convertImage: mammoth.images.inline(function(element) {
                    return element.read("buffer").then(function(imageBuffer) {
                        const extension = element.contentType.split('/')[1] || 'png';
                        const imageName = `${slug}-img-${imageIndex++}.${extension}`;
                        const imageAbsPath = path.join(EXTRACTED_IMAGES_DIR, imageName);
                        
                        fs.writeFileSync(imageAbsPath, imageBuffer);
                        console.log(`   -> Extracted image: ${imageName}`);
                        
                        return { src: `/images/extracted/${imageName}` };
                    });
                })
            };
            
            const htmlRes = await mammoth.convertToHtml({ path: docPath }, options);
            
            const articleFilePath = path.join(ARTICLES_DIR, `${slug}.json`);
            let articleObj = JSON.parse(fs.readFileSync(articleFilePath, 'utf8'));
            
            // Re-wrap the html slightly if needed or just save it
            articleObj.content = htmlRes.value;
            
            fs.writeFileSync(articleFilePath, JSON.stringify(articleObj, null, 2));

            reextractedCount++;
        } catch(e) {
            console.error(" -> Failed", docName, e.message);
        }
    }
    
    console.log(`\nRe-extraction Complete! Processed ${reextractedCount} articles with images.`);
}

processTranslations();
