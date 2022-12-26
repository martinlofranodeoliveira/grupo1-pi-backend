const express = require('express');
const router = express.Router();

const Usuario = require('../controllers/usuario');

router.post('/register', Usuario.Resgister);

module.exports = router;