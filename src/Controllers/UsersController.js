/* tabelas de usuarios importa   */
const db = require("../models");
const Usuario = db.Usuario;

const Users = {
  resgiter: (req, res) => {
    return res.status(200).render("register");
  },
  registerUser: async (req, res) => {
    const User = req.body;
    try {
      await Usuario.create(User);
      return res.status(200).json("Usuario cadastrado com sucesso");
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  
  /* permetir que entre no dashboard so que estiver logado  */
  login: (req, res) => {
    return res.status(200).render("login");
  },
  /* criar um cookie que deixa a pessoa logada no site */
  loginUser: async (req, res) => {
    const User = req.body;
    try {
      const user = await Usuario.findOne({
        where: {
          email: User.email,
          senha: User.senha,
        },
      });
      if (user) {
        res.cookie("user", user);
        return res.status(200).redirect("Voce esta logado");
      } else {
        return res.status(400).json("Usuario nao encontrado");
      }
    } catch (error) {
      return res.status(400).json(error);
    }
  },
  /* a pessoa so pode acessar o dashboard se estiver logada  */
  dashboard: (req, res) => {
    /* verificar se ap pessoa está logada  */
    if (!req.cookies.user) {
      return res.status(400).json("Usuario nao logado");
    }
    return res.status(200).json("voce acessou o dashboard");
  },
  /* a pessoa so pode acessar o dashboard se estiver logada  */
  logout: (req, res) => {
    res.clearCookie("user");
    return res.status(200).redirect("/");
  }


  
  
}




module.exports = Users;
