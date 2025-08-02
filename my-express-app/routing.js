const express = require('express');
const app = express();

app.get('/', (req,res)=>{
    res.send('home page');
});

app.get('/about', (req,res)=>{
    res.send('about page');
});
app.get('/contact', (req,res)=>{
    res.send('contact page');
});

app.use((req,res)=>{
    res.status(404).send('Page not found'); 
});

app.listen(3000, ()=>{
    console.log('Server is running on http://localhost:3000');
});