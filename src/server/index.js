// node 后端服务器
const resortsApi = require('./api/resorts_api')
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')
const express = require('express')
const app = express()
app.all("*", function (req, res, next) {
    //Host admitted , * for all
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "content-type");
    res.header("Access-Control-Allow-Methods", "DELETE,PUT,POST,GET,OPTIONS");
    if (req.method.toLowerCase() == 'options')
        res.send(200); 
    else
        next();
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
// 后端api路由
app.use('/api/resorts', resortsApi)
// 监听端口
app.listen(3001)
console.log('success listen at port:3001......')

