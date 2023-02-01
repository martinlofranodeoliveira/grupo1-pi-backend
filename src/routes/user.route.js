const express = require('express');
const router = express.Router();

const {createUser,loginUser} = require('../controllers/user.controller');
const { EmailExists } = require('../middleware/user.middleware');

router.post('/resgister', EmailExists, createUser);
router.post('/login', loginUser);


module.exports = router;