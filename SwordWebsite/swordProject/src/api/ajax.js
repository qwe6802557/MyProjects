import axios from 'axios';
import memoryUntil from '@/untils/memoryUntil';
import storeUntil from '@/untils/storeUntil';
import router from '@/router/index.js';
import Vue from 'vue';
let that = {};
const vue=new Vue({
  router,
  data(){
    that = this;
    return {};
  }
});
export default function ajax(url,data=null,method="GET",token, ...arr){
  return new Promise((resolve,reject)=>{
    let promise=0;
    if (!token){
      if (method==="GET"){
        promise=axios({
          url:url,
          method:method.toLowerCase(),
          withCredentials:true,
          params:data
        })
      }else{
        promise=axios({
          url:url,
          method:method.toLowerCase(),
          data:data,
          withCredentials:true
        });
      }
    }else{
      data.token = token;
      if (method==="GET"){
        promise=axios({
          url:url,
          method:method.toLowerCase(),
          withCredentials:true,
          params:data,
        });
      }else{
        promise=axios({
          url:url,
          method:method.toLowerCase(),
          data:data,
          withCredentials:true, //允许跨域携带cookies
        });
      }
    }
    promise.then( res => {
      const { code }=res.data;
      if (arr[0]){
       return resolve(res);
      }
      if (code === 1){
        that.$message.error("登录状态发生变化，请重新登录!");
        memoryUntil.token = null;
        storeUntil.delToken();
        vue.$router.push({name:'Login'});
      }else{
        resolve(res);
      }
    }).catch(err=>{
      reject(err);
    })
  })
}
