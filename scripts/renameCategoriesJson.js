const fs = require('fs');
const path = require('path');

const CATEGORIES_URL = path.join(__dirname, '../src/data/categories.json');
let categories = JSON.parse(fs.readFileSync(CATEGORIES_URL, 'utf8'));

const newTitles = {
    'egyptian-society': 'الآثار والأراضي والشعوب في مصر',
    'the-social-and-political-system': 'النظام الاجتماعي والسياسي',
    'egyptian-cosmic-religion': 'الديانة الكونية المصرية',
    'egyptian-architecture-function-and-form-sacred-geometryetc': 'العمارة المصرية',
    'egyptian-ideograms-pictorial-representations-and-meanings': 'التصويرات المصرية',
    'learned-ancient-egyptians': 'المصريون القدماء المتعلمون'
};

for (const cat of categories) {
    if (newTitles[cat.slug]) {
        cat.title = newTitles[cat.slug];
    }
}

fs.writeFileSync(CATEGORIES_URL, JSON.stringify(categories, null, 2));
console.log("Renamed categories in categories.json successfully");
