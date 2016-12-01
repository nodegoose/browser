var express = require('express');
var path = require('path');
var app = express();
 
app.set('port', 8001);
 
app.use(express.static(path.join(__dirname, '/client')));
 
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Index Server is running on port ' + port);
});
