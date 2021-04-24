'use strict';

const { server } = require('../src/server.js'); // bring in your server for testing (because it is a module)
const supertest = require('supertest'); // pull in npm package of supertest for making requests and mocking a server env
// const supergoose = require('@code-fellows/supergoose');
// const mockRequestGoose = supergoose(server);

// const { food } = require('../routes/custom-routes-food.js');

const mockRequest = supertest(server); // mock the server for us


describe('------SERVER TESTS---------', () => {

  // var foodTest = { name: 'burger', calories: '500', type: 'MEAT' };

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

  it('should create a new item in the db', async () => {
    const response = await mockRequest.post('/food').send({ name: 'burger', calories: '500', type: 'MEAT' });
    expect(response.status).toBe(201);
    expect(response.body.type).toEqual('MEAT');
    console.log('------POST TEST---------', response.body);
  });


  it('should retrieve an item from the db', async () => {
    // let newFood = await mockRequest.post('/food').send({ name: 'burger2', calories: '500', type: 'MEAT' });
    // let id = newFood.body;
    const response = await mockRequest.get('/food/1');
    expect(response.status).toBe(200);
    expect(response.body.name).toEqual(newFood.body.name);
    console.log("------NEWFOOD---------", id._id);
  });

  // it("Should read a record using GET", async () => {
  //   let newFood = await mockReq.post("/food").send(foodTest);
  //   let id = newFood.body._id;
  //   let res = await mockReq.get(`/food/${id}`);
  //   expect(res.status).toEqual(200);
  //   expect(res.body.name).toEqual(foodTest.name);
  //   expect(res.body.calories).toEqual(foodTest.calories);
  // });


  // it('should retrieve all items from the db', async () => {
  //   const response = await mockRequest.get('/food');
  //   expect(response.status).toBe(200);
  // });

  // it('should create a new item in the db', async () => {
  //   const response = await mockRequest.post('/shoe').send({ name: 'brian' })
  //   expect(response.status).toBe(201);
  //   expect(response.body.record.name).toEqual('brian');
  // });

  // it('should retrieve an item from the db', async () => {
  //   const response = await mockRequest.get('/shoe/1');
  //   expect(response.status).toBe(200);
  //   // expect(response.body).toBe(true);
  //   console.log(response.body);
  // });

  // it('should retrieve all items from the db', async () => {
  //   const response = await mockRequest.get('/shoe');
  //   expect(response.status).toBe(200);
  // });  


  // //stretch - update tests

  // it('should show that an item was updated', async () => {
  //   const response = await mockRequest.put('/shoe/1').send({ name: 'jessi' });
  //   expect(response.status).toBe(200);
  //   expect(response.body.record.name).toEqual('jessi');
  // });

  // it('should show that an item was updated', async () => {
  //   const response = await mockRequest.put('/food/1').send({ name: 'jessi' });
  //   expect(response.status).toBe(200);
  //   expect(response.body.record.name).toEqual('jessi');
  // });

  // // stretch - delete tests

  // it('should show that an item was deleted', async () => {
  //   const response = await mockRequest.delete('/shoe/1');
  //   expect(response.status).toBe(200);
  // });

  // it('should show that an item was deleted', async () => {
  //   const response = await mockRequest.delete('/food/1');
  //   expect(response.status).toBe(200);
  // });

});