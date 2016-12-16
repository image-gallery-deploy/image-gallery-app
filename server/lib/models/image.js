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
  },
  album: {
    type: String,
    default: 'Miscellaneous'
  },
  albumId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Album'
  }
});

module.exports = mongoose.model('Image', schema);