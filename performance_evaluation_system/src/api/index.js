import axios from 'axios'
import router from '@/router/index.js'
import Vue from 'vue'
import { Message } from 'element-ui';
let that = {};
new Vue({
  router,
  data () {
    that = this;
    return {}
  }
});
/**
 * 配置拦截器
 */
axios.interceptors.response.use(res => {
  const { code } = res.data;
  code === 50007 && that.$router.push('/login');
  // 对响应数据做些什么
  return res;
}, err => {
  // 对响应错误做些什么
  err.response.status === 404 &&  Message.error('请求异常，请检查网络!');
  err.response.status.toString().startsWith('5')  && Message.error('服务器出错，请检查服务器状态!');
  return err
});
/**
 * 导出封装ajax函数对象
 * @param url
 * @param data
 * @param method
 * @param token
 * @param responseType
 * @returns {Promise<unknown>}
 */
export default function ajax (url, data = null, method = 'GET', token, responseType) {
  return new Promise((resolve, reject) => {
    let promise = {};
    const ajaxObj = {};

    !!url && Object.defineProperty(ajaxObj,'url', { value: url, enumerable:true});
    !!data && method === 'POST' && Object.defineProperty(ajaxObj,'data', { value: data, enumerable:true });
    !!data && method === 'GET' && Object.defineProperty(ajaxObj,'params', { value: data, enumerable:true });
    !!method && Object.defineProperty(ajaxObj,'method', { value: method, enumerable:true});
    !!token && Object.defineProperty(ajaxObj,'headers', { value: {   'Authorization':`Bearer ${token}` }, enumerable:true});
    !!responseType && Object.defineProperty(ajaxObj,'responseType', { value: responseType, enumerable:true});

    promise = axios(ajaxObj);

    promise.then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}
