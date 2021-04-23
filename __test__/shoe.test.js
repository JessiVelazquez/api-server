'use strict';

require('@code-fellows/supergoose'); // this pulls in and configures and runs mongo memory server and supertest

// const GenericCollection = require('../models/generic-collection.js');
// const food = new GenericCollection();
const genSchema = require('../models/generic-collection.js');
const Shoe = require('../models/shoe-schema.js');
const shoe = new genSchema(Shoe);

describe('Shoe Actions', () => {

  it('can create() a new shoe item', () => {
    let obj = { name: 'nike', size: 10, type: 'W' };
    let expected = { name: 'nike', size: 10, type: 'W' };

    return shoe.create(obj)
      .then(record => {
        // in general, review this technique for similar object comparison
        Object.keys(obj).forEach(item => {
          expect(record[item]).toEqual(expected[item])
        })
      });

  });

  // create, then read so that this test is independent from above
  it('can read() a single shoe item', () => {
    let obj = { name: 'converse', size: 11, type: 'M' };
    let expected = { name: 'converse', size: 11, type: 'M' };
    
    return shoe.create(obj)
      .then(record => {
        console.log('RECORD', record);
        return shoe.read(record._id)
          .then(item => {
            console.log('this should be test food 2', item);
          })
      })
  });

  // it('can update() a single shoe item', () => {
  //   let obj = { name: 'converse', size: 11, type: 'M' };
  //   // let expected = { name: 'converse', size: 11, type: 'M' };
    
  //   return shoe.read(obj)
  //     .then(record => {
  //       console.log('RECORD', record);
  //       return shoe.update(record._id, obj)
  //         .then(item => {
  //           console.log('this should be test food 2', item);
  //           expect(record[item]).toEqual(record[item]);
  //         })
  //     })
  // });

});
