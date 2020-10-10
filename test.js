const user = require('./schema')

//查询
const getUser = () => {
    return user.find()
}
//添加
const addUser = (params) => {
    const [username, psw] = params;
}

const judgeUser = () => {
    // const { username, psw } = params.params
    // console.log(username + ':' + psw);
    // console.log(params);
    return user.find()
}
module.exports = getUser, judgeUser
// getUser()