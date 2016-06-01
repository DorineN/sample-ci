var express = require('express');
var api = express();

api.get("/", function(req, res, next){
    res.send('Hello World');
});

console.log('server started');
api.listen(3000);