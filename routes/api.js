var express = require('express');
var router = express.Router();

var data = [
    {id: 0, name: "person1", username: "user1"},
    {id: 1, name: "person2", username: "user2"},
    {id: 2, name: "person3", username: "user3"},
]

//GET /api/person
router.get('/person', function(req, res, next) {
    res = res.status(200);
    res.send(data);
});

//GET /api/person/:id
router.get('/person/:id', function(req, res, next) {
    res = res.status(200);
    res.send(data.filter(person => person.id == req.params.id));
});

// POST /api/person
router.post('/person', function(req, res, next) {
    res = res.status(200);
    res.send(data.push(req.body));
});

// PUT /api/person/:id
router.put('/person/:id', function(req, res, next) {
    res = res.status(200);

    var index = data.indexOf(data.filter(person => person.id == req.params.id));

    data[index] = req.body;
    res.send(data[index]);
});

// DELETE /api/person/:id
router.delete('/person/:id', function(req, res, next) {
    res = res.status(200);
    data = data.filter(person => person.id != req.params.id);
    res.send(data[index]);
});

module.exports = router;

