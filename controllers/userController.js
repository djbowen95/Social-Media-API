const { User } = require("../models");

const userControllers = {
  getAllUsers(req, res) {
    User.find()
      .select("-__v")
      .then((allUsers) => {
        res.json(allUsers);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
  getOneUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select("-__v")
      .then((oneUser) => {
        if (!oneUser) {
          return res
            .status(404)
            .json({ message: "No user was found with this ID" });
        }
        res.json(oneUser);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },
 
};

module.exports = userControllers;
