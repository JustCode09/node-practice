// Import the File System module
const fs = require('fs');

// 1. WRITE to a file (overwrite if it exists)
fs.writeFile('demo.txt', 'Initial content.', (err) => {
  if (err) return console.error('❌ Write failed:', err);
  console.log('✅ 1. File created and written.');

  // 2. APPEND to the file
  fs.appendFile('demo.txt', '\nAppended content.', 'utf8', (err) => {
    if (err) return console.error('❌ Append failed:', err);
    console.log('✅ 2. Content appended.');

    // 3. READ the file asynchronously
    fs.readFile('demo.txt', 'utf8', (err, data) => {
      if (err) return console.error('❌ Read failed:', err);
      console.log('✅ 3. File read:');
      console.log(data);

      // 4. OPEN the file for reading/writing
      fs.open('demo.txt', 'r+', (err, fd) => {
        if (err) return console.error('❌ Open failed:', err);
        console.log('✅ 4. File opened.');

        // 5. READ from the file using buffer
        const buffer = Buffer.alloc(1024);
        fs.read(fd, buffer, 0, buffer.length, 0, (err, bytes) => {
          if (err) return console.error('❌ Buffered read failed:', err);
          if (bytes > 0) {
            console.log('✅ 5. Buffer read:');
            console.log(buffer.slice(0, bytes).toString());
          }

          // 6. CLOSE the file
          fs.close(fd, (err) => {
            if (err) return console.error('❌ Close failed:', err);
            console.log('✅ 6. File closed.');

            // 7. DELETE the file
            fs.unlink('demo.txt', (err) => {
              if (err) return console.error('❌ Delete failed:', err);
              console.log('✅ 7. File deleted.');
            });
          });
        });
      });
    });
  });
});