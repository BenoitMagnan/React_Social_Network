const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts');
const auth = require('../middleware/auth.js');

router.post('/', auth, postsController.createPost);
// router.post('/:id/like', postsController.likeSauce);
// router.put('/:id', auth, postsController.modifySauce);
// router.delete('/:id', auth, postsController.deleteSauce);
router.get('/', postsController.getPost);
// router.get('/:id', auth, postsController.getSauceById);

module.exports = router;
