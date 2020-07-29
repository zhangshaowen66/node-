const express = require('express')
const app = express();
const path = require('path')
const db = require('./db/connect')
const userSinIn = require('./router/userSinIn')
var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, '../www')))
app.use('/static', express.static(path.join(__dirname, 'api')));
app.use('/user', userSinIn)

app.listen(3000, function (err) {
    if(err) {
        console.log('启动失败')
        throw err
    }
    console.log('启动成功')
})
