const db = require("../models");
const Op = db.Sequelize.Op;


const Produtos = {
    list: async (req, res) => {
       await db.Produto.findAll({
        include: [
            {association: "Categoria"},
            {association: "Marca"}
        ]
       })
            .then((produtos) => {
                res.status(200).json(produtos);
            })
            .catch((err) => {
                console.log(err);
            });
    },
    create: async (req, res) => {
        /* salvar dados */
        await db.Produto.create({
            nome: req.body.nome,
            descricao: req.body.descricao,
            preco: req.body.preco,
            estoque: req.body.estoque,
            avaliacao: req.body.avaliacao,
            categorias_id: req.body.categorias_id,
            marcas_id: req.body.marcas_id
        })
            .then((produto) => {
                res.status(200).json("Produto criado com sucesso!");
            }
            )
            .catch((err) => {
                console.log(err);
            });
    
    },
    update: async (req, res) => {
        /* atualizar dados */

        await db.Produto.update({
            nome: req.body.nome,
            descricao: req.body.descricao,
            preco: req.body.preco,
            estoque: req.body.estoque,
            avaliacao: req.body.avaliacao,
            categorias_id: req.body.categorias_id,
            marcas_id: req.body.marcas_id
        }, {
            where: {
                id: req.params.id
            }
        })
            .then((produto) => {
                res.status(200).json("Produto atualizado com sucesso!");
            }
            )   
            .catch((err) => {   
                console.log(err);
            });
        },
    delete: async (req, res) => {
        /* deletar produto */
        await db.Produto.destroy({
            where: {
                id: req.params.id
            }
        })
            .then((produto) => {    
                res.status(200).json("Produto deletado com sucesso!");
            }
            )
            .catch((err) => {
                console.log(err);
            }
            );
    },
    detail: async (req, res) => {
        /* detalhar produto */
        await db.Produto.findByPk(req.params.id, {
            include: [
                {association: "Categoria"},
                {association: "Marca"}
            ]
        })
            .then((produto) => {
                res.status(200).json(produto);
            })
            .catch((err) => {
                console.log(err);
            });
    },
    search: async (req, res) => {
        /* buscar produto */
        await db.Produto.findAll({
            where: {
                nome: {
                    [Op.like]: '%' + req.params.nome + '%'
                }
            }
        }, {
            include: [
                {association: "Categoria"},
                {association: "Marca"}
            ]
        })
            .then((produto) => {
                res.status(200).json(produto);
            })
            .catch((err) => {
                console.log(err);
            });
    },
    /* marcas */
    listMarca: async (req, res) => {
        await db.Marca.findAll()
            .then((marcas) => {
                res.status(200).json(marcas);
            })
            .catch((err) => {
                console.log(err);
            });
        
    },
    detailMarca: async (req, res) => {
        await db.Marca.findByPk(req.params.id)
            .then((marca) => {
                res.status(200).json(marca);
            })
            .catch((err) => {
                console.log(err);
            });
    },
    createmarca: async (req, res) => {
        await db.Marca.create({
            nome: req.body.nome
        })
            .then((marca) => {
                res.status(200).json("Marca criada com sucesso!");
            }
            )
            .catch((err) => {
                console.log(err);
            });
    },
    updatemarca: async (req, res) => {
        await db.Marca.update({
            nome: req.body.nome
        }, {
            where: {
                id: req.params.id
            }
        })
            .then((marca) => {
                res.status(200).json("Marca atualizada com sucesso!");
            }
            )
            .catch((err) => {
                console.log(err);
            });
    },
    deletemarca: async (req, res) => {
        await db.Marca.destroy({
            where: {
                id: req.params.id
            }
        })
            .then((marca) => {
                res.status(200).json("Marca deletada com sucesso!");
            }
            )
            .catch((err) => {
                console.log(err);
            });
    },
    /* categoria */
    listCategoria: async (req, res) => {
        await db.Categoria.findAll()
            .then((categorias) => {
                res.status(200).json(categorias);
            })
            .catch((err) => {
                console.log(err);
            });
    },
    detailCategoria: async (req, res) => {
        await db.Categoria.findByPk(req.params.id)
            .then((categoria) => {
                res.status(200).json(categoria);
            })
            .catch((err) => {
                console.log(err);
            });
    },
    createCategoria: async (req, res) => {
        await db.Categoria.create({
            nome: req.body.nome
        })
            .then((categoria) => {
                res.status(200).json("Categoria criada com sucesso!");
            }
            )
            .catch((err) => {
                console.log(err);
            });
    },
    updateCategoria: async (req, res) => {
        await db.Categoria.update({
            nome: req.body.nome
        }, {
            where: {
                id: req.params.id
            }
        })
            .then((categoria) => {
                res.status(200).json("Categoria atualizada com sucesso!");
            }
            )
            .catch((err) => {
                console.log(err);
            });
    },
    deleteCategoria: async (req, res) => {
        await db.Categoria.destroy({
            where: {
                id: req.params.id
            }
        })
            .then((categoria) => {
                res.status(200).json("Categoria deletada com sucesso!");
            }
            )
            .catch((err) => {
                console.log(err);
            });
        }
}

module.exports = Produtos;

