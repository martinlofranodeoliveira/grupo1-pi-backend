const { saveProduct, list, saveCategoria, buscarCategoria, MyProducts } = require('../service/produto.service')

const createProduct = async (req, res) => {
  try {
    const { nome, descricao, preco, estoque, avaliação, categorias_id } = req.body;
    const idUser = req.userId;

    console.log(idUser);


    if (!nome || !descricao || !preco || !estoque || !avaliação || !categorias_id) {
      return res.status(400).send({ message: 'Todos os campos são obrigatórios' });
    }


    const Categoria = await buscarCategoria(categorias_id)

    console.log(Categoria.criador);
    console.log(idUser);

    const id1 = Categoria.criador.toString();
    const id2 = idUser.toString();

    if (id1 !== id2) {
      return res.status(400).send({ message: 'Você não pode criar um produto nessa categoria' });
    }



    await saveProduct(nome, descricao, preco, estoque, avaliação, categorias_id, idUser);



    res.status(201).send({ message: 'Produto criado com sucesso' });

  }
  catch (error) {
    res.status(500).send(error.message);
  }

}

const listProducts = async (req, res) => {

  try {


    const products = await list();

    res.status(200).send({
      resuts: products.map((Item) => ({
        id: Item.id,
        nome: Item.nome,
        descricao: Item.descricao,
        preco: Item.preco,
        estoque: Item.estoque,
        avaliação: Item.avaliação,
        categorias_id: Item.categorias_id,
      })
      )
    });
  }
  catch (error) {
    res.status(500).send(error.message);
  }

}

const myProducts = async (req, res) => {
  try {
    const { id } = req.params;

    const products = await MyProducts(id)



      res.status(200).send({
        resuts: products.map((Item) => ({
          id: Item.id,
          nome: Item.nome,
          descricao: Item.descricao,
          preco: Item.preco,
          estoque: Item.estoque,
          avaliação: Item.avaliação,
          nomeCategoria: Item.categorias,
          nomeCriador: Item.usuarios
        }))
      })




  }
  catch (error) {
    res.status(500).send(error.message);
  }

}

const createCategoria = async (req, res) => {
  try {
    const { nome } = req.body;
    const idUser = req.userId;




    if (!nome) {
      return res.status(400).send({ message: 'Todos os campos são obrigatórios' });
    }

    await saveCategoria(nome, idUser);



    res.status(201).send({ message: 'Categoria criado com sucesso' });

  }
  catch (error) {
    res.status(500).send(error.message);
  }

}








module.exports = {
  createProduct,
  listProducts,
  createCategoria,
  myProducts
}