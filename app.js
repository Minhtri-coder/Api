var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');



const mongoose = require('mongoose');
require('./model/accountModel')
require('./model/billModel')
require('./model/categoryModel')
require('./model/productModel')
require('./model/billDetailsModel')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var accountRoute = require('./routes/accountRoute');
var categoryRoute = require('./routes/categoryRoute');
var productRoute = require('./routes/productRoute');
var billRoute = require('./routes/billRoute');
var billdetailsRoute = require('./routes/billdetailsRoute');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/account', accountRoute);
app.use('/category', categoryRoute);
app.use('/product', productRoute);
app.use('/bill', billRoute);
app.use('/billdetails',billdetailsRoute);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
mongoose.connect('mongodb://127.0.0.1:27017/ASM')
  .then(() => console.log('>>>>>>>>>> DB Connected!!!!!!'))
  .catch(err => console.log('>>>>>>>>> DB Error: ', err));

module.exports = app;
