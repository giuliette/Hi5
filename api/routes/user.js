const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/check-auth');

const UserController = require('../controllers/user');

router.post('/register', UserController.user_register);

router.post('/login', UserController.user_login);

module.exports = router;
