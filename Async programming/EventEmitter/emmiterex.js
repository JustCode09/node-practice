// const EventEmitter = require('events');
// let eventEmitter  = new EventEmitter();

// eventEmitter.on('greet', (msg)=>{
//     console.log('recieved',msg);
    
// });

// //emit event
// eventEmitter.emit('greet', 'hello world');

// code example with remove

// const EventEmitter = require('events');
// let eventEmitter = new EventEmitter();

// let hello = (msg)=>{
//     console.log('recieved', msg);
// };
// eventEmitter.on('sayhello', hello);
// eventEmitter.on('sayhello', hello);
// eventEmitter.removeListener('sayhello', hello);

// eventEmitter.emit('sayhello', 'hello world');
// //  eventEmitter.removeAllListeners('sayhello'); 
// eventEmitter.emit('sayhello', 'hello world again'); // this will not be printed because the listener has been removed

//Fullexample with special events
const EventEmitter = require('events');
let eventEmitter = new EventEmitter();

eventEmitter.on('newListener', (event, listener)=>{
    console.log(`A new listener was added for event: ${event}`);
});
eventEmitter.on('removeListener',(event, listener)=>{
    console.log(`A listener was removed for event: ${event}`);
    
});
eventEmitter.on('error',(err)=>{
    console.log(`An error occurred: ${err.message}`);
    
});

let hello = (msg)=>{
    console.log('recieved', msg);
    
};
eventEmitter.on('sayhello', hello);
eventEmitter.off('sayhello', hello); // using off instead of removeListener
eventEmitter.emit('sayhello', 'hello world'); // this will not be printed because the listener has been removed
eventEmitter.emit('error', new Error('Something went wrong')); // this will trigger the error event