<template>
    <div class="background" v-bind:style="{height:windowsHeight}">
        <!-- 顶部栏 -->
        <div class="top">
            <span style="margin:0 5% 0 1%">
                图书共享系统
            </span>
            <el-button type="success" @click="login" v-if="xrLogin">登录</el-button>
            <el-button type="primary" @click="register" v-if="xrLogin">注册</el-button>
			 <el-button type="danger" icon="el-icon-switch-button
" circle style="position: absolute;right: 2%;" v-if="xrExit" @click="exit" ></el-button>
        </div>
        <!-- 中间内容 -->
        <div class="content">
            <div class="menu">
                <div class="icon">
					<img :src="this.$store.state.serverUrl+this.$store.state.userInfo.avatar" style="width: 100%;height: 100%;border-radius: 100px;"/>
                </div>
                <span>
                    {{this.$store.state.userInfo.username}}
                </span>
                <div style="width:100%">
                    <el-menu
                    :default-active="menuIndex"
                    @select="choose"
                   >
                    <el-menu-item index="1">
                        <i class="el-icon-menu" v-if="xr7"></i>
                        <span slot="title">公告模块</span>
                    </el-menu-item>
                    <el-menu-item index="2" v-if="xr8">
                        <i class="el-icon-document"></i>
                        <span slot="title">所有图书</span>
                    </el-menu-item>
                    <el-menu-item index="3" v-if="xr1">
                        <i class="el-icon-setting"></i>
                        <span slot="title">论坛交流</span>
                    </el-menu-item>
                    <el-menu-item index="4" v-if="xr2">
                        <i class="el-icon-setting"></i>
                        <span slot="title">图书管理</span>
                    </el-menu-item>
                    <el-menu-item index="5" v-if="xr3">
                        <i class="el-icon-setting"></i>
                        <span slot="title">共享消息</span>
                    </el-menu-item>
					<el-menu-item index="6" v-if="xr4">
					    <i class="el-icon-setting"></i>
					    <span slot="title">用户管理</span>
					</el-menu-item>
					<el-menu-item index="7" v-if="xr5">
					    <i class="el-icon-setting"></i>
					    <span slot="title">个人中心</span>
					</el-menu-item>
					<el-menu-item index="8" v-if="xr6">
					    <i class="el-icon-setting"></i>
					    <span slot="title">公告管理</span>
					</el-menu-item>
                    </el-menu>
                </div>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import globalData from '../../utils/global_val'
export default {
		data() {
			return {
				menuIndex:'1',
				windowsHeight:'',
				userName:'游客',
				xr1:false,
				xr2:false,
				xr3:false,
				xr4:false,
				xr5:false,
				xr6:false,
				xr7:true,
				xr8:true,
				xrExit:false,
				xrLogin:true
			}
		},
  created: function() {
	 this.getHeight()
	 this.authority()
  },
  methods: {
    getHeight(){
        this.windowsHeight=globalData.windowsHeight+'px'
		this.$store.state.logo=this.$store.state.userInfo.avatar
		// if($store.state.userInfo!=''){
		// 	this.userName=$store.state.userInfo.username
		// }
        //console.log(this.windowsHeight)
		if(this.$store.state.userInfo.username!='游客'){
			this.xrExit=true
			this.xrLogin=false
		}else{
			this.xrExit=false
			this.xrLogin=true
		}
    },
	authority(){
		if(this.$store.state.userInfo.username!='游客'){
			this.xr1=true
			this.xr3=true
			this.xr5=true
			if(this.$store.state.userInfo.identity=="1"){
				this.xr2=true
				this.xr4=true
				this.xr6=true
				this.xr1=false
				this.xr3=false
				this.xr5=true,
				this.xr7=true,
				this.xr8=false
			}
		}
	},
    register(){
        this.$router.push({
            path: `/register`,
        })
    },
    login(){
        this.$router.push({
            path: `/login`,
        })
    },
    choose(index){
        console.log(index)
		if(index==1){
			this.$router.push({
			    path: `/`
			})
		}else if(index==2){
			this.$router.push({
			    path: `/bothBook`
			})
		}else if(index==3){
			this.$router.push({
				path: `/forum`
			})
		}else if(index==4){
			this.$router.push({
			    path: `/release`
			})
		}else if(index==5){
			this.$router.push({
			    path: `/message`
			})
		}else if(index==6){
			this.$router.push({
			    path: `/user`
			})
		}else if(index==7){
			this.$router.push({
			    path: `/personal`
			})
		}else if(index==8){
			this.$router.push({
			    path: `/announcementAdmin`
			})
		}
	},
	exit(){
		this.$router.push({
		    path: `/`,
		})
		this.$router.go(0);
	}
  }
}
</script>

<style scoped>
.background{
    width: 100%;
}
.top{
    width: 100%;
    height: 10%;
    background: #778899;
    display: flex;
    align-items: center;
    font-size: 1.5rem;
	position: relative;
}
.content{
    display: flex;
    height: 90%;
}
.menu{
    height: 100%;
    background: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 8%;
}
.icon{
    width: 4rem;
    height: 4rem;
    background: crimson;
    border-radius: 2rem;
    margin: 5% 0 5% 0;
}
</style>
