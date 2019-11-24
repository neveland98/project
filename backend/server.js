var express = require('express');
var app = express();
var mongoose = require('mongoose');

//connect to MongoDB
const dbRoute =
  'mongodb+srv://admin:admin@cluster0-2gh0b.mongodb.net/test?retryWrites=true&w=majority';

// connects our back end code with the database
mongoose.connect(dbRoute, { useNewUrlParser: true });

var db = mongoose.connection;

//handle mongo error
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
});

// listen on port 3000
app.listen(3000, function () {
  console.log('Express app listening on port 3000');
});