const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');
const auth = require('../middleware/auth');

router.post('/signup', usersController.signup);
router.post('/login', usersController.login);
router.delete('/delete', auth, usersController.deleteUser);
router.get('/profil', auth, usersController.profil);

module.exports = router;
