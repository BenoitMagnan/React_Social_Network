const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts');
const auth = require('../middleware/auth.js');

router.post('/', auth, postsController.createPost);
router.delete('/', auth, postsController.deletePost);
router.get('/', postsController.getPost);

module.exports = router;
