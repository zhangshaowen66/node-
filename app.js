var express = require('express')
var app = express();
var path = require('path')
// 跳转到指定路径地址
app.use('/detail',function (req,res) {
    res.status(200).sendFile(path.join(__dirname, 'www', 'list.html'))
})
// 输入错误地址弹出404
app.use(function (req,res) {
    res.status(200).sendFile(path.join(__dirname, 'www', '404.html'))
})
// 默认输出www文件夹 index页面
app.use(express.static(path.join(__dirname, 'www')))

// 监听启动是否成功
app.listen(3000, function (err) {
    if (err) {
        console.log('开启错误')
        throw err;
    }
    console.log('开启成功')
})