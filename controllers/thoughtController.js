const { json } = require("express");
const { User, Thought } = require("../models");

const thoughtController = {
  getAllThoughts(req, res) {
    Thought.find()
      .select("-__v")
      .then((allThoughts) => {
        res.json(allThoughts);
      })
      .catch((err) => res.status(500).json(err));
  },
  getOneThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select("-__v")
      .then((oneThought) => {
        if (!oneThought) {
          return res
            .status(404)
            .json({ message: "Thought with this ID not found." });
        }
        res.json(oneThought);
      })
      .catch((err) => res.status(500).json(err));
  },
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $addToSet: { thoughts: thought._id } },
          { new: true }
        );
      })
      .then((user) => {
        if (!user) {
          return res.status(404).json({
            message: "Thought created but no user found with this ID.",
          });
        }
        res.json("Thought successfully created.");
      })
      .catch((err) => res.status(500).json(err));
  },
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { new: true }
    ).then((updatedThought) => res.json(updatedThought))
    .catch((err) => res.status(500).json(err));
  },
  deleteThought(req, res) {
    Thought.findOneAndDelete( { _id: req.params.thoughtId })
    .then((deletedThought) => res.json(deletedThought))
    .catch((err) => res.status(500).json(err));
  }
};

module.exports = thoughtController;
