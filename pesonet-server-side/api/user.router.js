const {
  createUser,
  fetchUsers,
  fetchUsersById,
  updateInfo,
  signin,
  fetchJobPost,
  uploadPhoto,
} = require("./user.controller");
const router = require("express").Router();
const { checkToken } = require("../auth/token_validation");
const upload = require("../auth/upload_photo");

router.post("/", createUser);
router.get("/", fetchUsers);
router.get("/:id", fetchUsersById);
router.patch("/", checkToken, updateInfo);

router.post("/signin", signin);
router.post("/getpost", fetchJobPost);
// router.post("/upload", upload.single('image'), uploadPhoto);

router.post("/upload", uploadPhoto);

module.exports = router;
