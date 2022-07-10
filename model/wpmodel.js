var express = require('express');
// var mysql = require('mysql');
// var conn = mysql.createConnection({
//     host:'us-cdbr-east-06.cleardb.net',
//     user:'bec73f25ef8ac3',
//     password:'b3fc3ad6',
//     database:'heroku_9059c434d2fdb58'
// });


var mysql = require("mysql");
var pool = mysql.createPool({
    host: 'us-cdbr-east-06.cleardb.net',
    user:'bec73f25ef8ac3',
    password:'b3fc3ad6',
    database:'heroku_9059c434d2fdb58',
    connectionLimit : 10, // 可以自己設定
});

var query = function(sql, options, callback) {
    console.log(sql, options, callback);
    if (typeof options === "function") {
        callback = options;
        options = undefined;
    }
    pool.getConnection(function(err, conn){
        if (err) {
            callback(err, null, null);
        } else {
            conn.query(sql, options, function(err, results, fields){
                // callback
                callback(err, results, fields);
            });
            // release connection。
            // 要注意的是，connection 的釋放需要在此 release，而不能在 callback 中 release
            conn.release();
        }
    });
};

module.exports = query;







//http://localhost:8181/weapon/queryall
exports.queryall = () => {
    let promise = new Promise((resolve,reject) => {
    var sql = 'SELECT * FROM heroku_9059c434d2fdb58.weapon';
    conn.query(sql,(err,result) => {
        if(err)reject (err);
        else resolve(JSON.stringify(result));
    });
    });
    return promise;
};

//http://localhost:8181/weapon/queryall/powerasc
exports.powerasc = () => {
    let promise = new Promise((resolve,reject) => {
    var sql = 'SELECT * FROM heroku_9059c434d2fdb58.weapon ORDER BY power ASC;';
    conn.query(sql,(err,result) => {
        if(err)reject (err);

        else resolve(JSON.stringify(result));
    });
    });
    return promise;
};


//http://localhost:8181/weapon/queryall/powerdesc
exports.powerdesc = () => {
    let promise = new Promise((resolve,reject) => {
    var sql = 'SELECT * FROM heroku_9059c434d2fdb58.weapon ORDER BY power DESC;';
    conn.query(sql,(err,result) => {
        if(err)reject (err);

        else resolve(JSON.stringify(result));
    });
    });
    return promise;
};


//http://localhost:8181/weapon/queryall/lastingasc
exports.lastingasc = () => {
    let promise = new Promise((resolve,reject) => {
    var sql = 'SELECT * FROM heroku_9059c434d2fdb58.weapon ORDER BY lasting ASC;';
    conn.query(sql,(err,result) => {
        if(err)reject (err);

        else resolve(JSON.stringify(result));
    });
    });
    return promise;
};

//http://localhost:8181/weapon/queryall/lastingdesc
exports.lastingdesc = () => {
    let promise = new Promise((resolve,reject) => {
    var sql = 'SELECT * FROM heroku_9059c434d2fdb58.weapon ORDER BY lasting DESC;';
    conn.query(sql,(err,result) => {
        if(err)reject (err);

        else resolve(JSON.stringify(result));
    });
    });
    return promise;
};

//http://localhost:8181/weapon/queryall/priceasc
exports.priceasc = () => {
    let promise = new Promise((resolve,reject) => {
    var sql = 'SELECT * FROM heroku_9059c434d2fdb58.weapon ORDER BY price ASC;';
    conn.query(sql,(err,result) => {
        if(err)reject (err);

        else resolve(JSON.stringify(result));
    });
    });
    return promise;
};

//http://localhost:8181/weapon/queryall/pricedesc
exports.pricedesc = () => {
    let promise = new Promise((resolve,reject) => {
    var sql = 'SELECT * FROM heroku_9059c434d2fdb58.weapon ORDER BY price DESC;';
    conn.query(sql,(err,result) => {
        if(err)reject (err);

        else resolve(JSON.stringify(result));
    });
    });
    return promise;
};

//http://localhost:8181/weapon/queryall/search
exports.search = (search) => {
    let promise = new Promise(function (resolve,reject) {
    var sql = "SELECT * FROM heroku_9059c434d2fdb58.weapon WHERE wpname LIKE ? OR type LIKE ? OR material LIKE ?";
    var params = ['%'+search+'%','%'+search+'%','%'+search+'%'];
    conn.query(sql, params, (err,result ) => {
        if(err)reject (err);
        else
        resolve(JSON.stringify(result));
    });
    });

    return promise;
};
