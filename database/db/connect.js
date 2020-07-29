const mongoose =  require('mongoose')
// 要连接的数据库地址
mongoose.connect('mongodb://localhost/admin',{useNewUrlParser: true,useUnifiedTopology: true})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log('db')
});
