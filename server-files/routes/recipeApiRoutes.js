const mongoSanitizer = require('mongo-sanitize');
const bcrypt = require('bcrypt');
const Recipe = require('../schema/recipe/Recipe');
const RecipeAuth = require('../schema/recipe/RecipeAuth');
const generatePages = require('../schema/recipe/generatePages');
const { pageSize } = require('../config');
const {
  sanitizeString,
  validatePassword,
} = require('../serverHelperFunctions');
const config = require('../config');

function pageRoute(req, res) {
  const pageIndex = parseInt(req.params.pageIndex, 10);
  generatePages(pageIndex, pageSize, pages => {
    console.log(pages);
    res.json({ pages });
  });
}

function getRecipe(req, res) {
  const id = sanitizeString(req.params.id);
  Recipe.findOne({ _id: id }).then(response => {
    res.json(response);
  });
}

function newRecipe(req, res) {
  const recipe = mongoSanitizer(req.body.recipe);
  const password = sanitizeString(req.body.password);
  if (validatePassword(password)) {
    recipe.password = password ? true : false;
    Recipe.create(recipe)
      .then(newRecipeDB => {
        if (password) {
          bcrypt
            .hash(password, config.saltingRounds)
            .then(hash => {
              const auth = new RecipeAuth();
              auth.recipeId = newRecipe._id;
              auth.hash = hash;
              return auth.save();
            })
            .then(auth => {
              res.json({
                status: 'SUCCESS',
                recipeStatus: 'RECIPE CREATED SUCCESSFULLY',
                authStatus: 'RECIPE AUTH CREATED SUCCESSFULLY',
                recipeId: newRecipeDB._id,
              });
            })
            .catch(error => {
              console.log(error);
              res.json({
                status: 'ERROR',
                recipeStatus: 'RECIPE CREATED SUCCESSFULLY',
                authStatus: 'ERROR IN CREATING AUTH',
              });
            });
        } else {
          res.json({
            status: 'SUCCESS',
            recipeStatus: 'RECIPE CREATED SUCCESSFULLY',
            recipeId: newRecipeDB._id,
          });
        }
      })
      .catch(error => {
        res.json({
          status: 'ERROR',
          recipeStatus: 'ERROR IN CREATING RECIPE',
        });
        console.log(error);
      });
  } else {
    res.json({
      status: 'ERROR',
      recipeStatus: null,
      authStatus: 'INVALID_PASSWORD',
    });
  }
}

function updateRecipe(req, res) {
  const recipeId = sanitizeString(req.body.recipeId);
  const recipe = mongoSanitizer(req.body.recipe);
  if (req.session.recipeId === recipeId) {
    Recipe.findByIdAndUpdate(recipeId, recipe)
      .then(updatedRecipe => {
        if (!updatedRecipe) {
          res.json({
            status: 'ERROR',
            recipeStatus: 'RECIPE NOT FOUND',
            authStatus: null,
          });
        } else {
          req.session.destroy(error => {
            if (error) {
              console.log(error);
            }
          });
          res.json({
            status: 'SUCCESS',
            recipeStatus: 'RECIPE UPDATED SUCCESSFULLY',
            authStatus: 'PASSWORD ACCEPTED',
          });
        }
      })
      .catch(error => {
        console.log(error);
        res.json({
          status: 'ERROR',
          recipeStatus: 'ERROR IN RECIPE UPDATE',
          authStatus: null,
        });
      });
  } else {
    res.json({
      status: 'ERROR',
      authStatus: 'NOT LOGGED IN',
      recipeStatus: null,
    });
  }
}

function deleteRecipe(req, res) {
  const recipeId = sanitizeString(req.params.id);
  if (req.session.recipeId === recipeId) {
    Recipe.findByIdAndRemove(recipeId)
      .then(response => {
        RecipeAuth.deleteOne({ recipeId })
          .then(auth => {
            res.json({
              status: 'SUCCESS',
              authStatus: 'AUTH DELETED SUCCESSFULLY',
              recipeStatus: 'RECIPE DELETED SUCCESSFULLY',
            });
          })
          .catch(error => {
            console.log(error);
            res.json({
              status: 'ERROR',
              authStatus: 'ERROR IN DELETING AUTH',
              recipeStatus: 'RECIPE DELETED',
            });
          });
      })
      .catch(error => {
        console.log(error);
        res.json({
          status: 'ERROR',
          recipeStatus: 'ERROR IN FINDING RECIPE',
        });
      });
  } else {
    res.json({
      status: 'ERROR',
      authStatus: 'NOT LOGGED IN',
      recipeStatus: null,
    });
  }
}

module.exports.pageRoute = pageRoute;
module.exports.getRecipe = getRecipe;
module.exports.newRecipe = newRecipe;
module.exports.updateRecipe = updateRecipe;
module.exports.deleteRecipe = deleteRecipe;
