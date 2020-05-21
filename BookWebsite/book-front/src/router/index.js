import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
export default new Router({
    routes: [
       {
        path: '/',
        component: () => import('../components/index/index'),
        children:[
            {
				path: '/',
				component: () => import('../components/announcement/announcement.vue')
			},
			{
				path: '/personal',
				component: () => import('../components/personal/personal'),
				children:[
					{
						path: '/personalBook',
						component: () => import('../components/personalBook/personalBook.vue')
					}
				]
			},
			{
				path: '/bothBook',
				component: () => import('../components/bothBook/bothBook')
			},
			{
				path: '/release',
				component: () => import('../components/release/release')
			},
			{
				path: '/forum',
				component: () => import('../components/forum/forum')
			},
			{
				path: '/message',
				component: () => import('../components/message/message')
			},
			{
				path: '/user',
				component: () => import('../components/user/user')
			},
			{
				path: '/announcementAdmin',
				component: () => import('../components/announcementAdmin/announcementAdmin.vue')
			}
        ]
       },
       {
        path: '/register',
        component: () => import('../components/register/register')
       },
       {
        path: '/login',
        component: () => import('../components/login/login')
       }
    ]
});
