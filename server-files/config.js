const config = {
  pageSize: 10,
  saltingRounds: process.env.SALTING_ROUNDS || 8,
  sessionSecret: process.env.SESSION_SECRET || 'stuff and things',
  dburl: process.env.DATABASEURL || 'mongodb://localhost/recipe',
  port: process.env.PORT || 3000,
  dev: process.env.NODE_ENV !== 'production',
};

module.exports = config;
