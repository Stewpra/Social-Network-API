const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');

// /api/thoughts
router.route('/').get(getAllThoughts).post(createThought);

// /api/thought/:thoughtId
router.route('/:thoughtId').get(getThoughtById).put(updateThought);
//   .delete(deleteThought);

// // /api/thought/:thoughtId/reactions
// router.route('/:thoughtId/reactions').post(addReaction);

// // /api/thought/:thoughtId/reactions/:reactionId
// router.route('/:thoughtId/reactions/:reactionId').delete(removeReaction);

module.exports = router;
