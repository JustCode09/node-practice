const axios =  require('axios');

axios.get('https://jsonplaceholder.typicode.com/posts')
.then(response => {
    console.log(`users:', response.data `);
    
})
.catch(error => {
    console.error('Error fetching data:', error);
});