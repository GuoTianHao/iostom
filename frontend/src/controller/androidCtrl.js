const express = require('express')
const moment = require('moment')
const httpUtils = require('../utils/httpUtils')
const router = express.Router()

const featureEnum = {
    '1': '提现快',
    '2': '体验好',
    '3': '任务多',
    '4': '单价高'
}

const getEnumNameByVal = (enum_, val) => {
    if (!enum_) {
        return val
    }
    return enum_[val]
}


router.get('/android', function (req, res) {
    console.log("时间 " + moment().format('LLL') + " 路径 ", req.url);
    httpUtils.sendRequest({
        url: 'localhost', path: '/app/condition.do?type=2', method: 'GET', port: 8445,
        callback: (data) => {
            const result = JSON.parse(data);
            const arr = result.data
            for (i in arr) {
                arr[i].feature = getEnumNameByVal(featureEnum, arr[i].feature)
            }
            res.render('framework.html', {
                tmpl: './tmpls/androidapps.tmpl.html',
                data: {
                    apps: arr
                }
            })
        }
    })
})

module.exports = router;