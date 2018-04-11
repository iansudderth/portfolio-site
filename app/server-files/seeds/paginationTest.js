const mongoose = require('mongoose');
const Recipe = require('../schema/recipe/Recipe');
const RecipeAuth = require('../schema/recipe/RecipeAuth');
const _ = require('lodash');
const bluebird = require('bluebird');

mongoose.Promise = bluebird;
const dburl = process.env.DATABASEURL || 'mongodb://localhost/recipe';
mongoose.connect(dburl);
const db = mongoose.connection;

function getPage(page, pageSize) {
  if (page < 0) {
    page = 0;
  }

  if (pageSize < 1) {
    pageSize = 1;
  }

  const skip = page * pageSize;

  return Recipe.find({})
    .select({ title: true })
    .sort({ title: 'asc' })
    .skip(skip)
    .limit(pageSize)
    .then(response => {
      console.log(response);
    })
    .catch(error => {});
}

getPage(-5, 5);
