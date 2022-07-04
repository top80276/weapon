var express = require('express');
var mysql = require('mysql');
var conn = mysql.createConnection({
    host:'localhost',
    user:'nodejs',
    password:'Passw0rd0000',
    database:'weapon'
});



//localhost:8181/weapon/buy/2?number=4
exports.buyone = (wpid,number) => {
    let promise = new Promise(function (resolve,reject) {
    var sql = 'INSERT INTO weapon.order VALUES (0001, 0001, ?, ?, (SELECT price FROM weapon WHERE wpid = ?)*?) ON DUPLICATE KEY UPDATE quantity = ?, orderprice = (SELECT price FROM weapon WHERE wpid = ?)*? ';
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
    var sql = 'SELECT u.userid,w.wpid,w.wpname,w.price,o.quantity,o.orderprice FROM weapon.user u, weapon.weapon w, weapon.order o WHERE o.userid = u.userid AND o.wpid = w.wpid';
    conn.query(sql,(err,result) => {
        if(err)reject (err);
        else resolve(JSON.stringify(result));
    });
    });
    return promise;
};

exports.orderprice = () => {
    let promise = new Promise((resolve,reject) => {
    var sql = 'SELECT SUM(orderprice) FROM weapon.order';
    conn.query(sql,(err,result) => {
        if(err)reject (err);
        else resolve(JSON.stringify(result));
    });
    });
    return promise;
};




exports.buydel = (wpid) => {
    let promise = new Promise(function (resolve,reject) {
    var sql = 'DELETE FROM weapon.order WHERE wpid = ?';
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
    var sql = 'UPDATE  weapon.order SET quantity = ? , orderprice = ?*(SELECT price FROM weapon WHERE wpid = ?) WHERE wpid = ? AND orderid = 1 AND userid = 1';
    var params = [number,number, wpid, wpid];
    conn.query(sql, params, (err,result ) => {
        if(err)reject (err);
        else
        resolve(JSON.stringify(result));
    });
    });

    return promise;
};


