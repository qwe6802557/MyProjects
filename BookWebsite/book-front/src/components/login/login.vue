<template>
    <div class="background" v-bind:style="{height:windowsHeight}">
        <div class="window">
            <div class="tittle">
                图书共享系统
            </div>
            <div class="login">
                <el-form ref="form" :model="login" label-width="150px">
                    <el-form-item label="用户名">
                        <el-input v-model="login.userName" placeholder="请输入用户名"></el-input>
                    </el-form-item>
                    <el-form-item label="密码">
                        <el-input v-model="login.password" placeholder="请输入密码" type="password"></el-input>
                    </el-form-item>
                </el-form>
            </div>
            <el-button type="success" size="medium" @click="login1" style="width: 20%;">登录</el-button>
        </div>
    </div>
</template>
<script>
import globalData from '../../utils/global_val'
import { login} from '../../api/index.js'
export default {
		data() {
			return {
                login:{
                    userName:'',
                    password:''
                }
            }
                
		},
  created: function() {
     this.getHeight()
  },
  methods: {
    getHeight(){
        this.windowsHeight=globalData.windowsHeight+'px'
        //console.log(this.windowsHeight)
    },
    login1(){
		var data={
			username:this.login.userName,
			password:this.login.password,
		}
		console.log(data)
		login(data).then(response => {
			console.log(response)
			if (response.code==0){
				this.$store.state.userInfo=response.messageBody.userInfo
				console.log(this.$store.state.userInfo)
				this.$router.push({
				    path: `/`
				})
			}else{
				this.$alert(response.message, '警告', {
				  confirmButtonText: '确定',
				})
			}
		})
	}
  }
}
</script>

<style scoped>
.background{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
	background-position: center center;
	background-image: url(../../assets/20200427224203.png);
	background-size: 100% 100%;
}
.window{
    width: 23%;
    height: 32%;
    background: #F4F6F9;
    border-radius: 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 35px;
    position: relative;
    bottom:5%;
}
.tittle{
    margin: 3% 0 0 0;
}
.login{
    width: 90%;
    margin: 10% 0 0 0;
}
.login>>>.el-input{
    width: 90%;
    font-size: 20px;
    color: #ffffff;
}
.login>>>.el-form-item__label{
    font-size: 25px;
}
</style>
