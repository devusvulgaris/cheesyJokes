const mongoose = require('mongoose');
const config = require('config');

mongoose.Promise = Promise;

mongoose.set('debug', true);

mongoose.connect(config.mongoose.uri, config.mongoose.options);

module.exports = mongoose;
