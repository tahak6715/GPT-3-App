// Import necessary modules
const express = require('express');
const dotenv = require('dotenv');

// Load environment variables from a .env file (if needed)
dotenv.config();

// Create the server with Express and name it 'app'
const app = express();

// Use port 8080 as the default port
const port = process.env.PORT || 5000;

// Enable body parser to accept JSON data
app.use(express.json());

// Define a sample route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});



// Start the server and log the port to the console
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

app.use('/openai', require('./router'));



