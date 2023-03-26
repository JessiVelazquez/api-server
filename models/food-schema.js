'use strict';

const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
  name: { type: String, required: true }, // required property for an item
  calories: { type: Number, required: true },
  type: { type: String, uppercase: true, enum: ['FRUIT', 'VEG', 'MEAT']}
});

const foodModel = mongoose.model('food', foodSchema);
console.log(`Database: ${foodModel.db}`);
console.log(`Collection: ${foodModel.collection.name}`);

module.exports = foodModel;