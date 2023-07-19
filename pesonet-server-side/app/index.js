// Import required packages and modules
const express = require("express");
const app = express();
const user_router = require("../api/user.router");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const db = require("../config/db.conn");

// Enable Cross-Origin Resource Sharing (CORS) middleware
// CORS allows requests from different origins to access the server's resources
// This line enables CORS for all routes in the application
app.use(cors());

// Parse URL-encoded bodies (e.g., form data) in the incoming requests
// This line adds the body-parser middleware to handle URL-encoded data
app.use(express.urlencoded({ extended: true, limit: 100000, limit: "500mb" }));

// Parse JSON bodies in the incoming requests
// This line adds the body-parser middleware to handle JSON data
app.use(express.json());

// Mount the userRoute middleware for requests to the "/user" path
// This line specifies that any requests starting with "/user" should be handled by the userRoute
app.use("/api/users", user_router);

// Export the Express app for use in other modules or as the entry point of the application
module.exports = app;
