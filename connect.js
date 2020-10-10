var mongoose = require('mongoose');
var url = 'mongodb://127.0.0.1:27017/test';
mongoose.connect(url);

mongoose.connection.on('connected', () => {
    console.log('connect success!')
});
// 连接异常
mongoose.connection.on('error', (err) => {
    console.log('Mongoose connection error ' + err);
});
// 连接断开
mongoose.connection.on('disconnected', () => {
    console.log('Mongoose connection disconnected ');
});

module.exports = mongoose;

