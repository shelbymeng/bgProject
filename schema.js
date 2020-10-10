var mongoose = require('./connect')
var Schema = mongoose.Schema

var User = Schema({
    username: String,  //用户名
    psw: String        //密码
});

var user = mongoose.model('user', User, 'users');

module.exports =  user 
