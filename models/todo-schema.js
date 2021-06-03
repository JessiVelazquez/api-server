'use strict';

const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
  _id: { type: Number, required: true }, // required property for an item
  complete: { type: Boolean, required: true },
  text: { type: String, required: true },
  difficulty: { type: Number },
  assignee: { type: String, required: true },
});

const todoModel = mongoose.model('todo', todoSchema);

module.exports = todoModel;