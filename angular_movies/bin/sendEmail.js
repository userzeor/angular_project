/**
 * Created by PRD on 2017/3/27.
 */
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'qq',
    auth: {
        user: '1963534590@qq.com',
        pass: 'uvatwemlwqjrfchd' //授权码,通过QQ获取

    }
});
// 参数：
//
// from：配置发送邮件信息
// to：数组，配置发送给谁
// name：显示的名称
// service：SMTP 名称，这里用 Gmail
// auth：邮箱的用户名和密码
// @param {String} subject：发送的主题
// @param {String} html：发送的 html 内容
module.exports = {
    sendEmail: function (req, res,next,objdata) {
        var code = parseInt(Math.random()*10000);
        var mailOptions = {
            from: '1963534590@qq.com', // 发送者
            to: objdata.userEmail, // 接受者,可以同时发送多个,以逗号隔开
            subject: '娱乐之城', // 标题
            // text: '3346', // 文本
            html: '<h1 style="color: #8775a9">娱乐之城验证码: <h1 style="color: #398bfd">'+code+'</h1></h1>'
        }
        transporter.sendMail(mailOptions, function(error, response){
            if (error) {
                console.log(error);
            } else {
                console.log('邮件发送成功');
            }
            transporter.close();
        });
        res.send({status:200,msg:"获取成功",code:code});
    }
};