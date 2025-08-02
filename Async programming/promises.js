const multiplication = (a, b) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            if(a<0 || b<0){
                reject(new Error("Cannot multiply negative numbers"));
            } else{
                resolve(a * b);
            }
        },1000);
        });
    };

    multiplication(10, 2)
    .then((result)=>
        console.log("Multiplication Result:", result)
    )
    .catch((err)=>console.log("Error:", err.message);
    )