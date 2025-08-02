//http api functions

const { default: axios } = require("axios")

//get
axios.get('/users')
//post
axios.post('/users', {name:'saurav', age:20})
//put
axios.put('/users/1', {name:'messi', age:35 })

//patch-edit part of something
axios.patch('/users/1', {age:36 })

//delete
axios.delete('/users/1')

//websockets api functions

//filesystem api functions
//write files
FileSystem.writeFile('example.txt', 'Hello, World!', (err) => {
    if(err) throw err;
    console.log('File has been written');
}
);