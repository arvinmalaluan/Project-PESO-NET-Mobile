const express = require("express");
const router = express.Router();
const { createUser } = require("../controllers/users.controller");
const { signinUser } = require("../controllers/users.controller");
const { generateCode } = require("../controllers/users.controller");
const { retrieveCode } = require("../controllers/users.controller");

router.post("/signup", createUser);
router.post("/signin", signinUser);
router.post("/create", generateCode);
router.post("/fetch", retrieveCode);

module.exports = router;
