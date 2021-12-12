const models = require('../db')
const express = require('express')
const router = express.Router()
const mysql = require('mysql')
const $sql = require('../sqlMap')

const conn = mysql.createConnection(models.mysql)
conn.connect()
const jsonWrite = function (res, ret) {
  if (typeof ret != 'undefined') {
    res.json(
      ret
    )
  }
}

router.post('/addRev', (req, res) => {
    const sql = $sql.Rev.add
    const params = req.body
    console.log('添加', params)
    conn.query(sql, [params.idx, params.name, params.link, params.rating, params.date, params.review], function (err, result) {
      if (err) {
        console.log('[INSERT ERROR] - ',err.message);
      }
      if (result) {
        res.json({
          code: '1', msg: '添加成功'
        })
      }
    })
  })
  
router.post('/insertRev', (req, res) => {
    const sql = $sql.Rev.insert
    const params = req.body
    console.log('批量插入', params)
    conn.query(sql, [params.idx, params.values], function(err, result) {
        if (err) {
            console.log('[INSERT ERROR] - ',err.message)
        }
        if (result) {
            res.json({
                code: '1', msg: '添加成功'
              })
        }
    })
}) 
  
router.post('/showRev', (req, res) => {
    const sql = $sql.Rev.show
    const params = req.body
    conn.query(sql, [params.idx], function (err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            jsonWrite(res, result)
        }
    })
})
  
router.post('/delRev', (req, res) => {
    const sql = $sql.Rev.del
    const params = req.body
    console.log('删除', params)
    conn.query(sql, [params.idx, params.name], function (err, result) {
        if (err) {
            console.log(err)
        }
        if (result) {
            var code = "";
            var msg = '';
            if(result.insertId == 0){
                code="0"
                msg="删除失败";
            }else
            {
                code="1"
                msg="删除成功";
            }
            res.json({
                code: code, msg: msg
            })
        }
    })
})
  
router.post('/updateRev', (req, res) => {
    const sql = $sql.Rev.update
    const params = req.body
    console.log('修改', params)
    conn.query(sql, [params.idx, params.link, params.rating, params.date, params.review, params.name], function (err, result) {
        if (err) 
        {
            console.log(err)
        }
        if (result) {
                var code = "";
                var msg = '';
            if(result.insertId == 0)
            {
                code="0";
                msg="修改失败";
            }
            else
            {
                code="1";
                msg="修改成功";
            }
            res.json({
                code: code, msg: msg
            })
        }
    })
})
  
module.exports = router