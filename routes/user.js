const express = require('express');
const router = express.Router();
const { userLogin, dashBoard } = require('../controller/user');

router.route('/login').post(userLogin);
router.route('/dashboard').get(dashBoard);

module.exports = router;
