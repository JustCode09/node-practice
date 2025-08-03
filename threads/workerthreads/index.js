// This is the main chef
const { Worker } = require('worker_threads');

// Function to run a new assistant
function runTask(data) {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./worker.js', { workerData: data });

    worker.on('message', resolve); // Assistant sends result
    worker.on('error', reject);    // Assistant error
    worker.on('exit', (code) => {
      if (code !== 0)
        reject(new Error(`Worker stopped with code ${code}`));
    });
  });
}

// Run the task
async function run() {
  const result = await runTask("🍕 Pizza Order");
  console.log("Main Thread Got:", result);
}

run();