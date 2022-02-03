const express = require('express');
const router = express.Router();
const commentsController = require('../controllers/comments');
const auth = require('../middleware/auth.js');

router.post('/', auth, commentsController.createComment);
router.delete('/', auth, commentsController.deleteComment);
router.get('/', commentsController.getComment);

module.exports = router;
