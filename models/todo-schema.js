'use strict';

const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
  complete: { type: Boolean, default: false, required: true },
  text: { type: String, required: true },
  difficulty: { type: Number, default: 1 },
  assignee: { type: String, required: true },
});

const todoModel = mongoose.model('todo', todoSchema);
console.log(`Database: ${todoModel.db}`);
console.log(`Collection: ${todoModel.collection.name}`);

module.exports = todoModel;