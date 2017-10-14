const config = require('../config');
const generatePages = require('../schema/recipe/generatePages');
const TodoState = require('../schema/todo-list/TodoState');

const generateNewTodoList = require('../schema/todo-list/generateNewTodoList');

function renderRecipeHomePage(app) {
  return (req, res) => {
    generatePages(0, config.pageSize, pages => {
      const mergedQuery = Object.assign({}, req.query, {
        recipeList: pages,
      });
      app.render(req, res, '/recipe', mergedQuery);
    });
  };
}

function renderPortfolioHomePage(app) {
  return (req, res) => {
    app.render(req, res, '/index', req.query);
  };
}

function renderTodoList(app) {
  return (req, res) => {
    TodoState.findOne({ _id: req.params.id }, (error, initialState) => {
      if (error) {
        console.log('State not found, making new state and redirecting');
        TodoState.create(generateNewTodoList(), (err, newState) => {
          if (err) {
            console.log(err);
            res.send('Something Went Wrong');
          } else {
            console.log('new state made at ', newState._id);
            res.redirect(`/todo/${newState._id}`);
          }
        });
      } else {
        console.log('todo list found');
        const mergedQuery = Object.assign({}, req.query, { initialState });
        return app.render(req, res, '/todo', mergedQuery);
      }
    });
  };
}

module.exports.renderRecipeHomePage = renderRecipeHomePage;
module.exports.renderPortfolioHomePage = renderPortfolioHomePage;
module.exports.renderTodoList = renderTodoList;
