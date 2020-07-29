const mongoose =  require('mongoose')
// 要连接的数据库地址
mongoose.connect('mongodb://localhost/admin',{useNewUrlParser: true})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log('db')
});
// schema 对象

// 创建一个合集相关的schema 对象
const child = new mongoose.Schema({
    user: {type: String, require: true},
    passwored: {type: String, require: true},
    age: {type: Number},
    sex:{type: Number, default: 0}
})
// 将schema转换为数据模型
const User =  mongoose.model('user', child)
// 操作数据库

// 插入数据
User.insertMany({user:'张啊啊', passwored: 'dasd123', age: '1'})
    .then(
        data => {
            console.log(data)
            console.log('插入成功')
        }
    )
    .catch(
        err => {
            console.log(err)
            console.log('插入失败')
        }
    )

// 查询数据
User.find({age: 17})

// 删除数据
/*User.remove({sex: 0}, err => {
    console.log(err)
})*/



