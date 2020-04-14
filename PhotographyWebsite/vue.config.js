module.exports = {
  outputDir: 'dist', // build输出目录
  assetsDir: 'assets', // 静态资源目录（js, css, img）
  lintOnSave: false, // 是否开启eslint
  devServer: {
    open: true, // 是否自动弹出浏览器页面
    host: 'localhost',
    port: '8081',
    https: false, // 是否使用https协议
    hotOnly: false, // 是否开启热更新
    proxy: {
      '/': {
        target: 'http://1p8540u304.51mypc.cn:10487', // 跨域地址
        changeOrigin: true, // 是否跨域
        secure: false// 是否使用https
        /* pathRewrith:{
          '^api':'/api'//这里要理解成用'/api'代替target里面的地址，后面的组件中我们调用接口的时候直接用api代替，比如我要调用'http://40.00.100:3002/user/add'，直接写成'/api/user/add'即可
        } */
      }
    }
  }
}
