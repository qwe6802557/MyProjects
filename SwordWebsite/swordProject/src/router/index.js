import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};//解决vue-router路由多次跳转报错
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Customer',
      component: () => import('@/components/customer/index.vue'),
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/components/admin/login/index.vue'),
    }, {
      path: '/auth',
      name: 'Admin',
      component: () => import('@/components/admin/index.vue'),
      redirect: '/auth/home',
      children: [
        {
          path:'home',
          name:'Home',
          component: () => import('@/components/admin/home/index.vue'),
        },{
          path:'add',
          name:'Add',
          component: () => import('@/components/admin/addPage/index.vue'),
        },{
          path:'hot',
          name:'HotList',
          component: () => import('@/components/admin/hotList/index.vue'),
        }, {
          path: 'hot/add',
          name: 'AddList',
          component: () => import('@/components/admin/hotList/add/index.vue'),
        },{
          path: 'other',
          name: 'Other',
          component: () => import('@/components/admin/Other/index.vue'),
        }
      ]
    },{
      path:'/404',
      name:'ErrorPage',
      component: () => import('@/components/admin/errorPage/index.vue'),
    }, {
      path: "*",
      redirect: "/404",
    }
  ],
  linkActiveClass:'router-link-active',
})
