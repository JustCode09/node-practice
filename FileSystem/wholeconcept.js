// Import the 'fs' module (File System module)
const fs = require('fs');

// ------------------------
// 1. READ FILE (ASYNC)
// ------------------------
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('❌ Error reading file (async):', err);
    return;
  }
  console.log('📄 Async Read: File content:', data);
});

// ------------------------
// 2. READ FILE (SYNC)
// ------------------------
try {
  const syncData = fs.readFileSync('example.txt', 'utf8');
  console.log('📄 Sync Read: File content:', syncData);
} catch (err) {
  console.error('❌ Error reading file (sync):', err);
}

// ------------------------
// 3. WRITE FILE (ASYNC)
// ------------------------
fs.writeFile('example.txt', 'Hello, world!', (err) => {
  if (err) {
    console.error('❌ Error writing file:', err);
    return;
  }
  console.log('✅ File written successfully');
});

// ------------------------
// 4. APPEND TO FILE (ASYNC)
// ------------------------
fs.appendFile('example.txt', '\nAppended content!', (err) => {
  if (err) {
    console.error('❌ Error appending to file:', err);
    return;
  }
  console.log('✅ File appended successfully');
});

// ------------------------
// 5. READ DIRECTORY
// ------------------------
fs.readdir('.', (err, files) => {
  if (err) {
    console.error('❌ Error reading directory:', err);
    return;
  }
  console.log('📁 Files in directory:', files);
});

// ------------------------
// 6. GET FILE INFO (STAT)
// ------------------------
fs.stat('example.txt', (err, stats) => {
  if (err) {
    console.error('❌ Error getting file stats:', err);
    return;
  }
  console.log('📊 File stats:', stats);
});

// ------------------------
// 7. RENAME FILE (ASYNC)
// ------------------------
fs.rename('example.txt', 'newname.txt', (err) => {
  if (err) {
    console.error('❌ Error renaming file:', err);
    return;
  }
  console.log('✅ File renamed to newname.txt');
});

// ------------------------
// 8. RENAME FILE (SYNC)
// ------------------------
try {
  fs.renameSync('newname.txt', 'example.txt'); // Renaming back for repeat test
  console.log('✅ File renamed back to example.txt');
} catch (err) {
  console.error('❌ Error renaming file (sync):', err);
}

// ------------------------
// 9. DELETE FILE
// ------------------------
// Uncomment this line if you want to delete the file
// fs.unlink('example.txt', (err) => {
//   if (err) console.error('❌ Error deleting file:', err);
//   else console.log('🗑️ File deleted');
// });

// ------------------------
// 10. CREATE DIRECTORY
// ------------------------
fs.mkdir('test-dir', { recursive: true }, (err) => {
  if (err) {
    console.error('❌ Error creating directory:', err);
    return;
  }
  console.log('📁 Directory created');
});

// ------------------------
// 11. REMOVE DIRECTORY
// ------------------------
// Uncomment this if you want to remove the directory after testing
// fs.rmdir('test-dir', (err) => {
//   if (err) console.error('❌ Error removing directory:', err);
//   else console.log('🗑️ Directory removed');
// });