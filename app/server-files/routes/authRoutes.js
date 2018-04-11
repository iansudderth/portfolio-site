const bcrypt = require('bcrypt');

const RecipeAuth = require('../schema/recipe/RecipeAuth');
const {
  sanitizeString,
  validatePassword,
} = require('../serverHelperFunctions');

function login(req, res) {
  const recipeId = sanitizeString(req.body.id);
  const password = sanitizeString(req.body.password);

  if (validatePassword(password)) {
    RecipeAuth.findOne({ recipeId })
      .then(auth => {
        if (auth) {
          bcrypt.compare(password, auth.hash).then(passwordIsCorrect => {
            if (passwordIsCorrect) {
              req.session.recipeId = recipeId;
              res.json({
                status: 'SUCCESS',
                authStatus: 'CORRECT PASSWORD',
              });
            } else {
              res.json({
                status: 'SUCCESS',
                authStatus: 'INCORRECT PASSWORD',
              });
            }
          });
        } else {
          res.json({
            status: 'ERROR',
            authStatus: 'NO AUTH RECORD',
          });
        }
      })
      .catch(error => {
        res.json({
          status: 'ERROR',
          authStatus: 'ERROR FINDING AUTH RECORD',
        });
      });
  } else {
    res.json({
      status: 'ERROR',
      recipeStatus: null,
      authStatus: 'INVALID_PASSWORD',
    });
  }
}

function logout(req, res) {
  req.session.destroy(error => {
    if (error) {
      console.log(error);
      res.json({
        status: 'ERROR',
        authStatus: 'LOGOUT FAILED',
      });
    } else {
      res.json({
        status: 'SUCCESS',
        authStatus: 'LOGOUT SUCCESS',
      });
    }
  });
}

module.exports.login = login;
module.exports.logout = logout;
