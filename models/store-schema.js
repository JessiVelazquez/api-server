'use strict';

const mongoose = require('mongoose');

const storeSchema = mongoose.Schema({
  category: { type: String, default: '', required: true },
  name: { type: String, required: true },
  description: { type: String, default: '', required: true },
  price: { type: String, required: true },
  inventoryCount: { type: Number, required: true },
  image: { type: String, required: true }
});

const storeModel = mongoose.model('store', storeSchema);

module.exports = storeModel;