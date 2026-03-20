const fs = require('fs');
const path = require('path');

const translationDir = 'c:\\Users\\Ibrahim\\Desktop\\Mostafa Gadalla-20260317T000834Z-3-001\\Mostafa Gadalla';

function getAllFiles(dirPath, arrayOfFiles) {
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, file));
    }
  });

  return arrayOfFiles;
}

const allFiles = getAllFiles(translationDir);
const docxFiles = allFiles.filter(f => f.endsWith('.docx'));

console.log(JSON.stringify(docxFiles.map(f => path.basename(f, '.docx')), null, 2));
