const mongoose = require('mongoose');
const Recipe = require('../schema/recipe/Recipe');
const RecipeAuth = require('../schema/recipe/RecipeAuth');
const _ = require('lodash');

function generateReecipeAtIndex(index) {
  return {
    password: false,
    title: `Seeded Recipe ${index}`,
    serving: { amount: 8, unit: 'servings' },
    recipe: [
      {
        key: _.random(0, 65536),
        ingredients: [
          {
            name: 'An Ingredient',
            amount: 80,
            unit: 'g',
            key: _.random(0, 65536),
          },
        ],
        procedure: [
          {
            content: 'Some sort of step',

            key: _.random(0, 65536),
          },
        ],
      },
    ],
  };
}

function generateRecipeArray(count) {
  const recipeArray = [];
  for (let i = 1; i <= count; i++) {
    recipeArray.push(generateReecipeAtIndex(i));
  }
  return recipeArray;
}

const recipeArray = generateRecipeArray(100);

function bigSeedDB() {
  Recipe.remove({})
    .then(response => {
      console.log('Recipes dropped successfully');
      return Recipe.create(recipeArray);
    })
    .then(response => {
      console.log('Recipe db seeded successfully');
    })
    .catch(error => {
      console.log('error in Recipe drop/seed');
      console.log(error);
    });

  RecipeAuth.remove({})
    .then(response => {
      console.log('RecipeAuth dropped successfully');
    })
    .catch(error => {
      console.log('Error in  RecipeAuth drop');
      console.log(error);
    });
}

module.exports = bigSeedDB;
