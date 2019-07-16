require('dotenv').load();

const createError = require('http-errors');

const express = require('express');

const path = require('path');

const cookieParser = require('cookie-parser');

const logger = require('morgan');

var compression = require('compression');

var helmet = require('helmet');

//const passport = require('passport');

//require('./app_api/models/db');

const indexRouter = require('./app_server/routes/index');

//require('./app_api/config/passport');

const app = express();
		

app.set('views', path.join(__dirname, 'app_server' , 'views'));
																																app.set('view engine', 'pug');
																																															app.use(logger('dev'));
																																																											app.use(express.json());
																																																																								app.use(express.urlencoded({ extended: false }));																			
app.use(cookieParser());
													app.use(compression());
																									app.use(helmet());
																																			app.use(express.static(path.join(__dirname, 'public')));
																																																																							//						app.use(passport.initialize());
app.use('/' , indexRouter);


app.use((req, res, next) => {	
																next(createError(404));	});

app.use((err, req, res, next) => {
  																	res.locals.message = err.message;
  																																		res.locals.error = req.app.get('env') === 'development' ? err : {};
  																	res.status(err.status || 500);
  																																		res.render('error');																									});

module.exports = app;