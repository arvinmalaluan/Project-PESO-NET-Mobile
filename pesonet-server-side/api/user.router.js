const {
  createUser,
  fetchUsers,
  fetchUsersById,
  updateInfo,
  signin,
} = require("./user.controller");
const router = require("express").Router();
const { checkToken } = require("../auth/token_validation");

router.post("/", createUser);
router.get("/", fetchUsers);
router.get("/:id", fetchUsersById);
router.patch("/", checkToken, updateInfo);

router.post("/signin", signin);

module.exports = router;
