const express = require('express');
const app = express();

app.set('view engine' , 'pug'); // Set Pug as the template engine

app.get('/', (req, res) => {
    res.render('index', {
        message: 'Hello, Pug!',
        courses : ['html', 'css', 'javascript', 'nodejs'],
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});