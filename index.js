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
    res.send(<a>https://weapontop80276.herokuapp.com/weapon/queryall</a>)
    
    // Ending the response
    res.end()
})