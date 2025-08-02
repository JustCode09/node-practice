//jst checking current directory

// const process = require('process');

// console.log(`Current directory: ${process.cwd()}`);

//change directory using process.chdir()+check cwd

const process = require('process'); 
console.log(`Current directory: ${process.cwd()}`);

try{
    process.chdir('../'); // Change to parent directory
    console.log(`Changed directory to: ${process.cwd()}`);
} catch(err){
    console.log(`Error changing directory: ${err.message}`);
    
}