Run npm i

> mongodb-memory-server@6.9.6 postinstall /home/runner/work/api-server/api-server/node_modules/mongodb-memory-server
> node ./postinstall.js

mongodb-memory-server: checking MongoDB binaries cache...
Downloading MongoDB 4.0.14: 0 % (0mb / 99.4mb)
mongodb-memory-server: binary path is /home/runner/work/api-server/api-server/node_modules/.cache/mongodb-memory-server/mongodb-binaries/4.0.14/mongod
npm WARN api-server-v2@1.0.0 No repository field.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.3.2 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.3.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

added 648 packages from 458 contributors and audited 651 packages in 13.514s

38 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities


> api-server-v2@1.0.0 test /home/runner/work/api-server/api-server
> jest --coverage --detectOpenHandles

  console.log
    PATH: /where

      at Object.<anonymous>.module.exports (middleware/logger.js:4:11)

  console.log
    PATH: /

      at Object.<anonymous>.module.exports (middleware/logger.js:4:11)

  console.log
    PATH: /food

      at Object.<anonymous>.module.exports (middleware/logger.js:4:11)

  console.log
    PATH: /shoe

      at Object.<anonymous>.module.exports (middleware/logger.js:4:11)

  console.log
    PATH: /food

      at Object.<anonymous>.module.exports (middleware/logger.js:4:11)

  console.log
    PATH: /shoe

      at Object.<anonymous>.module.exports (middleware/logger.js:4:11)

  console.log
    PATH: /shoe

      at Object.<anonymous>.module.exports (middleware/logger.js:4:11)

  console.log
    PATH: /food

      at Object.<anonymous>.module.exports (middleware/logger.js:4:11)

  console.log
    PATH: /shoe

      at Object.<anonymous>.module.exports (middleware/logger.js:4:11)

  console.log
    PATH: /food

      at Object.<anonymous>.module.exports (middleware/logger.js:4:11)

  console.log
    PATH: /shoe

      at Object.<anonymous>.module.exports (middleware/logger.js:4:11)

  console.log
    PATH: /food

      at Object.<anonymous>.module.exports (middleware/logger.js:4:11)

FAIL __test__/server.test.js (36.885 s)
  ------SERVER TESTS---------
    ✕ should respond with a 404 on a bad route (41 ms)
    ✓ should respond with a 404 on bad method (38 ms)
    ✕ should create a new item in the db (5002 ms)
    ✕ should create a new item in the db (5002 ms)
    ✕ should retrieve all items from the db (49 ms)
    ✕ should retrieve all items from the db (4964 ms)
    ✕ should retrieve an item from the db (5000 ms)
    ✕ should retrieve an item from the db (45 ms)
    ✕ should show that a shoe item was updated (4985 ms)
    ✕ should show that a food item was updated (4981 ms)
    ✕ should show that a shoe was deleted (58 ms)
    ✕ should show that a food item was deleted (4979 ms)

  ● ------SERVER TESTS--------- › should respond with a 404 on a bad route

    MongooseError: The `uri` parameter to `openUri()` must be a string, got "undefined". Make sure the first parameter to `mongoose.connect()` or `mongoose.createConnection()` is a string.

      11 | const options = { useNewUrlParser: true, useUnifiedTopology: true } 
      12 |
    > 13 | mongoose.connect(MONGODB_URI, options);
         |          ^
      14 |
      15 | const logger = require('../middleware/logger.js');
      16 | const customRoutesFood = require('../routes/custom-routes-food.js');

      at NativeConnection.Object.<anonymous>.Connection.openUri (node_modules/mongoose/lib/connection.js:694:11)
      at node_modules/mongoose/lib/index.js:350:10
      at node_modules/mongoose/lib/helpers/promiseOrCallback.js:31:5
      at promiseOrCallback (node_modules/mongoose/lib/helpers/promiseOrCallback.js:30:10)
      at Mongoose.Object.<anonymous>.Mongoose._promiseOrCallback (node_modules/mongoose/lib/index.js:1154:10)
      at Mongoose.connect (node_modules/mongoose/lib/index.js:349:20)
      at Object.<anonymous> (src/server.js:13:10)
      at Object.<anonymous> (__test__/server.test.js:3:20)

  ● ------SERVER TESTS--------- › should create a new item in the db

    : Timeout - Async callback was not invoked within the 5000 ms timeout specified by jest.setTimeout.Timeout - Async callback was not invoked within the 5000 ms timeout specified by jest.setTimeout.Error:

      29 |   //------------------CREATE TESTS--------------------\\
      30 |
    > 31 |   it('should create a new item in the db', async () => {
         |   ^
      32 |     const response = await mockRequest.post('/food').send({ name: 'burger', calories: '500', type: 'MEAT' });
      33 |     expect(response.status).toBe(201);
      34 |     expect(response.body.type).toEqual('MEAT');

      at new Spec (node_modules/jest-jasmine2/build/jasmine/Spec.js:116:22)
      at Suite.<anonymous> (__test__/server.test.js:31:3)
      at Object.<anonymous> (__test__/server.test.js:13:1)

  ● ------SERVER TESTS--------- › should create a new item in the db

    : Timeout - Async callback was not invoked within the 5000 ms timeout specified by jest.setTimeout.Timeout - Async callback was not invoked within the 5000 ms timeout specified by jest.setTimeout.Error:

      35 |   });
      36 |
    > 37 |   it('should create a new item in the db', async () => {
         |   ^
      38 |     const response = await mockRequest.post('/shoe').send({ name: 'shoetest', size: '9', type: 'W' });
      39 |     expect(response.status).toBe(201);
      40 |     expect(response.body.size).toEqual(9);

      at new Spec (node_modules/jest-jasmine2/build/jasmine/Spec.js:116:22)
      at Suite.<anonymous> (__test__/server.test.js:37:3)
      at Object.<anonymous> (__test__/server.test.js:13:1)

  ● ------SERVER TESTS--------- › should retrieve all items from the db

    MongooseError: Operation `foods.insertOne()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:185:20)

  ● ------SERVER TESTS--------- › should retrieve all items from the db

    MongooseError: Operation `shoes.insertOne()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:185:20)

  ● ------SERVER TESTS--------- › should retrieve an item from the db

    MongooseError: Operation `foods.find()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:185:20)

  ● ------SERVER TESTS--------- › should retrieve an item from the db

    MongooseError: Operation `shoes.find()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:185:20)

  ● ------SERVER TESTS--------- › should show that a shoe item was updated

    MongooseError: Operation `shoes.insertOne()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:185:20)

  ● ------SERVER TESTS--------- › should show that a food item was updated

    MongooseError: Operation `foods.insertOne()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:185:20)

  ● ------SERVER TESTS--------- › should show that a shoe was deleted

    MongooseError: Operation `shoes.insertOne()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:185:20)

  ● ------SERVER TESTS--------- › should show that a food item was deleted

    MongooseError: Operation `foods.insertOne()` buffering timed out after 10000ms

      at Timeout.<anonymous> (node_modules/mongoose/lib/drivers/node-mongodb-native/collection.js:185:20)

(node:1768) [MDEP001] DeprecationWarning: "MongoMemoryReplSet.getConnectionString" is deprecated, use ".getUri"
PASS __test__/shoe.test.js
  Shoe Actions
    ✓ can create() a new shoe item (28 ms)
    ✓ can read() a single shoe item (25 ms)

  console.log
    RECORD {
      _id: 6084fd46eb0ebb06e885d2e1,
      name: 'converse',
      size: 11,
      type: 'M',
      __v: 0
    }

      at __test__/shoe.test.js:34:17

  console.log
    this should be test food 2 {
      _id: 6084fd46eb0ebb06e885d2e1,
      name: 'converse',
      size: 11,
      type: 'M',
      __v: 0
    }

      at __test__/shoe.test.js:37:21

PASS __test__/food.test.js
  Food Actions
    ✓ can create() a new food item (14 ms)
    ✓ can read() a single food item (13 ms)

------------------------|---------|----------|---------|---------|-------------------
File                    | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
------------------------|---------|----------|---------|---------|-------------------
All files               |   70.41 |      100 |      45 |   71.13 |                   
 errors                 |      75 |      100 |      50 |      75 |                   
  404.js                |     100 |      100 |     100 |     100 |                   
  500.js                |      50 |      100 |       0 |      50 | 4                 
 middleware             |     100 |      100 |     100 |     100 |                   
  logger.js             |     100 |      100 |     100 |     100 |                   
 models                 |   88.24 |      100 |      60 |   88.24 |                   
  food-schema.js        |     100 |      100 |     100 |     100 |                   
  generic-collection.js |   77.78 |      100 |      60 |   77.78 | 22-26             
  shoe-schema.js        |     100 |      100 |     100 |     100 |                   
 routes                 |   53.85 |      100 |      40 |   53.85 |                   
  custom-routes-food.js |   53.85 |      100 |      40 |   53.85 | 20-26,32-45       
  custom-routes-shoe.js |   53.85 |      100 |      40 |   53.85 | 20-26,32-45       
 src                    |   90.91 |      100 |       0 |   95.24 |                   
  server.js             |   90.91 |      100 |       0 |   95.24 | 35                
------------------------|---------|----------|---------|---------|-------------------
Test Suites: 1 failed, 2 passed, 3 total
Tests:       11 failed, 5 passed, 16 total
Snapshots:   0 total
Time:        38.544 s
Ran all test suites.

Jest has detected the following 1 open handle potentially keeping Jest from exiting:

  ●  TCPSERVERWRAP

      30 |
      31 |   it('should create a new item in the db', async () => {
    > 32 |     const response = await mockRequest.post('/food').send({ name: 'burger', calories: '500', type: 'MEAT' });
         |                                        ^
      33 |     expect(response.status).toBe(201);
      34 |     expect(response.body.type).toEqual('MEAT');
      35 |   });

      at Test.Object.<anonymous>.Test.serverAddress (node_modules/supertest/lib/test.js:61:33)
      at new Test (node_modules/supertest/lib/test.js:38:12)
      at Object.post (node_modules/supertest/index.js:27:14)
      at Object.<anonymous> (__test__/server.test.js:32:40)

  console.log
    this should be test food 2 {
      _id: 6084fd47f7fdcd06e8230429,
      name: 'test food 2',
      calories: 9999,
      type: 'VEG',
      __v: 0
    }

      at __test__/food.test.js:36:21

(node:1768) UnhandledPromiseRejectionWarning: MongooseError: Operation `shoes.insertOne()` buffering timed out after 10000ms
(node:1768) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 10)
(node:1768) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
(node:1768) UnhandledPromiseRejectionWarning: MongooseError: Operation `foods.insertOne()` buffering timed out after 10000ms
(node:1768) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 11)
(node:1768) UnhandledPromiseRejectionWarning: Error: Caught error after test environment was torn down

socket hang up
    at connResetException (internal/errors.js:609:14)
    at Socket.socketOnEnd (_http_client.js:458:23)
    at Socket.emit (events.js:326:22)
    at endReadableNT (_stream_readable.js:1241:12)
    at processTicksAndRejections (internal/process/task_queues.js:84:21)
(node:1768) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 12)
(node:1768) UnhandledPromiseRejectionWarning: Error: Caught error after test environment was torn down

socket hang up
    at connResetException (internal/errors.js:609:14)
    at Socket.socketOnEnd (_http_client.js:458:23)
    at Socket.emit (events.js:326:22)
    at endReadableNT (_stream_readable.js:1241:12)
    at processTicksAndRejections (internal/process/task_queues.js:84:21)
(node:1768) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 13)
(node:1768) UnhandledPromiseRejectionWarning: Error: Caught error after test environment was torn down

socket hang up
    at connResetException (internal/errors.js:609:14)
    at Socket.socketOnEnd (_http_client.js:458:23)
    at Socket.emit (events.js:326:22)
    at endReadableNT (_stream_readable.js:1241:12)
    at processTicksAndRejections (internal/process/task_queues.js:84:21)
(node:1768) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 14)
(node:1768) UnhandledPromiseRejectionWarning: Error: Caught error after test environment was torn down

socket hang up
    at connResetException (internal/errors.js:609:14)
    at Socket.socketOnEnd (_http_client.js:458:23)
    at Socket.emit (events.js:326:22)
    at endReadableNT (_stream_readable.js:1241:12)
    at processTicksAndRejections (internal/process/task_queues.js:84:21)
(node:1768) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 15)
(node:1768) UnhandledPromiseRejectionWarning: Error: Caught error after test environment was torn down

socket hang up
    at connResetException (internal/errors.js:609:14)
    at Socket.socketOnEnd (_http_client.js:458:23)
    at Socket.emit (events.js:326:22)
    at endReadableNT (_stream_readable.js:1241:12)
    at processTicksAndRejections (internal/process/task_queues.js:84:21)
(node:1768) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 16)
(node:1768) UnhandledPromiseRejectionWarning: Error: Caught error after test environment was torn down

socket hang up
    at connResetException (internal/errors.js:609:14)
    at Socket.socketOnEnd (_http_client.js:458:23)
    at Socket.emit (events.js:326:22)
    at endReadableNT (_stream_readable.js:1241:12)
    at processTicksAndRejections (internal/process/task_queues.js:84:21)
(node:1768) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 17)
(node:1768) UnhandledPromiseRejectionWarning: Error: Caught error after test environment was torn down

socket hang up
    at connResetException (internal/errors.js:609:14)
    at Socket.socketOnEnd (_http_client.js:458:23)
    at Socket.emit (events.js:326:22)
    at endReadableNT (_stream_readable.js:1241:12)
    at processTicksAndRejections (internal/process/task_queues.js:84:21)
(node:1768) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 18)
(node:1768) UnhandledPromiseRejectionWarning: Error: Caught error after test environment was torn down

socket hang up
    at connResetException (internal/errors.js:609:14)
    at Socket.socketOnEnd (_http_client.js:458:23)
    at Socket.emit (events.js:326:22)
    at endReadableNT (_stream_readable.js:1241:12)
    at processTicksAndRejections (internal/process/task_queues.js:84:21)
(node:1768) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 19)
(node:1768) UnhandledPromiseRejectionWarning: Error: Caught error after test environment was torn down

socket hang up
    at connResetException (internal/errors.js:609:14)
    at Socket.socketOnEnd (_http_client.js:458:23)
    at Socket.emit (events.js:326:22)
    at endReadableNT (_stream_readable.js:1241:12)
    at processTicksAndRejections (internal/process/task_queues.js:84:21)
(node:1768) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 20)
(node:1768) UnhandledPromiseRejectionWarning: Error: Caught error after test environment was torn down

socket hang up
    at connResetException (internal/errors.js:609:14)
    at Socket.socketOnEnd (_http_client.js:458:23)
    at Socket.emit (events.js:326:22)
    at endReadableNT (_stream_readable.js:1241:12)
    at processTicksAndRejections (internal/process/task_queues.js:84:21)
(node:1768) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 21)
npm ERR! Test failed.  See above for more details.
Error: Process completed with exit code 1.