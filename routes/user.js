const express = require('express');
const router = express.Router();
const { userLogin } = require('../controller/user');

router.route('/login').get(userLogin);

module.exports = router;
