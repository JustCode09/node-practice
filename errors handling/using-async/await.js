const fs = require('fs').promises;

async function readFile(){
    try{
        const data = await fs.readFile('data.txt', 'utf-8');
        console.log("File content:", data.toString());
    }catch(err){
        console.error("Error reading file:", err.message);
    }
}
readFile();