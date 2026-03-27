const fs = require('fs');
const p = 'src/data/articles/advanced-egyptian-medical-library.json';
const data = JSON.parse(fs.readFileSync(p, 'utf8'));

let content = data.content;

// Replace non-quote <p><strong> paragraphs with <h3>
// A quote is recognized by starting with a quote mark.
content = content.replace(/<p><strong>([^"”].*?)<\/strong><\/p>/g, '<h3>$1</h3>');

// Wait, let's just explicitly target the known headers to be 100% safe
const headersToFix = [
  "الأطباء",
  "الإجراءات والممارسة",
  "بردية إدوين سميث Edwin Smith",
  "بردية إيبرس Ebers الطبية",
  "بردية برلين Berlin",
  "بردية هيرستHearst\u00A0" // non-breaking space
];

headersToFix.forEach(h => {
  content = content.replace(new RegExp(`<p><strong>${h}</strong></p>`), `<h3>${h}</h3>`);
  content = content.replace(new RegExp(`<p><strong>${h} </strong></p>`), `<h3>${h}</h3>`);
});

// Since the user said "paragraph divisions are not (correct)" probably referring to the quotes being attached to regular text visually?
// No, the quotes are in their own <p>. But it might look better if we just replace all short non-quote <p><strong> with h3.
content = content.replace(/<p><strong>(?!["””])(.{5,50})(?<!["””])<\/strong><\/p>/g, '<h3>$1</h3>');

// Remove multiple consecutive spaces or empty p
content = content.replace(/<p>\s*<\/p>/g, '');

data.content = content;
fs.writeFileSync(p, JSON.stringify(data, null, 2));

console.log("Fixed Medical Library");
