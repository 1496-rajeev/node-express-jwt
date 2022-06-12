const express = require('express');
const router = express.Router();
const { userLogin, dashBoard } = require('../controller/user');
const authMiddleware = require('../middleware/auth');

router.route('/login').post(userLogin);
router.route('/dashboard').get(authMiddleware, dashBoard);

module.exports = router;
