

const db = require('../models/db');

function handleRequest(req, res) {
    db.getDataByName(req.params.name).then((data) => {
        console.log("successful: "+ data);
        return res.send(data);
    }).catch( (err) => {
        console.log("error occured: " + err);
        res.send('error');
        return res;
    });
}

function handlePostRequest(req, res) {
    db.postData(req.body).then(function (data) {
        console.log("done: " + data);
        res.send(data);
        return res;
    }).catch(function (err) {
        console.log("sorry, something went wrong");
        res.send("error while posting request");
        return res;
    })
}

function handleUpdateRequest(req, res) {
    const filter = req.body.filter;
    const data = req.body.data;
    db.upDateData(filter, data).then(function (data) {
        console.log("updated successfully: " + data);
        res.send(data);
        return res;
    }).catch(function (err) {
        console.log("some error occurred");
        res.send("error");
        return res;
    });
}

function handleAllDataRequest(req, res) {
    db.getAllData().then(function (data) {
        res.send(data);
        return res;
    }).catch(function (err) {
        console.log("error occured while getting all data: " + err);
        res.send("error occured");
        return res;
    })
}

function handleDeleteRequest(req, res) {
    console.log(req.body.filter);
    const filter = req.body.filter;
    const data = req.body.data;
    db.deleteData(filter, data).then(function (data) {
        res.send(data);
        return res;
    }).catch(function (err) {
        console.log("something went wrong while deleting");
        res.send("delete error");
        return res;
    })
}



module.exports = {   handleRequest, handlePostRequest, handleUpdateRequest, handleAllDataRequest, handleDeleteRequest};