import React from 'react';

import {
    Redirect
} from 'react-router-dom';
import RouterLoadable from '@common/routerLoadable';

let AuthLayout = RouterLoadable({
    loader: () =>
        import('@components/layout/layout'),
});

const Home = RouterLoadable({
    loader: () =>
        import('@src/pages/home/home'),
});

const Help = RouterLoadable({
    loader: () =>
        import('@src/pages/help/help'),
});

const Operation = RouterLoadable({
    loader: () =>
        import('@src/pages/operation/operation'),
});

const Vip = RouterLoadable({
    loader: () =>
        import('@src/pages/vip/vip'),
});

const Income = RouterLoadable({
    loader: () =>
        import('@src/pages/income/income'),
});

const Army = RouterLoadable({
    loader: () =>
        import('@src/pages/army/army'),
});

const Scholarship = RouterLoadable({
    loader: () =>
        import('@src/pages/scholarship/scholarship'),
});

const Recharge = RouterLoadable({
    loader: () =>
        import('@src/pages/recharge/recharge'),
});

const VipOther = RouterLoadable({
    loader: () =>
        import('@src/pages/vipOther/vipOther'),
});

const Personal = RouterLoadable({
    loader: () =>
        import('@src/pages/personal/personal'),
});

const Message = RouterLoadable({
    loader: () =>
        import('@src/pages/message/message'),
});

const Detail = RouterLoadable({
    loader: () =>
        import('@src/pages/message/detail'),
});

const Information = RouterLoadable({
    loader: () =>
        import('@src/pages/information/information'),
});

const InformationDetail = RouterLoadable({
    loader: () =>
        import('@src/pages/information/detail'),
});

const OperationOther = RouterLoadable({
    loader: () =>
        import('@src/pages/operation/operationOther'),
});

const Supplier = RouterLoadable({
    loader: () =>
        import('@src/pages/operation/supplier'),
});

const Order = RouterLoadable({
    loader: () =>
        import('@src/pages/order/order'),
});

const Rules = RouterLoadable({
    loader: () =>
        import('@src/pages/rules/rules'),
});

const Withdraw = RouterLoadable({
    loader: () =>
        import('@src/pages/withdraw/withdraw'),
});

const Invest = RouterLoadable({
    loader: () =>
        import('@src/pages/invest/invest'),
});

const WithdrawAction = RouterLoadable({
    loader: () =>
        import('@src/pages/withdraw/withdrawAction'),
});

const ToRest = RouterLoadable({
    loader: () =>
        import('@src/pages/income/toRest'),
});

const MyIncome = RouterLoadable({
    loader: () =>
        import('@src/pages/income/myIncome'),
});

const Market = RouterLoadable({
    loader: () =>
        import('@src/pages/market/market'),
});

const MainScholarship = RouterLoadable({
    loader: () =>
        import('@src/pages/scholarship/main'),
});

const Vouchers = RouterLoadable({
    loader: () =>
        import('@src/pages/vouchers/vouchers'),
});

const MyClass = RouterLoadable({
    loader: () =>
        import('@src/pages/class/myClass'),
});

const VipCenter = RouterLoadable({
    loader: () =>
        import('@src/pages/vip/center'),
});

const AllCategory = RouterLoadable({
    loader: () =>
        import('@src/pages/category/all'),
});

const AllCategoryOther = RouterLoadable({
    loader: () =>
        import('@src/pages/category/allOther'),
});

const PlateHope = RouterLoadable({
    loader: () =>
        import('@src/pages/plateHope/plateHope'),
});

const HelpOther = RouterLoadable({
    loader: () =>
        import('@src/pages/help/helpOther'),
});

const Cart = RouterLoadable({
    loader: () =>
        import('@src/pages/cart/cart'),
});

const Address = RouterLoadable({
    loader: () =>
        import('@src/pages/address/address'),
});

const EditAddress = RouterLoadable({
    loader: () =>
        import('@src/pages/address/editAddress'),
});

const ConfirmOrder = RouterLoadable({
    loader: () =>
        import('@src/pages/order/confirm'),
});

const Video = RouterLoadable({
   loader: () =>
      import('@src/pages/video/video')
});
const routes = [{
    path: '/auth',
    component: AuthLayout,
    routes: [{
        path: '/auth/home',
        component: Home,
        exact: true,
    }, {
        path: '/auth/help',
        component: Help,
        exact: true,
    }, {
        path: '/auth/operation',
        component: Operation,
        exact: true,
    }, {
        path: '/auth/vip',
        component: Vip,
        exact: true,
    }, {
        path: '/auth/income',
        component: Income,
        exact: true,
    }, {
        path: '/auth/army',
        component: Army,
        exact: true,
    }, {
        path: '/auth/scholarship',
        component: Scholarship,
        exact: true,
    }, {
        path: '/auth/recharge',
        component: Recharge,
        exact: true,
    }, {
        path: '/auth/vipOther',
        component: VipOther,
        exact: true,
    }, {
        path: '/auth/personal',
        component: Personal,
        exact: true,
    }, {
        path: '/auth/message',
        component: Message,
        exact: true,
    },  {
        path: '/auth/detail',
        component: Detail,
        exact: true,
    }, {
        path: '/auth/information',
        component: Information,
        exact: true,
    }, {
        path: '/auth/informationDetail',
        component: InformationDetail,
        exact: true,
    }, {
        path: '/auth/operationOther',
        component: OperationOther,
        exact: true,
    }, {
        path: '/auth/supplier',
        component: Supplier,
        exact: true,
    }, {
        path: '/auth/order',
        component: Order,
        exact: true,
    }, {
        path: '/auth/rules',
        component: Rules,
        exact: true,
    }, {
        path: '/auth/withdraw',
        component: Withdraw,
        exact: true,
    }, {
        path: '/auth/invest',
        component: Invest,
        exact: true,
    }, {
        path: '/auth/withdrawAction',
        component: WithdrawAction,
        exact: true,
    }, {
        path: '/auth/toRest',
        component: ToRest,
        exact: true,
    }, {
        path: '/auth/myIncome',
        component: MyIncome,
        exact: true,
    }, {
        path: '/auth/market',
        component: Market,
        exact: true,
    }, {
        path: '/auth/mainScholarship',
        component: MainScholarship,
        exact: true,
    }, {
        path: '/auth/vouchers',
        component: Vouchers,
        exact: true,
    }, {
        path: '/auth/myClass',
        component: MyClass,
        exact: true,
    }, {
        path: '/auth/vipCenter',
        component: VipCenter,
        exact: true,
    }, {
        path: '/auth/allCategory',
        component: AllCategory,
        exact: true,
    }, {
        path: '/auth/allCategoryOther',
        component: AllCategoryOther,
        exact: true,
    }, {
        path: '/auth/plateHope',
        component: PlateHope,
        exact: true,
    }, {
        path: '/auth/helpOther',
        component: HelpOther,
        exact: true,
    }, {
        path: '/auth/cart',
        component: Cart,
        exact: true,
    }, {
        path: '/auth/address',
        component: Address,
        exact: true,
    }, {
        path: '/auth/editAddress',
        component: EditAddress,
        exact: true,
    }, {
        path: '/auth/confirmOrder',
        component: ConfirmOrder,
        exact: true,
    }, {
        path: '/auth/video',
        component: Video,
        exact: true,
    }, {
        component: () => <Redirect to='/home' />
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
    component: (props) => <Redirect to='/auth/home' />
}];

export default routes;