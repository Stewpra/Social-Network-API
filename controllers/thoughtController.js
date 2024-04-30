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

// Delete thought

// Add reaction

// Remove reaction

module.exports = {
  getAllThoughts,
  getThoughtById,
  createThought,
  // updateThought,
  // deleteThought,
  // addReaction,
  // removeReaction,
};
