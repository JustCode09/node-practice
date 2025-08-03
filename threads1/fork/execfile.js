const{execFile} = requie('child_porcess');

execFile('node', ['-v'], (error, stdout, stderr)=>{
    if(error){
        console.log(`error:${error.message}`);
        return;
        
    }
    console.log(output:`${stdout}`);
    
})