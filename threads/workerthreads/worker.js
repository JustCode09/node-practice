const {workerData, parentPort} = require('worker_threads');

console.log('Worker thread started with data:', workerData);

parentPort.postMessage({ result: workerData+'is ready'});

