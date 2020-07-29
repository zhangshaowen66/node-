const cheerio = require('cheerio')
const http = require('https')
const fs = require('fs')
var iconv = require('iconv-lite');
const url = 'https://es6.ruanyifeng.com/#docs/module-loader'
http.get(url, res => {
    const {statusCode} = res
    const contentType = res.headers['content-type']
    console.log(statusCode)
    console.log(contentType)
    let Data = ''
    if (statusCode !== 200) {
       new Error('请求错误')
        return
    }
    res.on('data', chunk => {
        Data += iconv.decode(chunk,'utf8').toString();
    })
    res.on('end', ()=> {
        const $ = cheerio.load(Data);
        fs.writeFileSync('./www/文档.html', Data, )
        fs.writeFileSync('./www/计算机接口课堂大作业.txt', '\n' + $('div#contents p').text(), )
        console.log($('div#contents p').text())
    })
})