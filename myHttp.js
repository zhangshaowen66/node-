const http = require('http')

const myServer = http.createServer(function (req, res) {
    console.log(req)
    console.log(res)
    res.write('<h1>123</h1>')
    res.end()
})

myServer.listen('3000', function (error) {
    if (error) {
        console.log(error)
        throw error;
    }
    console.log('端口启动成功，端口： 3000')
})
