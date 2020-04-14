import Vue from 'vue'
import {
  Button,
  Form,
  FormItem,
  Input,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Menu,
  Submenu,
  MenuItem,
  Row,
  Col,
  Divider,
  Tabs,
  TabPane,
  Table,
  TableColumn,
  Pagination,
  Message,
  Avatar,
  Tag,
  Rate,
  Dialog,
  Upload,
  Badge,
  Select,
  Option
} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Aside)
Vue.use(Footer)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Divider)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)
Vue.use(Avatar)
Vue.use(Tag)
Vue.use(Rate)
  .use(Dialog)
  .use(Upload)
  .use(Badge)
  .use(Select)
  .use(Option)
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
Vue.component(Message)
// 命名根据需要，DonMessage只是在文章中使用
Vue.prototype.$message = new DonMessage()
/* eslint-disable no-new */
Vue.use(Button)
