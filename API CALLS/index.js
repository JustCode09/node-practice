const fs = require('fs');

//async
// fs.readFile('data.json','utf-8', (err,data)=>{
//     console.log('File read successfully', data);
    
// });

//synchronous
const syncData = fs.readFileSync('data.json','utf-8');
console.log('File read successfully', syncData);
