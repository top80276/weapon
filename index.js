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
    disconnect_handler();

    // Ending the response
    res.end()
})


var mysql = require('mysql');
var mysql_config = {
    host: 'us-cdbr-east-06.cleardb.net',
    user:'bec73f25ef8ac3',
    password:'b3fc3ad6',
    database:'heroku_9059c434d2fdb58'
};


function disconnect_handler() {
   let conn = mysql.createConnection(mysql_config);
    conn.connect(err => {
        (err) && setTimeout('disconnect_handler()', 6000);
    });

    conn.on('error', err => {
        if (err.code === 'PROTOCOL_CONNECTION_LOST') {
            // db error 重新連線
            disconnect_handler();
        } else {
            throw err;
        }
    });
    exports.conn = conn;
}

exports.disconnect_handler =  disconnect_handler;
