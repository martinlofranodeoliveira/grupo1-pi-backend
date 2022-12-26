
const nodemailer = require('nodemailer');

const db = require('../models');


const usuario =  {
  Resgister : async (req, res) => {
    const { nome, email, senha, telefone, image  } = req.body;
    /* verificar se n ah o msm email no banco */
    const userExists = await db.Usuarios.findOne({ where: { email } });
    if (userExists) {
      return res.status(400).json({ msg: 'User already exists.' })
    }
    
    const user = await db.Usuarios.create({ nome, email, senha, telefone, image  });
    /* enviar email */
    const transporter = nodemailer.createTransport({
      /* com hotmail */
       service: 'hotmail',
        auth: {
          user: 'italoDeveloper@hotmail.com',
          pass: 'italo(123)'
        }
    });

    const mailOptions = {
      from: 'italoDeveloper@hotmail.com',
      to: email,
      subject: 'Sending Email using Node.js',
      text: 'Register susssess'
    };
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });


    return res.json("criado com sucesso");

  }
}

module.exports = usuario;