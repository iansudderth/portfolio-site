const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoListSchema = new Schema({
  items: Object,
  baseItem: Schema.Types.Mixed,
});

const TodoState = mongoose.model('TodoState', todoListSchema);

module.exports = TodoState;
