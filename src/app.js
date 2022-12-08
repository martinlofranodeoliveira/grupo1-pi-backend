//NODE MODULES ------------------------------------------------------------------------
const express = require("express");
const app = express();




//CHAMADA DAS ROTAS ------------------------------------------------------------------------
const routerHome = require('./Router/home.js');
const Users = require('./Router/Users.js');
const Produtos = require('./Router/Produtos.js');



/* const routerProdutos = require("./routes/produtos.js");
const routerServicos = require("./routes/servicos.js");
const routerDescricaoProduto = require("./routes/descricaoProduto.js");
const routerCarrinho = require("./routes/carrinho.js");
const Users = require("./routes/Users.js");
const routerAdmin = require("./routes/admin.js"); */

//MIDDLEWARES ------------------------------------------------------------------------
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//USO DAS ROTAS ------------------------------------------------------------------------
app.use("/home", routerHome);
app.use("/users", Users);
app.use("/produtos", Produtos);
/*
app.use("/", routerProdutos);
app.use("/", routerServicos);
app.use("/", routerDescricaoProduto);
app.use("/", routerCarrinho);
app.use("/", routerAdmin); */
app.use((req, res) => {
  return res.status(404).render("404");
}); //Rota de erro 404

//SERVIDOR LOCAL ---------------------------------------------------------------
app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001 🚀");
});

module.exports = app;
