// When the "Load Users" button is clicked
document.getElementById('load').addEventListener('click', function () {
  
  // Use axios to GET user data from the fake API
  axios.get('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
      // Get the list element where we will show the users
      const list = document.getElementById('list');
      list.innerHTML = ''; // Clear old list items before adding new ones

      // Loop through each user from the API response
      response.data.forEach(function (user) {
        const item = document.createElement('li'); // Create a new <li> element
        item.innerText = user.name + ' - ' + user.email; // Show name and email
        list.appendChild(item); // Add the <li> to the list on the page
      });
    })
    .catch(function (error) {
      // If something goes wrong (like no internet), show error in console
      console.error('Error loading users:', error);
    });
});


// When the "Add User" form is submitted
document.getElementById('userForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Stop the page from refreshing

  // Get the values entered in the name and email input boxes
  const nameInput = document.getElementById('name').value;
  const emailInput = document.getElementById('email').value;

  // Send those values to the fake API using POST
  axios.post('https://jsonplaceholder.typicode.com/users', {
    name: nameInput,
    email: emailInput
  })
    .then(function (response) {
      // If successful, show an alert and log the added user
      alert('User added successfully!');
      console.log('New User:', response.data);
    })
    .catch(function (error) {
      // If something goes wrong, show error in console
      console.error('Error adding user:', error);
    });
});