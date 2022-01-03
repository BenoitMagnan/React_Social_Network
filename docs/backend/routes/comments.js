const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/comments');
const auth = require('../middleware/auth.js');

router.post('/', commentsController.createComment);
// router.post('/:id/like', postsController.likeSauce);
// router.put('/:id', auth, postsController.modifySauce);
// router.delete('/:id', auth, postsController.deleteSauce);
router.get('/', commentsController.getComment);
// router.get('/:id', auth, postsController.getSauceById);

module.exports = router;
