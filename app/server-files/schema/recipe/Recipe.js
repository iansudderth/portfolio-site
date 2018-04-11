const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  password: Boolean,
  title: String,
  serving: {
    amount: { type: Number, default: 1 },
    unit: { type: String, default: ' servings' },
  },
  recipe: [
    {
      key: Number,
      ingredients: [
        {
          name: { type: String, default: '' },
          amount: { type: Schema.Types.Mixed, default: null },
          unit: { type: String, default: 'g' },
          key: { type: Number },
        },
      ],
      procedure: [
        {
          content: { type: String },
          key: { type: Number },
        },
      ],
    },
  ],
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
