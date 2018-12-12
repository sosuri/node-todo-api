const mongoose = require('mongoose'); 
mongoose.Promise = global.Promise;
const cs = 'mongodb://sosuri:Freak123@ds231374.mlab.com:31374/todoapp';
mongoose.connect(cs);

module.exports = {mongoose};