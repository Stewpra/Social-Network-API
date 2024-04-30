const Thought = require('../models/Thought');
const User = require('../models/User');

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

// Create user
const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.json(newUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Get user by id
const getUserById = async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.userId })
      .populate('thoughts')
      .populate('friends')
      .select('-__v');

    if (!user) {
      return res.status(404).json({ message: 'No user with that ID' });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Update user

// Delete user

// Add friend

// Remove friend

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  // updateUser,
  // deleteUser,
  // addFriend,
  // removeFriend,
};
