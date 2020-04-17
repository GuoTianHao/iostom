/**
 * 应用
 */
module.exports = (mongoose) => {
    const App = mongoose.model
        ('App',
            {
                ctime: Date,
                utime: Date,
                name: String,//名字
                type: String,//ios 安卓
                titledesc: String,//简单描述
                order: Number,//排序
                url: String,//地址
                // local: String,//
                status: String,//1：启用 0.禁用
                feature: String
            }
        );
    return App
}
