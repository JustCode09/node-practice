const express = require('express');
const app = express();

app.use(express.static('public')); // Serve static files from the 'public' directory

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});