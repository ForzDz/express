const fs = require('fs');
const path = require('path');

const sourceImage = process.argv[2];
const targetDir = path.join(__dirname, 'public', 'images', 'zonda-sequence');
const count = 240;

if (!fs.existsSync(sourceImage)) {
    console.error("Source image not found:", sourceImage);
    process.exit(1);
}

if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
}

for (let i = 1; i <= count; i++) {
    const targetFile = path.join(targetDir, `${i}.jpg`); // Naming as .jpg even if source is png, browser might handle it or we hope.
    // actually, copying png to jpg extension might fail in some specific parsers but usually browsers sniff mime type.
    // reliable way: just let it be.
    fs.copyFileSync(sourceImage, targetFile);
}

console.log(`Generated ${count} placeholder frames in ${targetDir}`);
