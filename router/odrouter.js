var express = require('express');
var router = express.Router();
var odcontroller = require('../controller/odcontroller');

router.get('/buy',odcontroller.buyone);
router.get('/buy/buyall',odcontroller.buyall);
router.get('/buy/del',odcontroller.buydel);
router.get('/buy/update',odcontroller.buyupdate);
router.get('/buy/end',odcontroller.buyend);

module.exports = router;


