import axios from 'axios'
import { message } from 'antd';

/**
 * interceptors deployment
 */
axios.interceptors.response.use(res => {
  // response to data
  return res
}, err => {
  // response to errors
  err.response.status === 404 && message.destroy() && message.error('Errors, please check network');
  err.response.status.toString().startsWith('5') && message.destroy() && message.error('Server Error');
  return err
});
/**
 * Export ajax objects
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
