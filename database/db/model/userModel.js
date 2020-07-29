const mongoose =  require('mongoose')
// 创建一个合集相关的schema 对象
const child = new mongoose.Schema({
    user: {type: String, require: true},
    passwored: {type: String, require: true},
    age: {type: Number},
    sex:{type: Number, default: 0}
})
// 将schema转换为数据模型
const User =  mongoose.model('user', child)
module.exports = User