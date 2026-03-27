const fs = require('fs');

const categoriesFile = fs.readFileSync('./src/data/categories.json', 'utf8');
const mappingFile = fs.readFileSync('./src/data/mapping.json', 'utf8');

const categories = JSON.parse(categoriesFile);
const mapping = JSON.parse(mappingFile);

const translatedNamesOfMissing = [];

categories.forEach(cat => {
  cat.sections.forEach(sec => {
    sec.links.forEach(link => {
      // Check if it's NOT in mapping
      if (!mapping[link.articleSlug]) {
        translatedNamesOfMissing.push(`القسم [${cat.title}]: ${link.title} (Slug: ${link.articleSlug})`);
      }
    });
  });
});

fs.writeFileSync('missing.txt', translatedNamesOfMissing.join('\n'));
