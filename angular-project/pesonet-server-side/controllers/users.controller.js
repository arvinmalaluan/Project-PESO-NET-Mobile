// TODO: Fix return message

const dbConn = require("../config/db.connection");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
require("dotenv").config();

const verifNumber = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;

exports.createUser = (req, res) => {
  try {
    const {
      firstname,
      lastname,
      address,
      number,
      role,
      username,
      email,
      password,
    } = req.body;

    let refnum = [];

    dbConn.query(
      "INSERT INTO tbl_userlogin (username, email, password) VALUES (?, ?, ?)",
      [username, email, password]
    );

    dbConn.query(
      "SELECT id FROM tbl_userlogin WHERE email = ?",
      [email],
      (err, results) => {
        if (!err) {
          dbConn.query(
            "INSERT INTO tbl_userinfo (firstname, lastname, curraddress, phonenumber, fk_roleid, fk_userlogin) VALUES (?, ?, ?, ?, ?, ?)",
            [firstname, lastname, address, number, role, results[0].id]
          );

          console.log("success");
        } else {
          return res.status(400).json({ message: "Something went wrong" });
        }
      }
    );

    return res.status(200).json({ message: req.body });
  } catch {
    return res.status(200).json({ message: "Error encountered" });
  }
};

exports.signinUser = (req, res) => {
  try {
    const { username, email, password } = req.body;

    dbConn.query(
      "SELECT * FROM tbl_userlogin WHERE email = ? or username = ?",
      [email, username],
      (err, results) => {
        if (results.length <= 0) {
          return res.status(404).json({ message: "Account not found" });
        } else if (
          email != results[0].email &&
          username != results[0].username
        ) {
          console.log(
            email != results[0].email,
            username != results[0].username
          );
          return res
            .status(404)
            .json({ message: "Email or username does not exist" });
        } else if (password != results[0].password) {
          return res.status(401).json({ message: "Invalid Password!" });
        } else {
          return res.status(200).json({
            message: "Successfully logged in. Will be redirected in 3 seconds",
          });
        }
      }
    );
  } catch {}
};

exports.generateCode = (req, res) => {
  const { identifier } = req.body;
  const hello = "hello";

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  try {
    dbConn.query(
      "SELECT * FROM tbl_userlogin WHERE email = ?",
      [identifier],
      (err, results) => {
        if (results.length <= 0) {
          return res
            .status(200)
            .json({ message: "Password send successfully to your email --" });
        } else {
          let mailOptions = {
            from: process.env.EMAIL,
            to: results[0].email,
            subject: "Verify Your Email Address",
            html: hello,

            // TODO: Create a message using this.
            // (`<p>Dear ${identifier}, </p>`,
            // `<p>Thank you for signing up at our website/app. To activate your account, please use the following verification code:</p>`,
            // `<p>Verification Code: <b>${verifNumber}</b></p>`,
            // "<p>Please enter the provided code on the verification page of our website/app to complete the registration process. If you did not sign up for an account, please disregard this email.</p>",
            // `<p>If you have any questions or need assistance, please contact our support team at <b>${"some random phone number"}</b></p>`,
            // "<p>Thank you,</p>",
            // "<p>Peso-NET Agency</p>"),
          };

          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log(error);
            } else {
              console.log("email sent");
            }
          });

          return res
            .status(200)
            .json({ message: "Password send successfully to your email" });
        }
      }
    );
  } catch {}
};

exports.retrieveCode = (req, res) => {
  const { code } = req.body;

  if (code == verifNumber) {
    return res.status(200).json({ message: "Verified successfully" });
  } else {
    return res.status(400).json({ message: "Error, try again" });
  }
};
