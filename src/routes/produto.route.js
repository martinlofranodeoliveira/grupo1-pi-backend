const express = require('express');

const router = express.Router();

const { createProduct, listProducts, createCategoria, myProducts } = require('../controllers/produto.controller');
const { authMIddleware } = require('../middleware/auth.middleware');



router.post("/create", authMIddleware, createProduct);
router.post("/categoria/create", authMIddleware, createCategoria);
router.get("/list", authMIddleware, listProducts);
router.get("/myproducts", authMIddleware, myProducts)


module.exports = router;