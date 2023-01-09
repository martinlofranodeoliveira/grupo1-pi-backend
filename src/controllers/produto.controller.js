const { saveProduct } = require('../service/produto.service')

const createProduct = async (req, res) => {
  try {
    const { nome, descricao, preco, estoque, avaliação, categorias_id } = req.body;

    if (!nome || !descricao || !preco || !estoque || !avaliação || !categorias_id ) {
      return res.status(400).send({ message: 'Todos os campos são obrigatórios' });
    }

    await saveProduct(nome, descricao, preco, estoque, avaliação, categorias_id);



    res.status(201).send({ message: 'Produto criado com sucesso' });

  }
  catch (error) {
    res.status(500).send(error.message);
  }

}


module.exports = {
  createProduct
}