const Thought = require('../models/Thought');
const User = require('../models/User');

// Get all thoughts
const getAllThoughts = async (req, res) => {
  try {
    const thoughts = await Thought.find();
    res.json(thoughts);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get thought by id
const getThoughtById = async (req, res) => {
  try {
    const thought = await Thought.findOne({ _id: req.params.thoughtId });

    if (!thought) {
      return res
        .status(404)
        .json({ message: 'No thoughts with the provided ID' });
    }

    res.json(thought);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Create thought
const createThought = async (req, res) => {
  try {
    const newThought = await Thought.create(req.body);

    const updatedUser = await User.findOneAndUpdate(
      { username: req.body.username },
      { $addToSet: { thoughts: newThought._id } },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'No user under that name' });
    }

    res.json(newThought);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Update thought
const updateThought = async (req, res) => {
  try {
    const updatedThought = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    );

    if (!updatedThought) {
      return res.status(404).json({ message: 'No thought found with that ID' });
    }

    res.json(updatedThought);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Delete thought
const deleteThought = async (req, res) => {
  try {
    const deletedThought = await Thought.findOneAndDelete({
      _id: req.params.thoughtId,
    });

    if (!deletedThought) {
      return res.status(404).json({ message: 'No thought found with that ID' });
    }

    res.json({ message: 'Thought deleted' });
  } catch (err) {
    res.status(200).json(err);
  }
};

// Add reaction
const addReaction = async (req, res) => {
  try {
    const updatedThought = await Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    );

    if (!updatedThought) {
      return res.status(404).json({ message: 'No thought found with that ID' });
    }

    res.json(updatedThought);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Remove reaction

module.exports = {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  // removeReaction,
};
