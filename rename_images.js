const fs = require('fs');
const path = require('path');

const directory = path.join(__dirname, 'public', 'images', 'zonda-sequence');

fs.readdir(directory, (err, files) => {
    if (err) {
        console.error("Could not list the directory.", err);
        return;
    }

    // Filter for ezgif files
    const ezgifFiles = files.filter(file => file.startsWith('ezgif-frame-') && file.endsWith('.jpg'));

    ezgifFiles.forEach(file => {
        // Extract the number part: ezgif-frame-001.jpg -> 001
        const match = file.match(/ezgif-frame-(\d+)\.jpg/);
        if (match) {
            const number = parseInt(match[1], 10); // 001 -> 1
            const oldPath = path.join(directory, file);
            const newPath = path.join(directory, `${number}.jpg`);

            fs.rename(oldPath, newPath, (err) => {
                if (err) console.error(`Error renaming ${file}:`, err);
                else console.log(`Renamed ${file} to ${number}.jpg`);
            });
        }
    });

    // Also remove any previous placeholders if they conflict/exist and weren't overwritten
    // (Though fs.rename usually overwrites, good to be clean)
});
