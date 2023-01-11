const db = require('../models/');


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

const list = (idUser) => {
  /* rertonar o nome do usuario que criou o produto e as categorias so pode aparecer as que ele criou */
  const resuts = db.Produto.findAll({
    where: {
      criador: idUser
    },
    include: [
      {
        model: db.Categorias,
        as: 'categorias'
      },
      {
        model: db.Usuarios,
        as: 'usuarios'
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


module.exports = {
  saveProduct,
  list,
  saveCategoria,
  buscarCategoria
}
