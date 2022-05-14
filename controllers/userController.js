const res = require("express/lib/response");
const { User } = require("../models");

const getAllUsers = () => {
    User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err));
}

module.exports = { getAllUsers }