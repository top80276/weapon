var express = require('express');
var router = express.Router();
var wpcontroller = require('../controller/wpcontroller');

router.get('/queryall',wpcontroller.queryall);
router.get('/queryall/powerasc',wpcontroller.powerasc);
router.get('/queryall/powerdesc',wpcontroller.powerdesc);
router.get('/queryall/lastingasc',wpcontroller.lastingasc);
router.get('/queryall/lastingdesc',wpcontroller.lastingdesc);
router.get('/queryall/priceasc',wpcontroller.priceasc);
router.get('/queryall/pricedesc',wpcontroller.pricedesc);
router.get('/queryall/search',wpcontroller.search);


module.exports = router;


