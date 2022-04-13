module.exports = {
    //关闭ESLINT校验工具
    lintOnSave: false,
    //设置代理服务器   
    devServer: {
        proxy: {
            '/api': {
                target: '',  //目标接口域名
                changeOrigin: true //是否跨域
            },
        }
    },
    //打包不生产map文件
    productionSourceMap:false
}