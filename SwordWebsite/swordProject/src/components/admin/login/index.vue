<template>
  <div class="login">
    <div class="login-form">
      <div class="login-form-title">
        <h1>剑与远征后台管理系统</h1>
      </div>
      <div class="login-form-content">
        <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="账号" prop="username">
            <img :src="require('@/assets/user.png')" alt="用户名">
            <el-input v-model="ruleForm.username" type="text">
            </el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <img :src="require('@/assets/password.png')" alt="密码">
            <el-input v-model="ruleForm.password" type="password">
            </el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="validateWord" class="valiateWord">
            <img :src="require('@/assets/valiate.png')" alt="验证码" />
            <el-input v-model="ruleForm.validateWord" type="text" class="valiateInput">
            </el-input>
            <div class="valiate-area" id="validate" @click="getValiateImg">
            </div>
          </el-form-item>
          <el-form-item class="button-item">
            <el-button type="primary" round class="login-button" @click="toLogin" :loading="loading">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  import { Form, Input, FormItem} from 'element-ui';
  import Vue from 'vue';
  import {reqLogin, getUserInfo } from "@/api";
  import memoryUntil from "@/untils/memoryUntil";
  import storeUntil from "@/untils/storeUntil";
  Vue.use(Form).use(Input).use(FormItem);
  memoryUntil.getCode(window, document);
  export default {
    name: "Login",
    data(){
      return {
        loading: false,
        validateCode:'',
        ruleForm:{
          username:'',
          password:'',
          validateWord:'',
        },
        rules:{
          username:[
            { required: true, message: '请输入账号！', trigger: 'blur' },
            { min: 3,message: '账号长度不能小于3个字符', trigger: 'blur' },
            /*{pattern:/^[a-zA-Z0-9_]+$/,message: '用户名必须是英文丶数字或下划线组成',trigger: 'blur'}*/
          ],
          password:[
            { required: true, message: '请输入密码！', trigger: 'blur' },
            { min: 3, max: 12, message: '密码长度在 3 到 12 个字符', trigger: 'blur' }
          ],
          validateWord:[
            {required:true,message:'请输入验证码！',trigger:'blur'}
          ]
        }
      }
    },
    created() {
      if (memoryUntil.token){
        getUserInfo('login').then( res => {
          const { data } = res;
          const { code } = data;
          if (code && code === 8){
            memoryUntil.token = null;
            storeUntil.delToken();
          } else {
            this.$router.push({name: 'Admin'});
          }
        });
      }
    },
    mounted(){
      this.getValiateImg();
      document.querySelector('.login').style.height = document.documentElement.clientHeight + 'px';
    },
    methods:{
      toLogin(){
        this.loading = true;
        this.$refs['ruleForm'].validate((boolean)=>{
          if (boolean==true){
            const {username,password,validateWord}=this.ruleForm;
            const result = this.validateCode.validate(validateWord);
            if (!result){
              this.loading = false;
              return this.$message.error('验证码错误！');
            }
             reqLogin({
               user: username,
               pass: password,
             }).then( res => {
               console.log(res);
               const { jieguo, token, code}=res.data;
               if (res.status === 200){
                 if (code === 0){
                   this.loading = false;
                   this.$message.success(jieguo);
                   memoryUntil.token = token;
                   storeUntil.setToken(token);
                   this.$router.push({name:'Home'});
                 } else {
                   this.loading = false;
                   this.$message.warning(jieguo);
                   this.getValiateImg();
                 }
               }else {
                 this.loading = false;
                 this.$message.error("登录出错！");
                 this.getValiateImg();
               }
             });
          }else {
            this.loading = false;
            this.$message.error('请您输入正确的信息！')
          }
        })
      },
      getValiateImg(){
        const verifyCode = new GVerify("validate");
        this.validateCode = verifyCode;
      }
    },
  }
</script>

<style scoped lang="less">

</style>
<style lang="less">
  .login{
    width: 100%;
    background: url("../../../assets/bg.png") center no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
      position: absolute;
      z-index: 99;
      top: 50%;
      left:8px;
      transform: translateY(-50%);
    }
    .login-form{
      width: 788px;
      height: 528px;
      display: flex;
      flex-direction: column;
      align-items: center;
      background: url("../../../assets/form.png") center no-repeat;
      .login-form-title{
        text-align: center;
        margin-top: 75px;
      }
      .login-form-content{
        width: 40%;
        height: 40%;
        margin-top: 40px;
        .el-form-item__content{
          margin-left: 50px !important;
        }
        .el-input__inner{
          padding: 0 27px;
        }
        .el-form-item__label{
          text-align: right;
          width: auto !important;
        }
        .valiateWord{
          margin-left: -14px;
          .valiateInput{
            width: 48%;
            margin-right: 10px;
          }
        }
        .valiateWord .el-form-item__error{
          margin-left: 14px;
        }
        .valiateWord img{
          left: 23px;
        }
        .confirmPass label{
          margin-left: -28px;
        }
        a{
          margin-left: 20px;
        }
        a:hover{
          text-decoration: underline;
        }
        .valiateWord .valiate-area{
          width: 120px;
          height: 40px;
          float: right;
          cursor: pointer;
        }
      }
    }
    .mobile{
      position: relative;
      .el-form-item__content{
        position: absolute;
        left: 30px;
      }
      input{
        padding: 0 8px !important;
        width: 200px;
      }
    }
    .mes_code{
      position: relative;
      .el-form-item__content{
        position: absolute;
        left: 30px;
      }
      input{
        padding: 0 8px !important;
        width: 90px;
      }
      .mes_code-button{
        position: absolute;
        left: 68px;
        top: 0;
        padding: 12px 12px;
      }
    }
    .password{
      position: relative;
      .el-form-item__content{
        position: absolute;
        left: 30px;
      }
      input{
        padding: 0 8px !important;
        width: 200px;
      }
    }
    .confirmPass_code{
      position: relative;
      .el-form-item__content{
        position: absolute;
        left: 30px;
      }
      input{
        padding: 0 8px !important;
        width: 200px;
      }
    }
    .login-button{
      text-align: center;
      width: 150px;
      height: 35px;
      font-size: 14px;
      line-height: 2px;
      margin-top: 30px;
    }
    .login-form .login-form-content .button-item .el-form-item__content{
      margin-left: 0 !important;
    }
  }
</style>
