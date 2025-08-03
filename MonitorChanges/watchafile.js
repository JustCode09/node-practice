const fs = require('fs');

// Start watching the file (even though later it's renamed)
fs.watch('renamed_file.txt', (eventType, filename)=>{
    console.log('the file', filename, 'has been changed');
    console.log('the type of change was:', eventType);
});

// Rename example_file.txt to renamed_file.txt after 2s
setTimeout(() => {
    if (fs.existsSync('renamed_file.txt')) {
        fs.renameSync('renamed_file.txt', 'example_file.txt');
    } else {
        console.log('renamed_file.txt does not exist');
    }
}, 2000);

// Create new_file.txt before renaming it to example_file.txt
setTimeout(() => {
    fs.writeFileSync('new_file.txt', 'temporary content');
}, 2500);

// Rename new_file.txt to example_file.txt after 3s
setTimeout(() => {
    if (fs.existsSync('new_file.txt')) {
        fs.renameSync('new_file.txt', 'example_file.txt');
    } else {
        console.log('new_file.txt does not exist');
    }
}, 3000);

// Modify example_file.txt after 4s
setTimeout(() => {
    if (fs.existsSync('renamed_file.txt')) {
        fs.writeFileSync('renamed_file.txt', "the file is modified");
    } else {
        console.log('renamed_file.txt not found for writing');
    }
}, 4000);
