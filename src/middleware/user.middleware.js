const {emaiExists} = require('../service/user.service');

/* fazer uma validação de email usando middleware */
const EmailExists = async (req, res, next) => {
  const { email } = req.body;
  const user = await emaiExists(email);
  if (user) {
    return res.status(400).send({ message: 'Email já existe' });
  }
  next();
}









module.exports = {
  EmailExists,

}


