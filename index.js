var express = require('express');
var api = express();
var DEFAULT_PORT = 3000;

<<<<<<< HEAD
api.use(express.static('public'));

api.get("/api", function(req, res, next){
    res.send([]);
});

api.post("/api/contacts", function(req, res, next){
=======
api.get("/contacts", function(req, res, next){
    res.send([]);
});

api.post("/contacts/:name", function(req, res, next){
>>>>>>> 6e6dd3c8721debe96da86e3b453ae357cc280b56
    res.send();
});

api.put("/contacts/:name", function(req, res, next){
    if(req.params.name == 'exist')
        return res.status(403).exist();
    res.send();
});

<<<<<<< HEAD
api.get("/api/contacts/:name/:new", function(req, res, next){
    res.send();
});

api.get("/api/contacts/:name", function(req, res, next){
=======
api.get("//contacts/:name/:new", function(req, res, next){
    res.send();
});

api.get("//contacts/:name", function(req, res, next){
>>>>>>> 6e6dd3c8721debe96da86e3b453ae357cc280b56
    res.send();
});

var port = process.env.PORT || DEFAULT_PORT;
console.log('server started on port ' + port);
api.listen(port);

module.exports = api;
