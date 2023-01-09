const db = require('../models/');


const saveProduct = (nome, descricao, preco, estoque, avaliação, categorias_id, ) => {
  const save =  db.Produto.create({
    nome,
    descricao,
    preco,
    estoque,
    avaliação,
    categorias_id,
    
  });

  return save;


 

}

module.exports = {
  saveProduct
}
