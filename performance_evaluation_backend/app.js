var createError = require('http-errors');
var express = require('express');
var cors = require('cors');
var multer = require('multer');
var fs = require('fs');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/routeLoad');
const routerInit = require('./router');
const { initSchema } = require('./app/index');
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
const port = 3000;
var app = express();
app.use(cors());
initSchema();
routerInit(app);
const upload = multer({
  dest:'./upload'
});
//处理文件上传的请求
app.post('/upload',upload.array('file'),(req,res) => {
  console.log('req.files :>> ', req.files);
  for (let i of req.files) {
    fs.readFile(i.path, function(err, data) {
      console.log(`err----${err}`);
      if (err) {
        res.send({ code:500, message:'上传失败'+ err})
      } else {
        var dir_file = __dirname + '/' + i.originalname;
        console.log('dir_file--->',dir_file);
        fs.writeFile(dir_file, data, function(err) {
          var obj = {
            originalname:i.originalname,
            filename:i.filename
  
          }
          console.log('obj---->',obj);
          res.send(JSON.stringify(obj))
        })
      }
    })
  }
  
})
app.listen(port, () => {
  console.log('监听端口---',port);
})
//下载文件
app.get(`/downLoad`, function(req,res,next) {
  let fileId = req.param('fileId');
  console.log('req :>> ', req.query);
  console.log('fileId :>> ', fileId);
  let file = path.join(__dirname,'./upload/' + fileId)
  console.log('file :>> ', file);
  res.download(file);
})
// view engine setup
//设置跨域访问
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With, token, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", ' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/users', usersRouter);

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

module.exports = app;
