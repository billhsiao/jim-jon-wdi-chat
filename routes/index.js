var express = require('express');
var router = express.Router();

/* GET home page. */
app.get('/', function(req, res){
res.sendFile(__dirname + '/index.html');
});

module.exports = router;
