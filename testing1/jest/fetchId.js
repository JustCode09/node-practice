function fetchD(){
    return new Promise((resolve)=>{
        setTimeout(()=> resolve('data fetched'), 1000);
    })
}
module.exports = fetchD;