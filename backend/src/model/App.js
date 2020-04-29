/**
 * 应用
 */
const mongoose = require('../repository/MongooseFactory')

module.exports = mongoose.model('App',
    {
        ctime: Date,
        utime: Date,
        name: String,//名字
        type: String,//1.ios 2.安卓
        titledesc: String,//简单描述
        title: String,//标题
        order: Number,//排序
        url: String,//地址
        imgurl: String,//图片地址
        imgdata: String,//图片base64编码
        // local: String,//
        status: String,//1：启用 0.禁用
        feature: String //特点：提现快、体验好、任务多、单价高
    }
);