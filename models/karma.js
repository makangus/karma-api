var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var karmaSchema = new Schema({
  name: String,
  karma: Number
});

module.exports = mongoose.model('Karma', karmaSchema);
