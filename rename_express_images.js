const fs = require('fs');
const path = require('path');

const directory = path.join(__dirname, 'public', 'images', 'zonda-sequence');

console.log('Starting image renaming process...');
console.log('Directory:', directory);

// First, delete all old Pagani images (numbered 1-240)
console.log('\n1. Deleting old Pagani images...');
for (let i = 1; i <= 240; i++) {
    const oldFile = path.join(directory, `${i}.jpg`);
    if (fs.existsSync(oldFile)) {
        fs.unlinkSync(oldFile);
        console.log(`   Deleted: ${i}.jpg`);
    }
}

// Now rename Express images (ezgif-frame-001 to ezgif-frame-180)
console.log('\n2. Renaming Express images...');
fs.readdir(directory, (err, files) => {
    if (err) {
        console.error("Could not list the directory.", err);
        return;
    }

    // Filter for ezgif files
    const ezgifFiles = files.filter(file => file.startsWith('ezgif-frame-') && file.endsWith('.jpg'));

    console.log(`   Found ${ezgifFiles.length} Express images to rename`);

    ezgifFiles.forEach(file => {
        // Extract the number part: ezgif-frame-001.jpg -> 001
        const match = file.match(/ezgif-frame-(\d+)\.jpg/);
        if (match) {
            const number = parseInt(match[1], 10); // 001 -> 1
            const oldPath = path.join(directory, file);
            const newPath = path.join(directory, `${number}.jpg`);

            fs.rename(oldPath, newPath, (err) => {
                if (err) console.error(`   Error renaming ${file}:`, err);
                else console.log(`   Renamed: ${file} -> ${number}.jpg`);
            });
        }
    });

    console.log('\n✅ Renaming complete! Refresh your browser to see the Express car.');
});
