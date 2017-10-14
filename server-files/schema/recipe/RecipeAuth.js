const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipeAuthSchema = new Schema({
  recipeId: Schema.Types.ObjectId,
  hash: String,
});

const RecipeAuth = mongoose.model('RecipeAuth', recipeAuthSchema);

module.exports = RecipeAuth;
