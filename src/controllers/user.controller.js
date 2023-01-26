const { saveUser, emaiExists, enviar, comparePassword, generateToken } = require('../service/user.service');


const createUser = async (req, res) => {
  try {
    const { nome, email, senha, telefone, image } = req.body;

    emaiExists(email);

    const user = await saveUser(nome, email, senha, telefone, image);

    enviar(email);

    res.status(201).send({ message: 'Usuário criado com sucesso' });
  }

  catch (error) {
    res.status(500).send(error.message);
  }
}

const loginUser = async (req, res) => {
  try {
    const { email, senha } = req.body;

    const user = await emaiExists(email);
      console.log(user);

    if (!user) {
      return res.status(400).send({ message: 'Email não existe' });
    }

    const isValidPassword = comparePassword(senha, user.senha);

    if (!isValidPassword) {
      return res.status(400).send({ message: 'Senha incorreta' });
    }

    const token = generateToken(user.id);


    res.status(200).send(token);

  }
  catch (error) {
    res.status(500).send(error.message);
  }
}



module.exports = {
  createUser,
  loginUser
}
