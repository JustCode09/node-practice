function doSomething(){
    throw new Error("An error occurred!");

}
function init(){
    try{
        doSomething();
    } catch(err){
        console.error("Caught an error:", err.message);
    }
    console.log("Continuing execution after error handling.");
}
init();