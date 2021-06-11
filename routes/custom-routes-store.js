'use strict';

const express = require('express');

const genSchema = require('../models/generic-collection.js');
const Store = require('../models/store-schema.js');
const store = new genSchema(Store);

const routerStore = express.Router();

routerStore.get('/store', getStore);
routerStore.get('/store/:id', getOneStore);
routerStore.post('/store', createStore)
routerStore.put('/store/:id', updateStore);
routerStore.delete('/store/:id', deleteStore);


async function getStore(req, res) {
  let getAllStore = await store.read();
  res.status(200).json(getAllStore);
}

async function getOneStore(req, res) {
  const id = req.params.id;
  let theStore = await store.read(id);
  res.status(200).json(theStore);
}

async function createStore(req, res) {
  let content = req.body;
  let createdStore = await store.create(content);
  res.status(201).json(createdStore);
}

async function updateStore(req, res) {
  const id = req.params.id;
  let content = req.body;
  let newStore = await store.update(id, content);
  res.status(200).json(newStore);
}

async function deleteStore(req, res) {
  const id = req.params.id;
  await store.delete(id);
  res.status(200).send({msg: 'item deleted'});
}

module.exports = routerStore;