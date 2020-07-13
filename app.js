var express = require('express')
var app = express();
var path = require('path')
var bodyParser = require('body-parser')
// 跳转到指定路径地址
/*app.use('/detail',function (req,res) {
    res.status(200).sendFile(path.join(__dirname, 'www', 'list.html'))
})*/
// 默认输出www文件夹 index页面
app.use(express.static(path.join(__dirname, 'www')))
/*// 输入错误地址弹出404
app.use(function (req,res) {
    res.status(200).sendFile(path.join(__dirname, 'www', '404.html'))
})*/
// 对post 接口body参数的处理
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


app.post('/b', function (req, res) {
    console.log(req.body.a, 'req')
})
app.get('/a/:id/:name', function (req, res) {
   //  res.status(200).send('这是get数据')
    // res.query 获取get带的参数名
    console.log(req.params, 'req')
    res.status(200).json({success: true, data: [{age: 10}]})
})



// 监听启动是否成功
app.listen(3000, function (err) {
    if (err) {
        console.log('开启错误')
        throw err;
    }
    console.log('开启成功')
})