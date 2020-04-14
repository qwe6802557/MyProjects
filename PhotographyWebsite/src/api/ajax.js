import axios from 'axios'
import memoryUntil from '@/untils/memoryUntil'
import storeUntil from '@/untils/storeUntil'
import router from '@/router/index.js'
import Vue from 'vue'
let that = {}
const vue = new Vue({
  router,
  data () {
    that = this
    return {}
  }
})
// 配置拦截器
axios.interceptors.response.use(res => {
  // 对响应数据做些什么
  return res
}, err => {
  // 对响应错误做些什么
  err.response.status === 404 && that.$message.error('请求异常，请检查网络!')
  err.response.status.toString().startsWith('5') && that.$message.error('服务器异常，请稍后再试!')
  return err
})
export default function ajax (url, data = null, method = 'GET', token, ...arr) {
  return new Promise((resolve, reject) => {
    let promise = 0
    if (!token) {
      if (method === 'GET') {
        promise = axios({
          url: url,
          method: method.toLowerCase(),
          withCredentials: true,
          params: data
        })
      } else {
        promise = axios({
          url: url,
          method: method.toLowerCase(),
          data: data,
          withCredentials: true
        })
      }
    } else {
      data.token = token
      if (method === 'GET') {
        promise = axios({
          url: url,
          method: method.toLowerCase(),
          withCredentials: true,
          params: data
        })
      } else {
        promise = axios({
          url: url,
          method: method.toLowerCase(),
          data: data,
          withCredentials: true // 允许跨域携带cookies
        })
      }
    }
    promise.then(res => {
      /* if (res === 1) {
        that.$message.error('登录状态发生变化，请重新登录!')
        memoryUntil.token = null
        storeUntil.delToken()
        vue.$router.push({ name: 'Login' })
      } else { */
      resolve(res)
      /*      } */
    }).catch(err => {
      reject(err)
    })
  })
}
