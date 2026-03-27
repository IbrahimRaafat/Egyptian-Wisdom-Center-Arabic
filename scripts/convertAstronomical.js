const fs = require('fs');

const jsonPath = 'src/data/articles/astronomical-consciousness.json';
const tsxPath = 'src/app/articles/astronomical-consciousness/page.tsx';

const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

// Format content: inject <br/> and double newlines between tags.
let content = data.content;

// Remove existing newlines to normalize
content = content.replace(/\n/g, '');

// Convert list of stars to a properly styled unordered list with dashes
const starsList = [
    "ساق العملاق",
    "مخلب الإوزة",
    "رأس الإوزة",
    "مؤخرة الإوزة",
    "نجم الآلاف",
    "نجم سائر S’ar ",
    "إشارة إصبع لمجموعة سائر S’ah (أوريون Orion)",
    "نجوم سائر S’ah (أوريون Orion)",
    "النجم الذي يتبع سيريوس Sirius",
    "إشارة إصبع للنجمين التوأم",
    "نجوم الماء",
    "إشارة إصبع لسائر S’ah ",
    "رأس ا لأسد",
    "ذيل الأسد"
];

let ulMarkup = '<ul className="space-y-4 list-none mt-6 pr-6">\n';
starsList.forEach(star => {
    ulMarkup += `                    <li>- ${star.trim()}</li>\n`;
    content = content.replace(`<p>${star}</p>`, '');
});
ulMarkup += '                </ul>';

// Insert the ul after the preceding paragraph manually
content = content.replace('<p>لقد حدد المصريون القدماء النجوم التي تعرِّف الحدود الخارجية لمجموعات النجوم المختلفة كالآتي:</p>', '<p>لقد حدد المصريون القدماء النجوم التي تعرِّف الحدود الخارجية لمجموعات النجوم المختلفة كالآتي:</p>' + ulMarkup);

// Add spacing and <br/>
content = content.replace(/<\/p><p>/g, '</p>\n                <br/>\n                <p>');
content = content.replace(/<\/h2><p>/g, '</h2>\n                <br/>\n                <p>');
content = content.replace(/<\/p><h2>/g, '</p>\n                <br/>\n                <h2>');
content = content.replace(/<\/ul><p>/g, '</ul>\n                <br/>\n                <p>');
content = content.replace(/<\/p><ul/g, '</p>\n                <br/>\n                <ul');
content = content.replace(/<\/p><strong>/g, '</p>\n                <br/>\n                <strong>');
content = content.replace(/<\/strong><p>/g, '</strong>\n                <br/>\n                <p>');

// Now wrap it all
const tsxCode = `import React from 'react';

export const metadata = {
    title: 'الوعي الفلكي - مركز الحكمة المصري',
    description: 'مقال عن الوعي الفلكي عند المصريين القدماء',
};

export default function AstronomicalConsciousnessPage() {
    return (
        <article className="px-8 py-16 max-w-4xl mx-auto bg-white my-8 shadow-sm rounded-lg border border-gray-100 animate-fade-in">
            <header className="mb-10 text-center">
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-heading text-ewc-blue mb-6 leading-loose text-balance">
                    الوعي الفلكي
                </h1>
                <div className="w-24 h-1 bg-ewc-red mx-auto"></div>
            </header>

            <div 
                className="prose prose-lg ltr:prose rtl:prose-reverse max-w-none font-sans text-gray-800 leading-loose 
                           prose-p:mb-12 prose-p:mt-0 
                           prose-h2:text-2xl prose-h2:font-bold prose-h2:text-ewc-red prose-h2:mb-6 prose-h2:mt-16 prose-h2:font-sans
                           prose-h3:text-xl prose-h3:font-bold prose-h3:text-ewc-red prose-h3:mb-4 prose-h3:mt-12
                           prose-a:text-ewc-blue hover:prose-a:text-ewc-navy
                           prose-img:rounded-md prose-img:shadow-sm"
            >
                ${content.split('\\n').join('\\n                ')}
            </div>
        </article>
    );
}
`;

fs.mkdirSync('src/app/articles/astronomical-consciousness', { recursive: true });
fs.writeFileSync(tsxPath, tsxCode);
fs.unlinkSync(jsonPath);

console.log('Successfully converted astronomical-consciousness to a static TSX page.');
