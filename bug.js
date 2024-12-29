const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello, world!');
  }).catch(err => {
    console.error('Error:', err);
    // Improper error handling: This will crash the server without sending a response.
    throw err; // This is where the issue lies
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