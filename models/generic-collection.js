'use strict';

class GenericCollection {
  constructor(genSchema) {
    this.model = genSchema;
  }

  create(record) { // we can CREATE a new record using the mongoose .save() method
    let newRecord = this.model(record);
    return newRecord.save();
  }

  read(_id) {
    if (_id) {
      return this.model.findOne({ _id });
    } else {
      return this.model.find({});
    }
  }

  update(_id, record) {
    return this.model.findByIdAndUpdate(_id, record, { new: true }) // new: true just makes sure that mongoose returns the new updated object, not the old one
  }

  delete(_id) {
    return this.model.findByIdAndDelete(_id);
  }
}

module.exports = GenericCollection;