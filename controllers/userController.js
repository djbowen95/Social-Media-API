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
  
};

module.exports = userControllers;
