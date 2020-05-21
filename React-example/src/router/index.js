import React from 'react';

import {
    Redirect
} from 'react-router-dom';
import RouterLoadable from '@common/routerLoadable';

let AuthLayout = RouterLoadable({
    loader: () =>
        import('@components/layout/layout'),
});
const routes = [{
    path: '/auth',
    component: AuthLayout,
    routes: [/*{
        path: '/auth/active/list',
        component: ActiveList,
        exact: true
    }, {
        path: '/auth/active/add',
        component: ActiveAdd,
        exact: true
    }, {
        path: '/auth/active/edit/:id',
        component: ActiveAdd,
        exact: true
    }, {
        path: '/auth/active/view/:id',
        component: ActiveView,
        exact: true
    }, {
        path: '/auth/approve/list',
        component: approveList,
        exact: true
    }, {
        path: '/auth/home',
        component: Home,
        exact: true,
    }, {
        path: '/auth/help',
        component: Help,
        exact: true
    }, {
        path: '/auth/staff/list',
        component: StaffList,
        exact: true
    }, {
        path: '/auth/staff/addOrEdit',
        component: StaffAdd,
        exact: true
    }, {
        path: '/auth/staff/password/change',
        component: StaffChange,
        exact: true
    }, {
        path: '/auth/tag/list',
        component: Tag,
        exact: true
    }, {
        path: '/auth/tag/detail/:id',
        component: TagDetail,
        exact: true
    }, {
        path: '/auth/tag/publicDetail/:id',
        component: PublicDetail,
        exact: true
    }, {
        path: '/auth/tag/addScreate',
        component: AddScreate,
        exact: true
    }, {
        path: '/auth/tag/editTag/:id',
        component: EditTag,
        exact: true
    },*/ {
        component: () => <Redirect to='/error' />
    }]
}, /*{
    path: '/',
    exact: true,
    component: (props) => <Redirect to='/login' />
}, {
    path: '/login',
    component: LoginLayout,
    exact: true
}, {
    path: '/error',
    exact: true,
    component: ErrorComponent
},*/ {
    component: (props) => <Redirect to='/error' />
}];

export default routes;