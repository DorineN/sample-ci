var express = require('express');
var api = express();

api.get("/", function(req, res, next){
    res.send('Hello World');
});

var port = process.env.PORT || DEFAULT_PORT;
Console.log('server started on port ' + port);
api.listen(port);

module.exports = api;
