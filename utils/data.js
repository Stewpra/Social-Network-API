const mongoose = require('mongoose');

const userData = [
  {
    _id: new mongoose.Types.ObjectId('66304474d92d8d72e48916a0'),
    username: 'bluestew',
    email: 'bluestew@email.com',
    thoughts: [new mongoose.Types.ObjectId('663044a92fa41671cfb0c643')],
    friends: [new mongoose.Types.ObjectId('66304474d92d8d72e48916a1')],
  },
  {
    _id: new mongoose.Types.ObjectId('66304474d92d8d72e48916a1'),
    username: 'stewpra',
    email: 'stewpra@email.com',
    thoughts: [new mongoose.Types.ObjectId('663044a92fa41671cfb0c644')],
    friends: [new mongoose.Types.ObjectId('66304474d92d8d72e48916a2')],
  },
  {
    _id: new mongoose.Types.ObjectId('66304474d92d8d72e48916a2'),
    username: 'willis767',
    email: 'willis@email.com',
    thoughts: [new mongoose.Types.ObjectId('663044a92fa41671cfb0c645')],
    friends: [],
  },
];

const thoughtData = [
  {
    _id: new mongoose.Types.ObjectId('663044a92fa41671cfb0c643'),
    thoughtText: 'I will think',
    username: 'bluestew',
    reactions: [
      {
        reactionBody: 'Great thought!',
        username: 'stewpra',
      },
    ],
  },
  {
    _id: new mongoose.Types.ObjectId('663044a92fa41671cfb0c644'),
    thoughtText: 'I am thinking',
    username: 'stewpra',
    reactions: [
      {
        reactionBody: 'Hello!',
        username: 'bluestew',
      },
      {
        reactionBody: "I don't get it.",
        username: 'willis767',
      },
    ],
  },
  {
    _id: new mongoose.Types.ObjectId('663044a92fa41671cfb0c645'),
    thoughtText: 'I have thought',
    username: 'willis767',
    reactions: [
      {
        reactionBody: "I don't get it.",
        username: 'stewpra',
      },
    ],
  },
];

module.exports = { userData, thoughtData };
