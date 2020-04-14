// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {
  Row, Col, Select, Option, Button, Drawer, Dialog, Divider, Message
} from "element-ui";
import memoryUntil from '@/untils/memoryUntil'
import storeUntil from '@/untils/storeUntil'
Vue.use(Row).use(Col).use(Select).use(Option).use(Button).use(Drawer).use(Dialog).use(Divider);
Vue.config.productionTip = false;
memoryUntil.token=storeUntil.getToken();
/**
 * 处理多个message框同时提示
 * @type {symbol}
 */
// 为了实现Class的私有属性
const showMessage = Symbol('showMessage')
/**
 *  重写ElementUI的Message
 *  single默认值true，因为项目需求，默认只弹出一个，可以根据实际需要设置
 */
class DonMessage {
  success (options, single = true) {
    this[showMessage]('success', options, single)
  }
  warning (options, single = true) {
    this[showMessage]('warning', options, single)
  }
  info (options, single = true) {
    this[showMessage]('info', options, single)
  }
  error (options, single = true) {
    this[showMessage]('error', options, single)
  }

  [showMessage] (type, options, single) {
    if (single) {
      // 判断是否已存在Message
      if (document.getElementsByClassName('el-message').length === 0) {
        Message[type](options)
      }
    } else {
      Message[type](options)
    }
  }
}
Vue.component(Message);
// 命名根据需要，DonMessage只是在文章中使用
Vue.prototype.$message = new DonMessage();
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
