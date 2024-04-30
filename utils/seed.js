const mongoose = require('mongoose');
const { userData, thoughtData } = require('./data');
const User = require('../models/User');
const Thought = require('../models/Thought');

// Connect to MongoDB using Mongoose
mongoose.connect('mongodb://localhost:27017/socialnetworkapi', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Seed the database with userData
User.insertMany(userData)
  .then((users) => {
    console.log('Users seeded successfully:', users);
    // Seed the database with thoughtData
    return Thought.insertMany(thoughtData);
  })
  .then((thoughts) => {
    console.log('Thoughts seeded successfully:', thoughts);
    // Close the connection after seeding
    mongoose.connection.close();
  })
  .catch((err) => {
    console.error('Error seeding database:', err);
    mongoose.connection.close();
  });
