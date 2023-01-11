const express = require('express');

const router = express.Router();

const { createProduct, listProducts, createCategoria } = require('../controllers/produto.controller');
const { authMIddleware } = require('../middleware/auth.middleware');



router.post("/create", authMIddleware, createProduct);
router.post("/categoria/create", authMIddleware, createCategoria);
router.get("/list", authMIddleware, listProducts);


module.exports = router;