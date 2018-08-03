const mongoose = require('../libs/mongoose');

const groupSchema = new mongoose.Schema({
  name: {
    type: String
  }
});

module.exports = mongoose.model('Group', groupSchema);
