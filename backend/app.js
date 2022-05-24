var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')


var usuarioRouter=require('./routes/usuario');
var rolesRouter=require('./routes/roles');
var gradosRouter=require('./routes/grados');
var authorization=require('./midleware/authorization')
var archivoRouter=require('./routes/archivos');
var asignaturaRouter=require('./routes/asignaturas');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())


app.use('/usuario',usuarioRouter);
app.use('/roles',rolesRouter);
app.use('/grados',gradosRouter);
app.use('/archivos',authorization,archivoRouter);
app.use('/asignaturas',asignaturaRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};


  res.setHeader('Access-Control-Allow-Origin', "*");
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
