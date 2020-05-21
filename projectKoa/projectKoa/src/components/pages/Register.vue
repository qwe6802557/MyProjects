<template>
    <div>
      <van-nav-bar
       title="用户注册"
       left-text="返回"
       left-arrow
       @click-left="goBack"
      />
      <div class="register-panel">
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
      <div class="register-button">
        <van-button type="primary" size="large" @click="registerAction" :loading="loading">立即注册</van-button>
      </div>
    </div>
</template>

<script>
  import axios from 'axios'
  import URL from '@/serviceAPI.config.js'
  import {Toast} from 'vant'
    export default {
        name: "Register",
        data(){
          return {
            userName:'',
            passWord:'',
            loading:false,
            userErrMs:'',
            passWordErrMs:''
          }
        },
        methods:{
          goBack(){
            this.$router.go(-1);
          },
          registerAction(){
           this.formCheck() && this.axiosRegister()
          },
          axiosRegister(){
            this.loading=true;
            axios({
              url:URL.registerUser,
              method:'post',
              data:{
                userName: this.userName,
                passWord: this.passWord
              }
            }).then(res=>{
              if (res.data.code===200){
                Toast.success(res.data.message)
                this.$router.push('/')
              }else {
                this.loading=false
                Toast.fail('注册失败!')
              }
            }).catch(err=>{
              this.loading=false
              Toast.fail('注册失败!')
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
        }
    }
</script>

<style scoped>
.registor-panel{
  width: 96%;
  margin: 20px auto;
  border-radius: 5px;
}

</style>
