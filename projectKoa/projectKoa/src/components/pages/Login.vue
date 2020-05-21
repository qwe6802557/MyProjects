<template>
  <div>
    <van-nav-bar
      title="用户登录"
      left-text="返回"
      left-arrow
      @click-left="goBack"
    />
    <div class="login-panel">
      <van-field
        label="用户名"
        icon="clear"
        placeholder="请输入用户名"
        required
        v-model="userName"
        @click-icon="userName=''"
        :error-message="userErrMs"
      />
      <van-field
        label="密码"
        type="password"
        placeholder="请输入密码"
        required
        v-model="passWord"
        @click-icon="passWord=''"
        :error-message="passWordErrMs"
      />
    </div>
    <div class="login-button">
      <van-button type="primary" size="large" @click="loginAction" :loading="loading">登录</van-button>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import URL from '@/serviceAPI.config.js'
  import {Toast} from 'vant'
    export default {
        name: "Login",
        data(){
          return {
            userName:'',
            passWord:'',
            loading:'false',
            userErrMs:'',
            passWordErrMs:'',
            loading:false
          }
        },
        methods:{
          goBack(){
            this.$router.go(-1);
          },
          loginAction(){
            this.formCheck() && this.axiosLogin()
          },
          axiosLogin(){
            this.loading=true;
            axios({
              url:URL.loginUser,
              method:'post',
              data:{
                userName: this.userName,
                passWord: this.passWord
              }
            }).then(res=>{
              if (res.data.code===200){
                new Promise((resolve,reject)=>{
                  localStorage.setItem('userinfo',this.userName);
                  setTimeout(()=>{
                    resolve()
                  },500)
                }).then(()=>{
                  Toast.success(res.data.message)
                  this.$router.push('/')
                })
              }else if (res.data.code===201) {
                this.loading=false
                Toast.fail(res.data.message)
              }
            }).catch(err=>{
              this.loading=false
              Toast.fail('登录失败!')
            })
          },
          formCheck(){
            let flag=true
            if (this.userName.length<5){
              this.userErrMs='用户名不能少于5位!'
              flag=false
            }else{
              this.userErrMs=''
            }
            if (this.passWord.length<6) {
              this.passWordErrMs='密码不能少于6位!'
              flag=false
            }else {
              this.passWordErrMs=''
            }
            return flag;
          }
        },
       created() {
          if (localStorage.getItem('userinfo')) {
            Toast.success('您已登录过了!');
            this.$router.push('/');
          }
      }
    }
</script>

<style scoped>
  .login-panel{
    width: 96%;
    margin: 20px auto;
    border-radius: 5px;
  }
</style>
