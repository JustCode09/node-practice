//path.extname()-get file extension

// const path = require('path');
// const filePath = '/home/user/documents/file.txt';
// const extension  = path.extname(filePath);
// console.log(`File extension: ${extension}`); // Output: .txt

//path.resolve()-get full abosilute path
const path = require('path');
const abosolutePath = path.resolve('users','saurav', 'documents');
console.log(`Absolute path :${abosolutePath}`); // Output: /current/working/directory/documents/file.txt

