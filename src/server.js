'use strict';

const dotenv = require('dotenv');
const express = require('express');
const app = express();

dotenv.config();
const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI;

const options = { useNewUrlParser: true, useUnifiedTopology: true } 

mongoose.connect(MONGODB_URI, options);

const logger = require('../middleware/logger.js');
const customRoutesFood = require('../routes/custom-routes-food.js');
const customRoutesShoe = require('../routes/custom-routes-shoe.js')

const notFound = require('../errors/404.js');
const errors = require('../errors/500.js');

app.use(express.json());

app.use(logger);
app.use(customRoutesFood);
app.use(customRoutesShoe);

// these live at the bottom of your server
app.use('*', notFound);
app.use(errors);

module.exports = {
  server: app,
  start: port => {
    app.listen(port, () => console.log(`server up: ${port}`));
  }
}




