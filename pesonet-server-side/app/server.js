// Load environment variables from .env file
// The "dotenv" package allows you to read variables defined in a .env file
// and set them as environment variables accessible throughout the application
require("dotenv").config();

// Create an HTTP server using the Express app
// The "http" module provides functionality for creating HTTP servers
// We pass the Express app as the request listener for the server
const http = require("http");
const app = require("./index");
const server = http.createServer(app);

// Start the server and listen for incoming requests on the specified port
// The "process.env.PORT" accesses the value of the "PORT" environment variable,
// which can be set in the .env file or as an environment variable externally
server.listen(process.env.APP_PORT);
