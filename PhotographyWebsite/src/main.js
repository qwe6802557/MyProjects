import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/plugins/element.js'
import echarts from 'echarts' // 引入图表
Vue.prototype.$echarts = echarts // 向Vue全局函数中添加$echarts对象方便实例化的时候调用
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
