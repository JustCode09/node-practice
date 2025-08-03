process.on('message', (msg) => {
    console.log('Child process received message:', msg);

    process.send('ok boss,task is done');
});
    
