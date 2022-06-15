const router = require("express").Router();
const { createThought } = require("../../controllers/thoughtController")

router.route("/").post(createThought);

module.exports = router;