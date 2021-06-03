'use strict';

const dotenv = require('dotenv');
const express = require('express');
const app = express();
const cors = require('cors');

dotenv.config();
const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/food';

const options = { useNewUrlParser: true, useUnifiedTopology: true } 

mongoose.connect(MONGODB_URI, options);

const logger = require('../middleware/logger.js');
const customRoutesFood = require('../routes/custom-routes-food.js');
const customRoutesShoe = require('../routes/custom-routes-shoe.js');
const customRoutesToDo = require('../routes/custom-routes-todo.js');

const notFound = require('../errors/404.js');
const errors = require('../errors/500.js');

app.use(cors());
app.use(express.json());

app.use(logger);
app.use(customRoutesFood);
app.use(customRoutesShoe);
app.use(customRoutesToDo);

// these live at the bottom of your server
app.use('*', notFound);
app.use(errors);

module.exports = {
  server: app,
  start: port => {
    app.listen(port, () => console.log(`server up: ${port}`));
  }
}




