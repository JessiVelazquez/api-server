'use strict';

const mongoose = require('mongoose');

const shoeSchema = mongoose.Schema({
  name: { type: String, required: true }, // required property for an item
  size: { type: Number, required: true },
  type: { type: String, uppercase: true, enum: ['M', 'W']}
});

const shoeModel = mongoose.model('shoe', shoeSchema);

module.exports = shoeModel;