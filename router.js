const apiController = require('./controllers/DataController');
let router = require('express').Router();

// router.get('/', (req, res) => res.send('Hello World!'));

router.get('/users/:name', apiController.handleRequest);

router.post('/users', apiController.handlePostRequest);

router.put('/users', apiController.handleUpdateRequest);

router.get('/users', apiController.handleAllDataRequest);

router.delete('/users', apiController.handleDeleteRequest);

module.exports = router;
