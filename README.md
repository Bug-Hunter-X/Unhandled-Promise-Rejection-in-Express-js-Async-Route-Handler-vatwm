# Unhandled Promise Rejection in Express.js Async Route Handler

This repository demonstrates a common error in Node.js Express.js applications: unhandled promise rejections within asynchronous route handlers.  Improper error handling in async functions can lead to server crashes without informative error messages.

The `bug.js` file showcases the problematic code. The server will crash if the simulated asynchronous operation (`someAsyncOperation`) throws an error. The `bugSolution.js` demonstrates the correct way to handle the error and send an appropriate response to the client.