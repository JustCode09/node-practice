const divide=(a,b)=>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            if(b==0){
                reject(new Error("Cannot divide by zero"));
            }else{
                resolve(a/b);
            }
        },1000);
        
    });
};

divide(10, 0 )
.then(res => console.log("Result:", res) );
.catch(err => console.log("Error:", err.message))