var fs = require('fs'); // 文件
/*
// 1.写
var res = fs.writeFileSync('./www/w1.text', '第一个文件22222', 'utf8')

console.log(res)

// 2.异步写

fs.writeFile('./www/t1.text', '12233','utf8', function (err) {
    if (err) {
        console.log('失败')
        throw err;
    }
    console.log('成功')
})

// 3. 读

var data = fs.readFileSync('./www/w1.text', 'utf8')
console.log(data, '读文件')*/

// 判断文件是否存在 返回true和false

/*fs.exists('./www/w1.text', function (err) {
console.log(err)
})*/

// 4.读异步

fs.readFile('./www/t1.text', 'utf8',(err,data)=> {
    if (err) {
        throw err;
    } else {
        console.log(data.toString())
    }
})

// 5
fs.appendFile('./www/t1.text', '\n 这是添加的内容' + new Date(), (err)=>{
    console.log(err)
})

// 6 监听文件
fs.watchFile('./www/t1.text', function (a) {
    console.log(a)
})