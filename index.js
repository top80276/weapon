
const express = require('express');
const app = express();
app.listen(8181);

var wprouter = require('./router/wprouter');
app.set('view engine','ejs');
app.use('/weapon',wprouter);
app.use(express.static('public'));
//localhost:8181/weapon/queryall 武器列表



var odrouter = require('./router/odrouter');
app.set('view engine','ejs');
app.use('/weapon',odrouter);
app.use(express.static('public'));

//localhost:8181/weapon/buy/2?number=4 增加到購物車