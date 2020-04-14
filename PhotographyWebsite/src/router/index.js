import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('@/views/front/layout/Layout.vue'),
    redirect: '/home',
    children: [{
      path: 'home',
      name: 'Home',
      component: () => import('@/views/front/home/Home.vue')
    }, {
      path: 'subitem',
      name: 'Subitem',
      component: () => import('@/views/front/subitem/Subitem.vue')
    }, {
      path: '/subitem/detail/:id',
      name: 'SubitemDetail',
      component: () => import('@/views/front/subitem/SubitemDetail.vue')
    }, {
      path: '/subitem/publish',
      name: 'SubitemPublish',
      component: () => import('@/views/front/subitem/SubitemPublish.vue')
    }, {
      path: 'beat',
      name: 'Beat',
      component: () => import('@/views/front/beat/Beat.vue')
    }, {
      path: '/beat/detail/:id',
      name: 'BeatDetail',
      component: () => import('@/views/front/beat/BeatDetail.vue')
    }, {
      path: 'order',
      name: 'Order',
      component: () => import('@/views/front/order/Order.vue')
    }, {
      path: 'message',
      name: 'Message',
      component: () => import('@/views/front/message/Message.vue')
    }, {
      path: '/message/detail/:id',
      name: 'MessageDetail',
      component: () => import('@/views/front/message/MessageDetail.vue')
    }, {
      path: '/personal',
      name: 'Personal',
      component: () => import('@/views/front/personal/Personal.vue')
    }]
  }, {
    path: '/admin/login',
    name: 'Login',
    component: () => import('@/views/admin/login/Login.vue')
  }, {
    path: '/admin/auth',
    name: 'Layout',
    redirect: '/auth/home',
    component: () => import('@/views/admin/auth/Layout.vue'),
    children: [{
      path: 'home',
      name: 'Home',
      component: () => import('@/views/admin/auth/home/Home.vue')
    }, {
      path: 'userComments',
      name: 'UserComments',
      component: () => import('@/views/admin/auth/user/UserComments.vue')
    }, {
      path: 'userScore',
      name: 'UserScore',
      component: () => import('@/views/admin/auth/user/UserScore.vue')
    }, {
      path: 'userList',
      name: 'UserList',
      component: () => import('@/views/admin/auth/user/UserList.vue')
    }, {
      path: 'worksList',
      name: 'WorksList',
      component: () => import('@/views/admin/auth/works/WorksList.vue')
    }, {
      path: 'worksType',
      name: 'WorksType',
      component: () => import('@/views/admin/auth/works/WorksType.vue')
    }, {
      path: 'ordersList',
      name: 'OrdersList',
      component: () => import('@/views/admin/auth/orders/OrdersList.vue')
    }, {
      path: 'beatList',
      name: 'BeatList',
      component: () => import('@/views/admin/auth/orders/BeatList.vue')
    }, {
      path: 'messagesList',
      name: 'MessagesList',
      component: () => import('@/views/admin/auth/camera/MessagesList.vue')
    }, {
      path: 'skillsList',
      name: 'SkillsList',
      component: () => import('@/views/admin/auth/camera/SkillsList.vue')
    }, {
      path: 'subitemList',
      name: 'SubitemList',
      component: () => import('@/views/admin/auth/camera/SubitemList.vue')
    }, {
      path: 'adminsList',
      name: 'AdminList',
      component: () => import('@/views/admin/auth/admins/AdminList.vue')
    }, {
      path: 'authorityList',
      name: 'AuthorityList',
      component: () => import('@/views/admin/auth/admins/AuthorityList.vue')
    }]
  }, {
    path: '/user',
    name: 'Login',
    redirect: '/user/login',
    component: () => import('@/views/front/main/index.vue'),
    children: [{
      path: 'login',
      name: 'Main',
      component: () => import('@/views/front/main/login')
    }, {
      path: 'register',
      name: 'Register',
      component: () => import('@/views/front/main/registor')
    }, {
      path: 'reset',
      name: 'Reset',
      component: () => import('@/views/front/main/reset')
    }]
  }
]

const router = new VueRouter({
  routes,
  linkActiveClass: 'router-link-active'
})

export default router
