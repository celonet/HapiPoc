const mongoose = require('mongoose');

var db = mongoose.connect("mongodb://face2face:sohosarrombados@concrete-shard-00-00-tnis6.mongodb.net:27017,concrete-shard-00-01-tnis6.mongodb.net:27017,concrete-shard-00-02-tnis6.mongodb.net:27017/test?ssl=true&replicaSet=concrete-shard-0&authSource=admin");

exports.db = db;