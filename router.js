const apiController = require('./controllers/DataController');
let router = require('express').Router();

// router.get('/', (req, res) => res.send('Hello World!'));

router.get('/getDataByName/:name', apiController.handleRequest);

router.post('/postData', apiController.handlePostRequest);

router.put('/updateData', apiController.handleUpdateRequest);

router.get('/getAllData', apiController.handleAllDataRequest);

router.delete('/deleteData', apiController.handleDeleteRequest);

module.exports = router;
