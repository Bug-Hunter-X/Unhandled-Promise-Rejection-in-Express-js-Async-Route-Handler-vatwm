const express = require('express');
const app = express();
app.get('/', (req, res) => {
  someAsyncOperation().then(() => {
    res.send('Hello, world!');
  }).catch(err => {
    console.error('Error:', err); 
    // Proper error handling: Send a proper error response
    res.status(500).send('Internal Server Error');
  });
});

async function someAsyncOperation() {
  // Simulate a scenario where an error occurs
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      //Simulate an error, this could also be a network error or database error
      reject(new Error('Something went wrong!'));
    }, 1000);
  });
}