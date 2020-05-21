import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: '首页',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },
  {
    path: '/teachingModule',
    component: Layout,
    redirect: '/teachingModule/workload/workloadList',
    name: 'TeachingModule',
    meta: {
      title: '教学教研考评模块',
      icon: 'example'
    },
    children: [
      {
        path: 'workload',
        component: () => import('@/views/teachingMoudle/workload/index'), // Parent router-view
        name: 'workload',
        meta: { title: '工作量模块', icon: 'clipboard' },
        children: [
          {
            path:'workloadList',
            name:'workloadList',
            component: () => import('@/views/teachingMoudle/workload/workloadList'),
            meta: {title: '工作量List',icon:'list'}
          },
          {
            path:'workloadAudit',
            name:'workloadAudit',
            component: () => import('@/views/teachingMoudle/workload/workloadAudit'),
            meta: {title: '工作量审核单',icon:'list'}
          }
        ]
      },
      {
        path: 'teachRes',
        name: 'teachRes',
        component: () => import('@/views/teachingMoudle/teachRes/index'),
        meta: { title: '教学教研模块', icon: 'nested' },
        children: [
          {
            path:'teachResList',
            name:'teachResList',
            component: () => import('@/views/teachingMoudle/teachRes/teachResList'),
            meta: {title: '教学教研List',icon:'list'}
          },
          {
            path:'teachResAudit',
            name:'teachResAudit',
            component: () => import('@/views/teachingMoudle/teachRes/teachResAudit'),
            meta: {title: '教学教研审核单',icon:'list'}
          }
        ]
      },
      {
        path: 'teachProcess',
        name: 'teachProcess',
        component: () => import('@/views/teachingMoudle/teachProcess'),
        meta: { title: '教学工程及其他模块', icon: 'component' },
        children: [
          {
            path:'teachProcessList',
            name:'teachProcessList',
            component: () => import('@/views/teachingMoudle/teachProcess/teachProcessList'),
            meta: {title: '模块List',icon:'list'}
          },
          {
            path:'teachProcessAudit',
            name:'teachProcessAudit',
            component: () => import('@/views/teachingMoudle/teachProcess/teachProcessAudit'),
            meta: {title: '模块审核单',icon:'list'}
          }
        ]
      },
      {
        path:'dataStatistics',
        name:'dataStatistics',
        component:() => import('@/views/teachingMoudle/dataStatistic'),
        meta:{title:'数据统计',icon:'chart'}
      },
      {
        path:'teachingAudit',
        name:'teachingAudit',
        component:() => import('@/views/teachingMoudle/teachingSumAudit'),
        meta:{title:'教学教研考评审核单',icon:'form'}
      }
    ]
  },
  //个人信息页面路由定义
  {
    path:'/user',
    component:() => import('@/views/userInformation/index'),
    name:'user'
  },




  {
    path: '/xyrModule',
    component: Layout,
    redirect: '/xyrModule/zhuanyejs/xkjsList',
    name: 'xyrModule',
    meta: {
      title: '学科建设研究生工作人才引进',
      icon: 'example'
    },
    children: [
      {
        path: 'xkjs',
        component: () => import('@/views/xyrModule/xkjs/index'), // Parent router-view
        name: 'xkjs',
        meta: { title: '学科建设', icon: 'clipboard' },
        children: [
          {
            path:'xkjsList',
            name:'xkjsList',
            component: () => import('@/views/xyrModule/xkjs/xkjsList'),
            meta: {title: '数据单',icon:'list'}
          },
          {
            path:'xkjsAudit',
            name:'xkjsAudit',
            component: () => import('@/views/xyrModule/xkjs/xkjsAudit'),
            meta: {title: '审核单',icon:'list'}
          }
        ]
      },
      {
        path: 'yjsgz',
        name: 'yjsgz',
        component: () => import('@/views/xyrModule/yjsgz/index'),
        meta: { title: '研究生工作', icon: 'nested' },
        children: [
          {
            path:'yjsgzList',
            name:'yjsgzList',
            component: () => import('@/views/xyrModule/yjsgz/yjsgzList'),
            meta: {title: '数据单',icon:'list'}
          },
          {
            path:'yjsgzAudit',
            name:'yjsgzAudit',
            component: () => import('@/views/xyrModule/yjsgz/yjsgzAudit'),
            meta: {title: '审核单',icon:'list'}
          }
        ]
      },
      {
        path: 'rcyj',
        name: 'rcyj',
        component: () => import('@/views/xyrModule/rcyj'),
        meta: { title: '人才引进', icon: 'component' },
        children: [
          {
            path:'rcyjList',
            name:'rcyjList',
            component: () => import('@/views/xyrModule/rcyj/rcyjList'),
            meta: {title: '数据单',icon:'list'}
          },
          {
            path:'rcyjAudit',
            name:'rcyjAudit',
            component: () => import('@/views/xyrModule/rcyj/rcyjAudit'),
            meta: {title: '审核单',icon:'list'}
          }
        ]
      },
      {
        path:'dataStatistics',
        name:'dataStatistics',
        component:() => import('@/views/xyrModule/dataStatistic'),
        meta:{title:'数据统计',icon:'chart'}
      },
      {
        path:'xyrAudit',
        name:'xyrAudit',
        component:() => import('@/views/xyrModule/xyrSumAudit'),
        meta:{title:'整体审核单',icon:'form'}
      }
    ]
  },













//pingtai

  {
    path: '/pingtaiModule',
    component: Layout,
    redirect: '/pingtaiModule/zhuanyejs/zhuanyejsList',
    name: 'pingtaiModule',
    meta: {
      title: '专业平台建设、竞赛',
      icon: 'example'
    },
    children: [
      {
        path: 'zhuanyejs',
        component: () => import('@/views/pingtaiModule/zhuanyejs/index'), // Parent router-view
        name: 'zhuanyejs',
        meta: { title: '专业建设', icon: 'clipboard' },
        children: [
          {
            path:'zhuanyejsList',
            name:'zhuanyejsList',
            component: () => import('@/views/pingtaiModule/zhuanyejs/zhuanyejsList'),
            meta: {title: '数据单',icon:'list'}
          },
          {
            path:'zhuanyejsAudit',
            name:'zhuanyejsAudit',
            component: () => import('@/views/pingtaiModule/zhuanyejs/zhuanyejsAudit'),
            meta: {title: '审核单',icon:'list'}
          }
        ]
      },
     /* {
        path: 'pingtaijs',
        name: 'pingtaijs',
        component: () => import('@/views/pingtaiModule/pingtaijs/index'),
        meta: { title: '平台建设', icon: 'nested' },
        children: [
          {
            path:'pingtaijsList',
            name:'pingtaijsList',
            component: () => import('@/views/pingtaiModule/pingtaijs/pingtaijsList'),
            meta: {title: '平台建设List',icon:'list'}
          },
          {
            path:'pingtaijsAudit',
            name:'pingtaijsAudit',
            component: () => import('@/views/pingtaiModule/pingtaijs/pingtaijsAudit'),
            meta: {title: '平台建设审核单',icon:'list'}
          }
        ]
      },*/
      {
        path: 'jingsai',
        name: 'jingsai',
        component: () => import('@/views/pingtaiModule/jingsai'),
        meta: { title: '竞赛', icon: 'component' },
        children: [
          {
            path:'jingsaiList',
            name:'jingsaiList',
            component: () => import('@/views/pingtaiModule/jingsai/jingsaiList'),
            meta: {title: '数据单',icon:'list'}
          },
          {
            path:'jingsaiAudit',
            name:'jingsaiAudit',
            component: () => import('@/views/pingtaiModule/jingsai/jingsaiAudit'),
            meta: {title: '审核单',icon:'list'}
          }
        ]
      },
      {
        path:'dataStatistics',
        name:'dataStatistics',
        component:() => import('@/views/pingtaiModule/dataStatistic'),
        meta:{title:'数据统计',icon:'chart'}
      },
      {
        path:'xyrAudit',
        name:'xyrAudit',
        component:() => import('@/views/pingtaiModule/pingtaiSumAudit'),
        meta:{title:'整体审核单',icon:'form'}
      }
    ]
  },















  //学生工作

  {
    path: '/xueshengModule',
    component: Layout,
    redirect: '/xueshengModule/zhuanxiang/zhuanxiangList',
    name: 'xueshengModule',
    meta: {
      title: '学生工作',
      icon: 'example'
    },
    children: [
      {
        path: 'zhuanxiang',
        component: () => import('@/views/xueshengModule/zhuanxiang/index'), // Parent router-view
        name: 'zhuanxiang',
        meta: { title: '专项工作', icon: 'clipboard' },
        children: [
          {
            path:'zhuanxiangList',
            name:'zhuanxiangList',
            component: () => import('@/views/xueshengModule/zhuanxiang/zhuanxiangList'),
            meta: {title: '数据单',icon:'list'}
          },
          {
            path:'zhuanxiangAudit',
            name:'zhuanxiangAudit',
            component: () => import('@/views/xueshengModule/zhuanxiang/zhuanxiangAudit'),
            meta: {title: '审核单',icon:'list'}
          }
        ]
      },
      {
        path: 'huojiang',
        name: 'huojiang',
        component: () => import('@/views/xueshengModule/huojiang/index'),
        meta: { title: '个人或集体获奖', icon: 'nested' },
        children: [
          {
            path:'huojiangList',
            name:'huojiangList',
            component: () => import('@/views/xueshengModule/huojiang/huojiangList'),
            meta: {title: '数据单',icon:'list'}
          },
          {
            path:'huojiangAudit',
            name:'huojiangAudit',
            component: () => import('@/views/xueshengModule/huojiang/huojiangAudit'),
            meta: {title: '审核单',icon:'list'}
          }
        ]
      },
      {
        path: 'biaozhang',
        name: 'biaozhang',
        component: () => import('@/views/xueshengModule/biaozhang'),
        meta: { title: '荣誉称号或先进表彰', icon: 'component' },
        children: [
          {
            path:'biaozhangList',
            name:'biaozhangList',
            component: () => import('@/views/xueshengModule/biaozhang/biaozhangList'),
            meta: {title: '数据单',icon:'list'}
          },
          {
            path:'biaozhangAudit',
            name:'biaozhangAudit',
            component: () => import('@/views/xueshengModule/biaozhang/biaozhangAudit'),
            meta: {title: '审核单',icon:'list'}
          }
        ]
      },
      {
        path: 'chuangxin',
        name: 'chuangxin',
        component: () => import('@/views/xueshengModule/chuangxin'),
        meta: { title: '工作创新', icon: 'component' },
        children: [
          {
            path:'chuangxinList',
            name:'chuangxinList',
            component: () => import('@/views/xueshengModule/chuangxin/chuangxinList'),
            meta: {title: '数据单',icon:'list'}
          },
          {
            path:'chuangxinAudit',
            name:'chuangxinAudit',
            component: () => import('@/views/xueshengModule/chuangxin/chuangxinAudit'),
            meta: {title: '审核单',icon:'list'}
          }
        ]
      },
      {
        path:'dataStatistics',
        name:'dataStatistics',
        component:() => import('@/views/xueshengModule/dataStatistic'),
        meta:{title:'数据统计',icon:'chart'}
      },
      {
        path:'xueshengAudit',
        name:'xueshengAudit',
        component:() => import('@/views/xueshengModule/xueshengSumAudit'),
        meta:{title:'整体审核单',icon:'form'}
      }
    ]
  },












  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  },


  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },
  {
    path: '/generalAudit',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'generalAudit',
        component: () => import('@/views/generalAudit/index'),
        meta: { title: '终极审核单', icon: 'form' }
      }
    ]
  },
  {
    path: '/setting',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'systemSetting',
        component: () => import('@/views/systemSetting/index'),
        meta: { title: '系统设置中心', icon: 'guide' }
      }
    ]
  },
  {
    path: '/personManager',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'personManager',
        component: () => import('@/views/personManager/index'),
        meta: { title: '人员信息管理', icon: 'user' }
      }
    ]
  },


  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
