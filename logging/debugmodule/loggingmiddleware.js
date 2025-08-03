const express = require('express');
const app = express();

// 🍪 Middleware: Checks for the secret word
function checkSecretWord(req, res, next) {
    const secret = req.query.secret;

    if (secret === 'please') {
        next(); // If they said the secret word, let them go get cookies!
    } else {
        res.send('You must say the secret word!');
    }
}

// 🧑‍🍳 Use the middleware
app.use(checkSecretWord);

// 🍪 Route: Give cookies
app.get('/', (req, res) => {
    res.send('Here are your cookies!');
});

// 🛎️ Start the server
app.listen(3000);
console.log('Server is running on http://localhost:3000');