//1.timer phase
// console.log('start');
// setTimeout(()=>{
//     console.log('timeout 1');
    
// },5000);
// console.log('end');

//2.poll phase
// const fs = require('fs');
// console.log('start');
// fs,readFile('file.txt','utf-8', ()=>{
//     console.log('file read complete');
// });
// console.log('end');

// 3.check phase
// console.log('start');
// setImmediate(()=>{
//     console.log('immediate 1');
// });
// console.log('end');

//process.nextTick and promises

// setImmediate(()=>{
//     console.log('Immediate 1');
// });
// Promise.resolve('promise is resolved').then(console.log('Promise resolved'));// this will be executed in the next tick of the event loop
//  setTimeout(()=>{
//     console.log('Timeout 1');
    
//  },0);
//  process.nextTick(()=>{
//     console.log('Next Tick 1'); 
//     });

console.log("Start");

setTimeout(() => console.log("Timeout (0ms)"), 0);
setImmediate(() => console.log("Immediate"));
process.nextTick(() => console.log("NextTick"));
Promise.resolve("Promise").then(console.log);

console.log("End");



