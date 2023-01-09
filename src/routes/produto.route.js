const express = require('express');

const router = express.Router();

const { createProduct } = require('../controllers/produto.controller');
const { authMIddleware } = require('../middleware/auth.middleware');



router.post("/create", authMIddleware, createProduct);


module.exports = router;