var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var todoListSchema = new Schema({
	items: Object,
	baseItem: Schema.Types.Mixed
})

var TodoState = mongoose.model('TodoState', todoListSchema)

module.exports =  TodoState