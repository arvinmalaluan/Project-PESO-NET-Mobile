// Import the necessary modules and load environment variables
const mysql = require("mysql2");
require("dotenv").config();

// Create a MySQL connection using the provided configuration
let dbConn = mysql.connect({
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

// Attempt to establish a connection to the database
// If successful, log a success message; otherwise, log the error
dbConn.connect((err) => {
  if (!err) {
    console.log("Database connected successfully.");
  } else {
    console.log(err);
  }
});

// Export the database connection for use in other modules
module.exports = dbConn;
