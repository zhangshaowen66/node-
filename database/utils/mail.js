const nodemailer = require("nodemailer");

function sendMail (mail, code) {
    let transporter = nodemailer.createTransport({
        host: "smtp.qq.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: '1263461187@qq.com', // generated ethereal user
            pass: 'coheuczmwgzegeaa', // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info =  transporter.sendMail({
        from: '"Fred Foo 👻" <1263461187@qq.com>', // sender address
        to: mail, // list of receivers
        subject: "Hello ✔", // Subject line
        text:`您的邮箱验证码${code},邮箱期5分钟`, // plain text body
    });
    return new Promise((resolve, reject)=>{
        transporter.sendMail(info, (err,data)=> {
            console.log(err)
            console.log(data)
            if (!err) {
                reject()
            } else {
                resolve()
            }
        })
    })
}
module.exports = sendMail