var express = require('express');

var router = express.Router();

const userCtrl = require('../controllers/users');


router.get('/login'									,								userCtrl.login);

router.post('/login'								,								authentication.login);


router.get('/register'							,								userCtrl.register);

router.post('/register'							,								authentication.register);


module.exports = router;
