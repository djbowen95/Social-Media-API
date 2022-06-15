const router = require("express").Router();
const { getAllUsers, createUser, getOneUser, updateUser, deleteUser, addFriend, removeFriend } = require("../../controllers/userController");

router.route("/").get(getAllUsers).post(createUser);
router.route("/:userId").get(getOneUser)

module.exports = router;