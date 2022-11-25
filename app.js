//NODE MODULES ------------------------------------------------------------------------
const express = require("express");
const app = express();
const path = require("path");



//CHAMADA DAS ROTAS ------------------------------------------------------------------------
const routerHome = require("./routes/home.js");
const routerProdutos = require("./routes/produtos.js");
const routerServicos = require("./routes/servicos.js");
const routerDescricaoProduto = require("./routes/descricaoProduto.js");
const routerCarrinho = require("./routes/carrinho.js");
const Users = require("./routes/Users.js");
const routerAdmin = require("./routes/admin.js");

//MIDDLEWARES ------------------------------------------------------------------------
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//USO DAS ROTAS ------------------------------------------------------------------------
app.use("/", routerHome);
app.use("/", Users);
app.use("/", routerProdutos);
app.use("/", routerServicos);
app.use("/", routerDescricaoProduto);
app.use("/", routerCarrinho);
app.use("/", routerAdmin);
app.use((req, res) => {
  return res.status(404).render("404");
}); //Rota de erro 404

//SERVIDOR LOCAL ---------------------------------------------------------------
app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001 🚀");
});

module.exports = app;
