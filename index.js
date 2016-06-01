var express = require('express');
var api = express();

api.get("/contacts", function(req, res, next){
    res.send([]);
});

api.post("/contacts/:name", function(req, res, next){
    res.send();
});

api.put("/contacts/:name", function(req, res, next){
    if(req.params.name == 'exist')
        return res.status(403).exist();
    res.send();
});

api.get("//contacts/:name/:new", function(req, res, next){
    res.send();
});

api.get("//contacts/:name", function(req, res, next){
    res.send();
});

var port = process.env.PORT || DEFAULT_PORT;
Console.log('server started on port ' + port);
api.listen(port);

module.exports = api;
