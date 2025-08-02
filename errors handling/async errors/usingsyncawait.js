const divide = async (a, b) => {
    return new Promise ((resolve, reject) =>{
        setTimeout(()=>{
            if(b==0){
                reject(new Error('division by error'));
            }else{
                resolve(a/b);
            }
        },1000);
        })
    };

    (async ()=>{
        try{
            const result = await divide(10, 2);
            console.log("Result:", result);
            
        }catch(err){
            console.log("error:", err.message);
            
        }
    })();
