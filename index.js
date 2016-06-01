var express = require('express');
var api = express();

api.get("/", function(req, res, next){
    res.send('Hello World');
});

console.log('Server started');
api.listen(3000);

module.exports = api;
