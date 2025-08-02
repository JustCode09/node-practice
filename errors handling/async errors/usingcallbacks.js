const divide = (a, b, callback) => {
    setTimeout(()=>{
        if(b==0){
            callback(new Error("Cannot divide by zero"));

        }else{
            callback(null, a/b);
        }
    }, 1000);
    };

    divide(10,2, (err, res)=>{
    if(err){
        console.error("Error:", err.message);
    }else{
        console.log("Result:", res);
    }
    })