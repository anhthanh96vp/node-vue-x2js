var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');


// import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'
import config from 'config'

var app = express();

// let options = {
//   useNewUrlParser: config.get("useNewUrlParser"),  
//   db: config.get("db"),  
//   server: config.get("server"),
//   user:  config.get("user"),
//   pass: config.get("pass"),
  
// }

// mongoose.connect('mongodb://localhost:27017/shopping', options, (err) => {
//   if(err) {
//     console.log(`Connect DB failed. Error ${err}`);    
//   } else {
//     console.log('Connect DB successfully');
//   }
// });



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



app.use(morgan('combine'));
app.use(bodyParser.json())
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// CẤU HÌNH STATIC 2 KIỂU VIẾT
// app.use("/static", express.static(__dirname + "/public"))
app.use(express.static(path.join(__dirname, 'public')));


/* 
  MIDDELEWARE VIEW DEFAULT
  var indexRouter = require('./routes/index');
  app.use('/', indexRouter);

  */

//MIDDELEWARE VIEW SỬA LẠI CHO GỌN
// Import thư mục router rồi Include router index
const routes = require(__dirname + "/routes")
app.use(routes)



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
