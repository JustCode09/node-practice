const express = require('express');
const app = express();

const winston = require('winston');

const consoleTransport = new winston.transports.Console();//Winston, please write things where I can see them in the terminal."
const myWinstonOptions = {
    transports:[consoleTransport]   //"Here’s how I want you to behave. Just use the console for now."
};

const logger = winston.createLogger(myWinstonOptions); //Now Winston is ready to take notes (logs). This is your pen and paper setup.

function logRequest(req, res, next) {
  logger.info("URL: " + req.url);
  next();
}
app.use(logRequest);
// Middleware = helper in the middle.

// This helper says:

// "Every time someone comes to visit, I’ll write down the URL they went to."

// Then it says:

// “Okay, go on” (with next())

function logError(err, req, res, next) {
  logger.error("Error: " + err.message);
  next();
}
app.use(logError);
// This helper is only called when there’s an error.

// It says:

// “Oops! Something broke. I’ll write that down too.”

app.get('/', (req, res) => {
  res.send("Hello with winston!");
});
//If someone goes to localhost:3000/, they see:
// "Hello with winston!"
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});