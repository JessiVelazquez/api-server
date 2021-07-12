'use strict';

const { server } = require('../src/server.js'); // bring in your server for testing (because it is a module)
const supertest = require('supertest'); // pull in npm package of supertest for making requests and mocking a server env

const mockRequest = supertest(server); // mock the server for us

const { food } = require('../routes/custom-routes-food.js');
const { shoe } = require('../routes/custom-routes-shoe.js');
const { todo } = require('../routes/custom-routes-todo.js');


describe('------SERVER TESTS---------', () => {

  //-----------------404 TESTS------------------\\

  it('should respond with a 404 on a bad route', async () => {
    return mockRequest.get('/where').then((data) => {
      expect(data.status).toBe(404);
    });
  });

  it('should respond with a 404 on bad method', async () => {
    return mockRequest.post('/').then((data) => {
      expect(data.status).toBe(404);
    });
  });

  //------------------CREATE TESTS--------------------\\

  it('should create a new item in the db', async () => {
    const response = await mockRequest.post('/food').send({ name: 'burger', calories: '500', type: 'MEAT' });
    expect(response.status).toBe(201);
    expect(response.body.type).toEqual('MEAT');
  });

  it('should create a new item in the db', async () => {
    const response = await mockRequest.post('/shoe').send({ name: 'shoetest', size: '9', type: 'W' });
    expect(response.status).toBe(201);
    expect(response.body.size).toEqual(9);
  });

  //-----------------READ ALL TESTS----------------------\\

  it('should retrieve all items from the db - food', async () => {
    const response = await mockRequest.get('/food');
    expect(response.status).toBe(200);
  });

  it('should retrieve all items from the db - todo', async () => {
    const response = await mockRequest.get('/todo');
    expect(response.status).toBe(200);
  });

  it('should retrieve all items from the db - shoes', async () => {
    const response = await mockRequest.get('/shoe');
    expect(response.status).toBe(200);
  });  

  //-------------------READ ONE TESTS----------------------\\

  it('should retrieve an item from the db', async () => {
    let newShoe = await mockRequest.post('/shoe').send({ name: 'nike', size: '10', type: 'W' });
    let id = newShoe.body._id;
    const response = await mockRequest.get(`/shoe/${id}`);
    expect(response.status).toBe(200);
    expect(response.body.name).toEqual(newShoe.body.name);
  });

  it('should retrieve an item from the db', async () => {
    let newFood = await mockRequest.post('/food').send({ name: 'burger2', calories: '500', type: 'MEAT' });
    let id = newFood.body._id;
    const response = await mockRequest.get(`/food/${id}`);
    expect(response.status).toBe(200);
    expect(response.body.name).toEqual(newFood.body.name);
  });


  //----------------stretch - update tests------------------\\


  it('should show that a shoe item was updated', async () => {
    let newShoeItem = { name: 'reebok', size: '10', type: 'W' };
    const origShoeItem = await mockRequest.post('/shoe').send({ name: 'merrell', size: '10', type: 'W' });
    let id = origShoeItem.body._id;
    let response = await mockRequest.put(`/shoe/${id}`).send(newShoeItem);
    expect(response.status).toBe(200);
    expect(response.body.name).toEqual(newShoeItem.name);
  });

  it('should show that a food item was updated', async () => {
    let newFoodItem = { name: 'pizza', calories: '1000', type: 'MEAT' };
    const origFoodItem = await mockRequest.post('/food').send({ name: 'salad', calories: '200', type: 'VEG' });
    let id = origFoodItem.body._id;
    let response = await mockRequest.put(`/food/${id}`).send(newFoodItem);
    expect(response.status).toBe(200);
    expect(response.body.name).toEqual(newFoodItem.name);
  });

  //----------------stretch - delete tests----------------------\\

  it('should show that a shoe was deleted', async () => {
    let createShoe = await mockRequest.post('/shoe').send({ name: 'reebok', size: '10', type: 'W' });
    let id = createShoe.body._id;
    let response = await mockRequest.delete(`/shoe/${id}`);
    expect(response.status).toBe(200);
    let getResponse = await mockRequest.get(`/shoe/${id}`);
    expect(getResponse.body).toBe(null);
  });

  it('should show that a food item was deleted', async () => {
    let createFood = await mockRequest.post('/food').send({ name: 'sandwich', calories: '500', type: 'MEAT' });
    let id = createFood.body._id;
    let response = await mockRequest.delete(`/food/${id}`);
    expect(response.status).toBe(200);
    let getResponse = await mockRequest.get(`/food/${id}`);
    expect(getResponse.body).toBe(null);
  });

});