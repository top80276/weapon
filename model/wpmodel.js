var express = require('express');
var mysql = require('mysql');
var conn = mysql.createConnection({
    host:'localhost',
    user:'nodejs',
    password:'Passw0rd0000',
    database:'weapon'
});


//http://localhost:8181/weapon/queryall
exports.queryall = () => {
    let promise = new Promise((resolve,reject) => {
    var sql = 'SELECT * FROM weapon';
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
    var sql = 'SELECT * FROM weapon ORDER BY power ASC;';
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
    var sql = 'SELECT * FROM weapon ORDER BY power DESC;';
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
    var sql = 'SELECT * FROM weapon ORDER BY lasting ASC;';
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
    var sql = 'SELECT * FROM weapon ORDER BY lasting DESC;';
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
    var sql = 'SELECT * FROM weapon ORDER BY price ASC;';
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
    var sql = 'SELECT * FROM weapon ORDER BY price DESC;';
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
    var sql = "SELECT * FROM weapon WHERE wpname LIKE ? OR type LIKE ? OR material LIKE ?";
    var params = ['%'+search+'%','%'+search+'%','%'+search+'%'];
    conn.query(sql, params, (err,result ) => {
        if(err)reject (err);
        else
        resolve(JSON.stringify(result));
    });
    });

    return promise;
};