/* File Name: server.js
   Name: Hoi Ying CHAN
   ID: 301272441
   Date: 9 June 2023 */
   
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var express = require('./config/express');
var app = express();
app.listen(3001);

module.exports = app;

/*running on port 3001*/
console.log('Server running at http://localhost:3001/');

