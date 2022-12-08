
const HomeController = {
    index: (req, res) => {
        return res.status(200).render("home");
    },
    contato: (req, res) => {
        return res.status(200).json('Contact success');
    },
    selecaoPlano: (req, res) => {
        return res.status(200).render("plano-usuario");
    },
    selecaoPlanoProfissional: (req, res) => {
        return res.status(200).render("plano-usuario.ejs");
    },
    checkoutPlanos: (req, res) => {
        return res.status(200).render("checkout-planos");
    },
    checkout: (req, res) => {
        return res.status(200).render("checkout");
    },
    servicos: (req, res) => {
        return res.status(200).render("servicos");
    },
    
};

module.exports = HomeController;