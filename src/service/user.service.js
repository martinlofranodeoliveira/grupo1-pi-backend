const db = require('../models/');
const Usuarios = db.Usuarios;
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');

const saveUser = (nome, email, senha, telefone, image) => {

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(senha, salt);

  return Usuarios.create({
    nome,
    email,
    senha: hash,
    telefone,
    image
  })

}

const emaiExists = async (email) => {
  const user = await Usuarios.findOne({ where: { email } });
  return user;
}

const findByIdUserService = async (id) => {
  const user = await Usuarios.findOne({ where: { id } });
  return user;
}

const enviar = (email) => {

  const transporter = nodemailer.createTransport({
    service: 'Hotmail',
    auth: {
      user: 'italoDeveloper@hotmail.com',
      pass: 'italo(123)'
    }
  })

  const Email = {
    from: 'pi  <italoDeveloper@hotmail.com>',
    to: email,
    subject: 'Teste de email',
    text: 'email enviado com nodemailer.',
    html: '<h1>Email enviado com nodemailer </h1>'

  }

  transporter.sendMail(Email, (err, result) => {
    if (err) return console.log(err)
    console.log('Mensagem enviada!!!! ' + result)
  })
}

/* usar bcrypt para compara a senha recebida  */
const comparePassword = (senha, hash) => {
  return bcrypt.compareSync(senha, hash);
}

const generateToken = (id) => jwt.sign({id:id}, process.env.SECRET_JWT, {expiresIn: 999999})






module.exports = {
  saveUser,
  emaiExists,
  enviar,
  comparePassword,
  generateToken,
  findByIdUserService
}