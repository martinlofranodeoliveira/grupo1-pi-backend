const express = require("express");
const router = express.Router();

const HomeController = require("../controllers/HomeController");


/* home  */
router.get("/", HomeController.index);
router.post("/", HomeController.contato); // POST /home

/*planos */
router.get('/plano-usuario', HomeController.selecaoPlano)//plano usuarios 
router.get('/plano-parceiro', HomeController.selecaoPlanoProfissional)//planos parceiro


router.get('/checkout-planos',HomeController.checkoutPlanos)//checkoutPlanos
router.get('/checkout', HomeController.checkout)//checkout

/*servicos */
router.get('/servicos', HomeController.servicos)//servicos



module.exports = router;
