const express = require('express');

const router = express.Router();

const { createProduct, listProducts, createCategoria, myProducts, SearchByTitle } = require('../controllers/produto.controller');
const { authMIddleware } = require('../middleware/auth.middleware');



router.post("/create", authMIddleware, createProduct); // cria produto
router.post("/categoria/create", authMIddleware, createCategoria); // cria categoria
router.get("/list", authMIddleware, listProducts); // lista todos os produtos
router.get("/myproducts/:id", myProducts) //id do usuario
//fazer rota para listar por pesquisa por  title
router.get("/search/", SearchByTitle)






module.exports = router;