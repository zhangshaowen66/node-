const express = require('express')
const router = express.Router()
const User = require('../db/model/userModel')
const sendMail = require('../utils/mail')
let codes = {}
router.post('/getMalicode', (req,res)=> {
    let {mail} = req.body
    let newTime = new Date()
    let Mcode = parseInt(Math.random()*10000)
    console.log(codes)
    if (codes['endTime'] && (codes['endTime'] > newTime.getTime())) return res.send({code: -1, msg: '邮箱请求频繁', time: codes['endTime']})
    sendMail(mail, Mcode)
        .then(
            ()=> {
                let times = new Date()
                codes = {
                    code: Mcode,
                    endTime: times.getTime() + 1000 * 60 * 5
                }
                res.send({code: 0, msg: '发送成功'})
            }
        )
        .catch(
            res.send({code: -1, msg: '发送失败'})
        )
    // res.sendMail()
})
router.post('/reg', (req, res) => {
    let {user, passwored, mCode} = req.body
    console.log(req.body)
    console.log(codes)
    if (user && passwored && mCode) {
        if (mCode != codes.code) {return res.send({code: -1, msg: '邮箱验证码不正确'})}
        User.find({user})
            .then(
                data => {
                    if (data.length > 0) {
                        return  res.send({code: -1, msg: '用户已注册'})
                    }
                }
            )
            .catch(
                err => {
                    console.log(err)
                }
            )
        User.insertMany({user: user, passwored: passwored})
            .then(
                data => {
                    if (data.length > 0) {
                        res.send({code: 1, msg: '注册成功'})
                    }
                }
            )
            .catch(
                err => {
                    console.log(err)
                }
            )
    } else {
        res.send({code: -1, msg: '用户名或者密码不能为空'})
    }

})

module.exports = router