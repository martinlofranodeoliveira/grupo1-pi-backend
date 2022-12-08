const db = require("../models");
const Produto = db.Produtos
const Marca = db.Marcas;
const Categoria = db.Categorias;
const Op = db.Sequelize.Op;


const Produtos = {
    list : async (req, res) => {
        
        try {
            const produtos = await Produto.findAll();
            return res.status(200).json(produtos);
        } catch (error) {
            return res.status(400).json(error);
        }
      
    },
    detail : async (req, res) => {
        try {
            const produto = await Produto.findByPk(req.params.id);
            return res.status(200).json(produto);
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    create : async (req, res) => {
        try {
            const produto = await Produto.create(req.body);
            return res.status(200).json(produto);
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    update : async (req, res) => {
        try {
            const produto = await Produto.update(req.body, {where: {id: req.params.id}});
            return res.status(200).json(produto);
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    delete : async (req, res) => {
        try {
            const produto = await Produto.destroy({where: {id: req.params.id}});
            return res.status(200).json(produto);
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    search : async (req, res) => {
        try {
            const produto = await Produto.findAll({where: {nome: {[Op.like]: `%${req.params.nome}%`}}});
            return res.status(200).json(produto);
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    listMarca : async (req, res) => {
        try {
            const marcas = await Marca.findAll();
            return res.status(200).json(marcas);
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    detailMarca : async (req, res) => {
        try {
            const marca = await Marca.findByPk(req.params.id);
            return res.status(200).json(marca);
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    createMarca : async (req, res) => {
        try {
            const marca = await Marca.create(req.body);
            return res.status(200).json(marca);
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    updateMarca : async (req, res) => {
        try {
            const marca = await Marca.update(req.body, {where: {id: req.params.id}});
            return res.status(200).json(marca);
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    deleteMarca : async (req, res) => {
        try {
            const marca = await Marca.destroy({where: {id: req.params.id}});
            return res.status(200).json(marca);
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    listCategoria : async (req, res) => {
        try {
            const categorias = await Categoria.findAll();
            return res.status(200).json(categorias);
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    detailCategoria : async (req, res) => {
        try {
            const categoria = await Categoria.findByPk(req.params.id);
            return res.status(200).json(categoria);
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    createCategoria : async (req, res) => {
        try {
            const categoria = await Categoria.create(req.body);
            return res.status(200).json(categoria);
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    updateCategoria : async (req, res) => {
        try {
            const categoria = await Categoria.update(req.body, {where: {id: req.params.id}});
            return res.status(200).json(categoria);
        } catch (error) {
            return res.status(400).json(error);
        }
    },
    deleteCategoria : async (req, res) => {
        try {
            const categoria = await Categoria.destroy({where: {id: req.params.id}});
            return res.status(200).json(categoria);
        } catch (error) {
            return res.status(400).json(error);
        }
    }
    
}

module.exports = Produtos;

