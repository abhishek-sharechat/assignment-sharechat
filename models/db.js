
let MongoClient = require('mongodb').MongoClient;
let dbCon = MongoClient.connect("mongodb://localhost:27017/mydb");

function getDataByName(name) {
    return new Promise((resolve, reject) => {
        dbCon.then(function (db) {
            db.collection('myData').find({name: name}).toArray(function(err, result) {
                if (err) return  reject(err);
                console.log('result' + result);
                return resolve(result);
            });
        });
    })
}

function getAllData() {
    return new Promise((resolve, reject) => {
       dbCon.then(function (db) {
            db.collection('myData').find({}).toArray(function(err, result) {
                if (err) reject(err);
                console.log(result);
                return resolve(result);
            });
       });
    });
}

function upDateData(filter, data) {
    return new Promise((resolve, reject) => {
        dbCon.then(function (db) {
           db.collection('myData').updateMany(filter, {$set: data}, function(err, result) {
               console.log("error occured: " + err);
               if (err) return reject(err);
               console.log('result',result);
               return resolve(result);
               });
        });
    });
}

function postData(body) {
    return new Promise((resolve, reject) => {
        dbCon.then(function (db) {
            db.collection('myData').insertOne(body, function(err, result) {
                if (err) return  reject(err);
                console.log(result);
                return resolve(result);
            });

        });
    });
}


function deleteData(data) {
    return new Promise((resolve, reject) => {
        dbCon.then(function (db) {
            console.log("data" + data);
            db.collection('myData').deleteMany(data, function (err, result) {
                if (err) return reject(err);
                console.log(result);
                return resolve(result);
            })
        })
    })
}

module.exports = { getDataByName, postData, upDateData, getAllData, deleteData };