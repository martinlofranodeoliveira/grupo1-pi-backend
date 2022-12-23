const express  = require("express");
const router = express.Router();

const ProdutoController = require("../controllers/ProdutoController");

/* GET users listing. */

router.get("/list", ProdutoController.list);
router.post("/create", ProdutoController.create);
router.put("/update/:id", ProdutoController.update);
router.delete("/delete/:id", ProdutoController.delete);
router.get("/detail/:id", ProdutoController.detail);
router.get("/search/:nome", ProdutoController.search);
/* Marca */
router.get("/marca/", ProdutoController.listMarca);
router.get("/marca/detail/:id", ProdutoController.detailMarca);
router.post("/marca/create", ProdutoController.createmarca);
router.put("/marca/update/:id", ProdutoController.updatemarca);
router.delete("/marca/delete/:id", ProdutoController.deletemarca);
/* Categoria */

router.get("/categoria/list", ProdutoController.listCategoria);
router.get("/categoria/detail/:id", ProdutoController.detailCategoria);
router.post("/categoria/create", ProdutoController.createCategoria);
router.put("/categoria/update/:id", ProdutoController.updateCategoria);
router.delete("/categoria/delete/:id", ProdutoController.deleteCategoria);


module.exports = router;


