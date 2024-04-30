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

// Create thought

// Update thought

// Delete thought

// Add reaction

// Remove reaction

module.exports = {
  getAllThoughts,
  // getThoughtById,
  // createThought,
  // updateThought,
  // deleteThought,
  // addReaction,
  // removeReaction,
};
