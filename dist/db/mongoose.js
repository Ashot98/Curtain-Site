 var mongoose = require('mongoose');
 var config = require('../../config');

 console.log(config.mongo_server);

 mongoose.Promise = global.Promise;
 mongoose.connect(config.mongo_server);

 module.exports = {mongoose};