
const fs = require('fs');

fs.readFile('data.txt', 'utf-8', (err,data)=>{
    if(err){
        console.error("Error reading file:", err.message);
       
    }else{
    console.log("File content:", data.toString());
    }
});
console.log("Continuing execution after file read operation.")
