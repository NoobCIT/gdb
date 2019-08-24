const user = require('../models/user');

const checkPassword = async (req, res, next) => {
  try {
    console.log(req.body);

    if (!user) {
      throw new Error();
    }

    var password = req.body.password;
    var passwordConfirmation = req.body.passwordConfirmation;

    if (password == passwordConfirmation) {
      next()
    } else {
      throw new Error();
    }
  } catch (e) {
    res.status(401).send({ error: 'Password and Password Confirmation does not match' });
  }
};

module.exports = checkPassword;
