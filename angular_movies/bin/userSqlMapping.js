/**
 * Created by PRD on 2017/3/20.
 */
module.exports =
    {
        userLogin:'SELECT * FROM user;', //用户登录
        userRegister:'INSERT into user(mobile,pwd) VALUES(?,?);',  //用户注册
        userQuery:'SELECT count(*) "mobile" FROM user WHERE mobile=?;'
    };