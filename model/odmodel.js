var express = require('express');
var mysql = require('mysql');
var conn = mysql.createConnection({
    host:'us-cdbr-east-06.cleardb.net',
    user:'bec73f25ef8ac3',
    password:'b3fc3ad6',
    database:'heroku_9059c434d2fdb58'
});



//localhost:8181/weapon/buy/2?number=4
exports.buyone = (wpid,number) => {
    let promise = new Promise(function (resolve,reject) {
    var sql = 'INSERT INTO heroku_9059c434d2fdb58.order VALUES (0001, 0001, ?, ?, (SELECT price FROM weapon WHERE wpid = ?)*?) ON DUPLICATE KEY UPDATE quantity = ?, orderprice = (SELECT price FROM weapon WHERE wpid = ?)*? ';
    var params = [wpid, number, wpid, number, number, wpid, number];

    conn.query(sql, params, (err,result ) => {
        if(err)reject (err);
        else
        resolve(JSON.stringify(result));
    });
    });

    return promise;
};

//localhost:8181/weapon/buy/
exports.buyall = () => {
    let promise = new Promise((resolve,reject) => {
    var sql = 'SELECT u.userid,w.wpid,w.wpname,w.price,o.quantity,o.orderprice FROM heroku_9059c434d2fdb58.user u, heroku_9059c434d2fdb58.weapon w, heroku_9059c434d2fdb58.order o WHERE o.userid = u.userid AND o.wpid = w.wpid';
    conn.query(sql,(err,result) => {
        if(err)reject (err);
        else resolve(JSON.stringify(result));
    });
    });
    return promise;
};

exports.orderprice = () => {
    let promise = new Promise((resolve,reject) => {
    var sql = 'SELECT SUM(orderprice) FROM heroku_9059c434d2fdb58.order';
    conn.query(sql,(err,result) => {
        if(err)reject (err);
        else resolve(JSON.stringify(result));
    });
    });
    return promise;
};




exports.buydel = (wpid) => {
    let promise = new Promise(function (resolve,reject) {
    var sql = 'DELETE FROM heroku_9059c434d2fdb58.order WHERE wpid = ?';
    var params = [wpid];
    conn.query(sql, params, (err,result ) => {
        if(err)reject (err);
        else
        resolve(JSON.stringify(result));
    });
    });

    return promise;
};

exports.buyupdate = (wpid,number) => {
    let promise = new Promise(function (resolve,reject) {
    var sql = 'UPDATE  heroku_9059c434d2fdb58.order SET quantity = ? , orderprice = ?*(SELECT price FROM weapon WHERE wpid = ?) WHERE wpid = ? AND orderid = 1 AND userid = 1';
    var params = [number,number, wpid, wpid];
    conn.query(sql, params, (err,result ) => {
        if(err)reject (err);
        else
        resolve(JSON.stringify(result));
    });
    });

    return promise;
};


