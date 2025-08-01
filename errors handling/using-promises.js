const fs = require('fs').promises;

fs.readFile('data.txt')
.then(data =>{
    console.log("File content:", data.toString());
    
})
.catch(err=>{
    console.log("Error reading file:", err.message);
    
})