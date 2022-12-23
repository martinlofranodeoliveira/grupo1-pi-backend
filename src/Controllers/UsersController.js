/* tabelas de usuarios importa   */
const db = require("../models");


const Usuario = {
    register: (req, res) => {
        res.render("users/register");
    },
    registerUser: (req, res) => {
        db.Usuario.create({
            nome: req.body.nome,
            email: req.body.email,
            senha: req.body.senha,
            telefone: req.body.telefone,
            foto: req.body.foto
        })
        .then(() => {
          res.status(201).json("Criado com sucesso");
        })
        .catch((err) => {
          res.status(400).json(err);
        }
        );
    },
   
  
}




module.exports = Usuario;
