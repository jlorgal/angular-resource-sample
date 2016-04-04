var express = require('express');
var app = express();
app.use('/public', express.static(__dirname + '/public'));
app.get('/', function(req, res) {
  res.redirect('/public/index.html');
});
app.get('/profile', function(req, res) {
  res.json({id: 1, name: 'user1'});
});
app.listen(3000, function () {
  console.log('App listening on port 3000!');
});
