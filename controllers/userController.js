const { User } = require("../models");

const getAllUsers = (req, res) => {
  console.log("Request recieved.")
  User.find({}, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  })
};
/*    
    ).then((users) => {
      console.log(users);
      res.json(users);
    })
    .catch((err) => res.status(500).json(err));
};*/

const createUser = (req, res) => {
  User.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.status(500).json(err));
};

module.exports = { getAllUsers, createUser };
