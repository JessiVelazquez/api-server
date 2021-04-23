'use strict';

const express = require('express');

const genSchema = require('../models/generic-collection.js');
const Food = require('../models/food-schema.js');
const food = new genSchema(Food);

const routerFood = express.Router();

routerFood.get('/food', getFood);
routerFood.get('/food/:id', getOneFood);
routerFood.post('/food', createFood)
routerFood.put('/food/:id', updateFood);
routerFood.delete('/food/:id', deleteFood);


async function getFood(req, res) {
  let getAllFood = await food.read();
  res.status(200).json(getAllFood);
}

async function getOneFood(req, res) {
  const id = parseInt(req.params.id);
  let theFood = await food.read(id);
  res.status(200).json(theFood);
}

async function createFood(req, res) {
  let content = req.body;
  let createdFood = await food.create(content);
  res.status(201).json(createdFood);
}

async function updateFood(req, res) {
  const id = parseInt(req.params.id);
  let content = req.body;
  let newFood = await food.update(id, content);
  res.status(200).json(newFood);
}

async function deleteFood(req, res) {
  const id = parseInt(req.params.id);
  await food.delete(id);
  res.status(200).send({msg: 'food item deleted'});
}

module.exports = routerFood;