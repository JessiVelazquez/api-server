'use strict';

const express = require('express');

const genSchema = require('../models/generic-collection.js');
const ToDo = require('../models/todo-schema.js');
const todo = new genSchema(ToDo);

const routerToDo = express.Router();

routerToDo.get('/todo', getToDo);
routerToDo.get('/todo/:id', getOneToDo);
routerToDo.post('/todo', createToDo)
routerToDo.put('/todo/:id', updateToDo);
routerToDo.delete('/todo/:id', deleteToDo);


async function getToDo(req, res) {
  let getAllToDo = await todo.read();
  res.status(200).json(getAllToDo);
}

async function getOneToDo(req, res) {
  const id = req.params.id;
  let theToDo = await todo.read(id);
  res.status(200).json(theToDo);
}

async function createToDo(req, res) {
  let content = req.body;
  let createdToDo = await todo.create(content);
  res.status(201).json(createdToDo);
}

async function updateToDo(req, res) {
  const id = req.params.id;
  let content = req.body;
  let newToDo = await todo.update(id, content);
  res.status(200).json(newToDo);
}

async function deleteToDo(req, res) {
  const id = req.params.id;
  await todo.delete(id);
  res.status(200).send({msg: 'item deleted'});
}

module.exports = routerToDo;