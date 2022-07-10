const express = require('express');
const app = express();
// app.listen(8181);

// Establishing the port
const PORT = process.env.PORT ||8181;
 
// Executing the server on given port number
app.listen(PORT, console.log(
  `Server started on port ${PORT}`));

var wprouter = require('./router/wprouter');
app.set('view engine','ejs');
app.use('/weapon',wprouter);
app.use(express.static('public'));
//https://weapontop80276.herokuapp.com/weapon/queryall 武器列表



var odrouter = require('./router/odrouter');
app.set('view engine','ejs');
app.use('/weapon',odrouter);
app.use(express.static('public'));

//https://weapontop80276.herokuapp.com/weapon/buy/2?number=4 增加到購物車


app.get('/', (req, res) => {
 
    // Sending the response
    res.send('<<a href="https://weapontop80276.herokuapp.com/weapon/queryall">https://weapontop80276.herokuapp.com/weapon/queryall</a>')
    
    // Ending the response
    res.end()
})



var mysql = require("mysql");
var pool = mysql.createPool({
    host: 'us-cdbr-east-06.cleardb.net',
    user:'bec73f25ef8ac3',
    password:'b3fc3ad6',
    database:'heroku_9059c434d2fdb58'
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

app.use(function (req, res, next) {
    req.query = mysqlPoolQuery;
    next();
});