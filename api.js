var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());
const getUser = require('./test')
const judgeUser  = require('./test')
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    getUser().then(result => {
        res.status(200);
        res.json(result);
    })
})
app.post('/test',(req,res) => {
    judgeUser().then(result => {
        // console.log(req.body);
        // console.log(result)
        const {fUserName, fPsw} = req.body.params
        // console.log(fUserName);
        const {username, psw} = result[0]
        // console.log(username);
        if(fUserName === username && fPsw === psw){
            console.log('-------->');
            res.json(result)
        }else{
            console.log('<----------------');
            res.json('errror')
        }
        // res.json(result)
    })
    // let params = req.query;
    // console.log(params);
    // res.json(params)
})

// 配置服务端口
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
})