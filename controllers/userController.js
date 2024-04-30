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

// Get user by id

// Create user

// Update user

// Delete user

// Add friend

// Remove friend

module.exports = {
  getAllUsers,
  // getUserById,
  // createUser,
  // updateUser,
  // deleteUser,
  // addFriend,
  // removeFriend,
};
