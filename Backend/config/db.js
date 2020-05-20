
// const mysql = require('mysql');
// const pool = mysql.createPool({
//   connectionLimit : 1000,
//     host     : '127.0.0.1',
//     user     : 'root',
//     password : 'adminroot',
//     database : 'Homeaway'
//   });
  
//   pool.getConnection(function(err) {
//     if (err) {
//       console.error('error connecting: ' + err.stack);
//       return;
//     }
  
//     //console.log('connected as id ' + pool.threadId);
//   });
//   module.exports = pool;


var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//mongoose.connect('mongodb://localhost:27017/homeaway',{useNewUrlParser : true});
mongoose.connect('mongodb://admin:admin95@ds245523.mlab.com:45523/homeaway',{useNewUrlParser : true});
mongoose.set('debug', true);
module.exports = {mongoose};