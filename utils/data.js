const mongoose = require('mongoose');

const userData = [
  {
    _id: new mongoose.Types.ObjectId('66304474d92d8d72e48916a0'),
    userName: 'wil',
    email: 'bluestew@email.com',
    thoughts: [new mongoose.Types.ObjectId('663044a92fa41671cfb0c643')],
    friends: [new mongoose.Types.ObjectId('66304474d92d8d72e48916a1')],
  },
  {
    _id: new mongoose.Types.ObjectId('66304474d92d8d72e48916a1'),
    userName: 'mike',
    email: 'stewpra@email.com',
    thoughts: [new mongoose.Types.ObjectId('663044a92fa41671cfb0c644')],
    friends: [new mongoose.Types.ObjectId('66304474d92d8d72e48916a2')],
  },
  {
    _id: new mongoose.Types.ObjectId('66304474d92d8d72e48916a2'),
    userName: 'stan',
    email: 'willis@email.com',
    thoughts: [new mongoose.Types.ObjectId('663044a92fa41671cfb0c645')],
    friends: [],
  },
];

const thoughtData = [
  {
    _id: new mongoose.Types.ObjectId('663044a92fa41671cfb0c643'),
    thoughtText: 'I will think',
    userName: 'bluestew',
    reactions: [
      {
        reactionBody: 'Great thought!',
        userName: 'stewpra',
      },
    ],
  },
  {
    _id: new mongoose.Types.ObjectId('663044a92fa41671cfb0c644'),
    thoughtText: 'I am thinking',
    userName: 'stewpra',
    reactions: [
      {
        reactionBody: 'Hello!',
        userName: 'bluestew',
      },
      {
        reactionBody: "I don't get it.",
        userName: 'willis767',
      },
    ],
  },
  {
    _id: new mongoose.Types.ObjectId('663044a92fa41671cfb0c645'),
    thoughtText: 'I have thought',
    userName: 'willis767',
    reactions: [
      {
        reactionBody: "I don't get it.",
        userName: 'stewpra',
      },
    ],
  },
];

module.exports = { userData, thoughtData };
