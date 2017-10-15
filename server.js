const express = require('express');
const next = require('next');
const compression = require('compression');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const _ = require('lodash');
const session = require('express-session');
const bluebird = require('bluebird');
const cookieParser = require('cookie-parser');
const MongoStore = require('connect-mongo')(session);

const config = require('./server-files/config');

// =======================
// Mongoose Cofigs
// =======================

mongoose.connect(config.dburl);
mongoose.Promise = bluebird;
const db = mongoose.connection;

// =======================
// Seeds
// =======================

const todoSeedDB = require('./server-files/seeds/todoSeed');
const recipeBigSeedDB = require('./server-files/seeds/recipeBigSeed');
const recipeSeedDB = require('./server-files/seeds/recipeSeed');

if (_.includes(process.argv, '--seed')) {
  todoSeedDB();
}

if (_.includes(process.argv, '--seed')) {
  recipeSeedDB();
}

if (_.includes(process.argv, '--big-seed')) {
  recipeBigSeedDB();
}

// =======================
// App Setup
// =======================

const app = next({ dir: '.', dev: config.dev });
const handle = app.getRequestHandler();

const pageRenderRoutes = require('./server-files/routes/pageRenderRoutes');
const todoApiRoutes = require('./server-files/routes/todoApiRoutes');
const recipeApiRoutes = require('./server-files/routes/recipeApiRoutes');
const authRoutes = require('./server-files/routes/authRoutes');

const sessionConfig = session({
  secret: config.sessionSecret,
  saveUninitialized: true,
  resave: true,
  store: new MongoStore({ mongooseConnection: db }),
});

app.prepare().then(() => {
  const server = express();
  server.use('/static', express.static('./static'));
  server.use(bodyParser.json());
  server.use(sessionConfig);
  server.use(cookieParser());
  server.use(compression());

  // =======================
  // Portfolio Render Routes
  // =======================

  server.get('/', pageRenderRoutes.renderPortfolioHomePage(app));

  // =======================
  // Todo Routes
  // =======================

  server.get('/todo/:id', pageRenderRoutes.renderTodoList(app));

  server.put('/todo/:id', todoApiRoutes.updatedRecipe);

  // =======================
  // Recipe Routes
  // =======================

  server.get('/recipe', pageRenderRoutes.renderRecipeHomePage(app));

  // Recipe API Routes

  server.get('/recipe/index/:pageIndex', recipeApiRoutes.pageRoute);

  server.post('/recipe/new', recipeApiRoutes.newRecipe);

  server.get('/recipe/:id', recipeApiRoutes.getRecipe);

  server.post('/recipe/update', recipeApiRoutes.updateRecipe);

  server.delete('/recipe/delete/:id', recipeApiRoutes.deleteRecipe);

  // =======================
  // Portfolio Render Routes
  // =======================

  server.post('/recipe/auth/login', authRoutes.login);

  server.post('/recipe/auth/logout', authRoutes.logout);

  // =======================
  // Redirect Routes
  // =======================

  server.get('*', (req, res) => handle(req, res));

  // =======================
  // Listener
  // =======================

  server.listen(config.port, err => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
