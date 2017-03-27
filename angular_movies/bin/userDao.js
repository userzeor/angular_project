/**
 * Created by PRD on 2017/3/20.
 */
var mysql = require('mysql');
var dbConfig  = require('./ConnectDatabase');
var $sql = require('./userSqlMapping');
var pool = mysql.createPool( dbConfig.mysql );

module.exports ={
    login:function (req,res,next,objData) {
        pool.getConnection(function(err, connection) {
            pool.query($sql.userLogin, function(err, result) {
                var mobile = objData.mobile;
                var pwd = objData.pwd;
                var autologin = objData.autologin;
                if(result[0].mobile==mobile&&result[0].pwd==pwd){
                    res.send({status:200,msg:"登录成功"});
                    console.log("登录成功");
                }else {
                    res.send({status:404,msg:"账号或密码错误"});
                    console.log("账号或密码错误");
                }
            });
            connection.release();
        });
    },
    register:function (req,res,next,objData) {
        pool.getConnection(function(err, connection) {
            pool.query($sql.userQuery, [objData.mobile], function(err, result) {
                if(result[0].mobile!=1){
                    pool.query($sql.userRegister, [objData.mobile,objData.pwd], function(err, result) {
                        var autologin = objData.autologin;
                        if(result.affectedRows>0){
                            res.send({status:200,msg:"注册成功"});
                            console.log("注册成功");
                        }else {
                            res.send({status:400,msg:"注册失败"});
                            console.log("注册失败");
                        }
                    });
                }else {
                    res.send({status:400,msg:"账号已被注册"});
                    console.log("账号已被注册");
                }
            });
            connection.release();
        });
    }
}