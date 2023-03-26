'use strict';

const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
  category: { 
    type: String, default: '', 
    required: true 
  },
  description: { 
    type: String, default: '',
    required: true
  },
  name: { 
    type: String, 
    required: true 
  },
  price: { 
    type: String, 
    required: true 
  },
  inventoryCount: { 
    type: Number, 
    required: true 
  },
  image: { 
    type: String, 
    required: true 
  }
});

const storeModel = mongoose.model('store', storeSchema);
console.log(`Database: ${storeModel.db}`);
console.log(`Collection: ${storeModel.collection.name}`);

module.exports = storeModel;