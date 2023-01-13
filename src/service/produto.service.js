const db = require('../models/');
const like = require('sequelize').Op.like;



const saveProduct = (nome, descricao, preco, estoque, avaliação, categorias_id, idUser) => {

  const save = db.Produto.create({
    nome,
    descricao,
    preco,
    estoque,
    avaliação,
    categorias_id,
    criador: idUser

  });

  return save;

}

const list = () => {

  const resuts = db.Produto.findAll({

  });


  return resuts;



}

const MyProducts = (idUser) => {
  /* restonar com todos os dados da categoria e do criador do produto*/
  const resuts = db.Produto.findAll({
    where: {
      criador: idUser
    },
    include: [
      {
        model: db.Categorias,
        as: 'categorias',
        attributes: ['nome']
      },
      {
        model: db.Usuarios,
        as: 'usuarios',
        attributes: ['nome']
      }
    ]
  });


  return resuts;

}


const saveCategoria = (nome, idUser) => {

  const save = db.Categorias.create({
    nome,
    criador: idUser

  });

  return save;

}

const buscarCategoria = async (id) => {
  const resuts = await db.Categorias.findOne({
    where: {
      id
    }
  })

  return resuts;
}

const listbytitle = async (nome) => {
  const resuts = await db.Produto.findAll({
    /* restonar o porduto intero  */
    where: {
      nome: {
        [like]: `%${nome}%`
      }
    },
    include: [
      {
        model: db.Categorias,
        as: 'categorias',
        attributes: ['nome']
      },
      {
        model: db.Usuarios,
        as: 'usuarios',
        attributes: ['nome']
      }
    ] 
  })
  console.log(resuts);
  return resuts;
}




module.exports = {
  saveProduct,
  list,
  saveCategoria,
  buscarCategoria,
  MyProducts,
  listbytitle
}
