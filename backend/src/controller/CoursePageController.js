const express = require('express')
const router = express.Router()
/**
 * 渲染入门教程页
 */
router.get('/quickstart', function (req, res) {
    console.log('主页req.url', req.url)
    res.render('quickstart/index.html')
})

module.exports = router;