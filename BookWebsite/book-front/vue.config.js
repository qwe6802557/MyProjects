module.exports = {
    baseUrl: './',
    assetsDir: 'static',
    productionSourceMap: false,
    devServer: {
        proxy: {
            '/api':{
                target:'http://localhost:5000',
                changeOrigin:true,
                pathRewrite:{
                    '/api':''
                }
            }
        }
    }
}