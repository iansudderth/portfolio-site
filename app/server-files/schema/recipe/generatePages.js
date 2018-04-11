const mongoose = require('mongoose');
const Recipe = require('./Recipe');
const RecipeAuth = require('./RecipeAuth');
const _ = require('lodash');
const bluebird = require('bluebird');

// mongoose.Promise = bluebird;
// const dburl = process.env.DATABASEURL || 'mongodb://localhost/recipe';
// mongoose.connect(dburl);
// const db = mongoose.connection;

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
    .limit(pageSize);
}

function generatePages(pageIndex, pageSize, callback) {
  if (pageIndex < 0) {
    pageIndex = 0;
  }

  let pages = {
    prev: null,
    current: null,
    next: null,
    index: pageIndex,
  };

  getPage(pageIndex, pageSize)
    .then(currentPageResults => {
      if (currentPageResults.length > 0) {
        pages.current = currentPageResults;
      }
      // console.log('pageIndex', pageIndex);
      getPage(pageIndex + 1, pageSize)
        .then(nextPage => {
          // console.log('nextPage', nextPage);
          if (nextPage.length > 0) {
            pages.next = nextPage;
          }
          if (pageIndex < 1) {
            callback(pages);
          } else {
            getPage(pageIndex - 1, pageSize)
              .then(previousPage => {
                pages.prev = previousPage;
                callback(pages);
              })
              .catch(error => {
                console.log(error);
              });
          }
        })
        .catch(error => {
          console.log(error);
        });
    })
    .catch(error => {
      console.log(error);
    });
}

// generatePages(1, 10, pages => {
//   console.log(pages);
// });

module.exports = generatePages;
