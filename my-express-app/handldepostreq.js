//get is used to fetch data from the server
//post is used to send data to the server

//to handle post data we must use middleware

const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());//Helps your app read JSON data 📦
app.use(express.urlencoded({extended: true}));//Helps your app read form data 📝

//get route
app.get('/', (req, res) => {
    res.send('Welcome to the home page!');
});

//post route
app.post('/submit', (req,res)=>{
    const {name, email} = req.body; // Extracting data from the request body
    res.send(`recieved: Name =${name}, Email=${email}`);
});

app.listen(3000, ()=>{
    console.log('Server is running on http://localhost:3000');
});
