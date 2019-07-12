const express = require('express');

const router = express.Router();

const nitecoCtrl = require('../controllers/niteco');

const othersCtrl = require('../controllers/others');

const jwt = require('express-jwt');

const auth = jwt({

	'secret' : process.env.JWT_SECRET ,
																			'userProperty' : 'payload'

});


router.get('/'											,									nitecoCtrl.homepage);

router.get('/blog'									,									nitecoCtrl.blog);

router.get('/blog/:article'					,									nitecoCtrl.blogArticle);


router.get('/add/'									,									nitecoCtrl.createArticle);

router.post('/add/'									,									nitecoCtrl.submitArticle);



router.get('/about' 								,									othersCtrl.about);

router.get('/contact'								,									othersCtrl.contact);

router.get('/services'							,									othersCtrl.services);

router.get('/privacy-policy'				,									othersCtrl.privacyPolicy);



module.exports = router;