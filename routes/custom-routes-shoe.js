'use strict';

const express = require('express');

const genSchema = require('../models/generic-collection.js');
const Shoe = require('../models/shoe-schema.js');
const shoe = new genSchema(Shoe);

const routerShoe = express.Router();

routerShoe.get('/shoe', getShoe);
routerShoe.get('/shoe/:id', getOneShoe);
routerShoe.post('/shoe', createShoe);
routerShoe.put('/shoe/:id', updateShoe);
routerShoe.delete('/shoe/:id', deleteShoe);


async function getShoe(req, res) {
  let getAllShoe = await shoe.read();
  res.status(200).json(getAllShoe);
}

async function getOneShoe(req, res) {
  const id = parseInt(req.params.id);
  let theShoe = await shoe.read(id);
  res.status(200).json(theShoe);
}

async function createShoe(req, res) {
  let content = req.body;
  let createdShoe = await shoe.create(content);
  res.status(201).json(createdShoe);
}

async function updateShoe(req, res) {
  const id = parseInt(req.params.id);
  let content = req.body;
  let newShoe = await shoe.update(id, content);
  res.status(200).json(newShoe);
}

async function deleteShoe(req, res) {
  const id = parseInt(req.params.id);
  await shoe.delete(id);
  res.status(200).send({msg: 'shoe deleted'});
}

module.exports = routerShoe;