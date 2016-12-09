const mongoose = require('mongoose');
mongoose.Promise = Promise;

const Schema = mongoose.Schema;

const schema = new Schema({
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  }
});

module.exports = mongoose.model('Bunny', schema);