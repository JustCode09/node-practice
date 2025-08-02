const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

app.get('/user', async(req,res,next)=>{
    try{
        throw new Error('This is a simulated error'); // Simulating an error
        res.send('this wont execute'); // This line won't execute due to the error
    }catch(err){
        next(err); // Pass the error to the next middleware
    }
});
app.use((req,res,next)=>{
    res.status(404).send('Page not found'); // Handle 404 errors
});

app.use((err, req, res, next) => {
    console.error('error:', err.message); // Log the error message
    res.status(500).json({
        success: false,
        message: err.message || 'Internal Server Error' // Send a JSON response with the error message

    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
