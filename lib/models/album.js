const mongoose = require('mongoose');
mongoose.Promise = Promise;

const Schema = mongoose.Schema;

const schema = new Schema({
  title: {
    type: String,
    default: 'Miscellaneous'
  },
  description: {
    type: String,
    default: ''
  },
  images: [{
    type: Schema.Types.ObjectId,
    // required: true,
    ref: 'Image'
  }]
});

module.exports = mongoose.model('Album', schema);