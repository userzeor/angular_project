var express = require('express');
var userDao  = require('./bin/userDao');
var userCode = require('./bin/sendEmail');
var app = express();

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.get('/angularBoutique/login', function (req, res,next) {
    var objData = req.query;
    userDao.login(req,res,next,objData);
});
app.get('/angularBoutique/register', function (req, res,next) {
    var objData = req.query;
    userDao.register(req,res,next,objData);
});
app.get('/angularBoutique/getprovingcode', function (req, res,next) {
    var objData = req.query;
    userCode.sendEmail(req, res,next,objData);
});
app.listen(38080,function () {
    console.log('服务器已开启,运行于38080端口');
});