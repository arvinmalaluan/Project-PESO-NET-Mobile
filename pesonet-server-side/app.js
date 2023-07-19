require("dotenv").config();

const express = require("express");
const app = express();
const user_router = require("./api/user.router");

app.use(express.json());
app.use("/api/users", user_router);

app.listen(process.env.APP_PORT, () => {
  console.log("Working");
});
