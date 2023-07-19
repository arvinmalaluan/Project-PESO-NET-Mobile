const mysql = require("mysql2");

let pool = mysql.connect({
  port: process.env.DB_PORT,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

pool.connect((err) => {
  if (!err) {
    console.log("Database connected successfully.");
  } else {
    console.log(err);
  }
});

module.exports = pool;
