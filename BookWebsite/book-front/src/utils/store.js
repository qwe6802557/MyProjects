import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        userInfo:{
			username:'游客',
		},
		logo:'',
		serverUrl:'http://3n107551t6.wicp.vip'
    }
})