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
const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $set: req.body },
      { runValidators: true, new: true }
    );

    if (!updatedUser) {
      return res.status(404).json();
    }

    res.json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Delete user
const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findOneAndDelete({ _id: req.params.userId });

    if (!deletedUser) {
      return res.status(404).json({ message: 'No user with that ID' });
    }

    res.json({ message: 'User has been deleted' });
  } catch (err) {
    res.status(500).json(err);
  }
};

// Add friend
const addFriend = async (req, res) => {
  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: req.params.userId },
      { $addToSet: { friends: req.params.friendId } },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: 'No user with that ID' });
    }

    res.json(updatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
};

// Remove friend

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  // removeFriend,
};
