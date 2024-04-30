const mongoose = require('mongoose');
const { User, Thought } = require('../models');
const { userData, thoughtData } = require('./data');

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect('mongodb://localhost:27017/your-database-name', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    // Remove existing data from the database
    await User.deleteMany({});
    await Thought.deleteMany({});

    // Insert seed data for users
    const users = await User.insertMany(userData);
    const thoughts = await Thought.insertMany(thoughtData);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (err) {
    console.error('Error seeding database:', err);
    process.exit(1);
  }
};

seedDatabase();
