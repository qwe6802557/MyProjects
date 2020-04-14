<template>
  <div id="login" class="login">
    <div class="login_box_top"></div>
    <div class="login_box_mid">
      <div class="login_box_round"></div>
      <el-form class="login_form"
               ref="loginRef"
               :model="loginForm"
               :rules="loginRules">
<!--        用户 密码-->
        <el-form-item prop="username">
          <el-input placeholder="请输入手机号"
                    prefix-icon="el-icon-user-solid"
                    v-model="loginForm.username"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input placeholder="请输入密码"
                    prefix-icon="el-icon-lock"
                    type="password"
                    show-password
                    v-model="loginForm.password"
          ></el-input>
        </el-form-item>
<!--        按钮-->
        <el-form-item class="btns">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="primary" plain="" @click="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      //  登录表单的数据绑定对象
      loginForm: {
        username: '18748996060',
        password: 'test123'
      },
      // 登录表单的验证规则对象
      loginRules: {
        username: [
          { required: true, message: '请输入您注册时的手机号', trigger: 'blur' },
          { min: 10, max: 12, message: '长度为 11 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    // 点击重置按钮，重置登录表单
    resetLoginForm () {
      // console.log(this);
      this.$refs.loginRef.resetFields()
    },
    login () {
      this.$refs.loginRef.validate(async valid => {
        if (!valid) return
        const { data: res } = await this.$http.post('login', this.loginForm)
        if (res.meta.status !== 200) return console.log('登录失败')
        console.log('登录成功')
      })
    }
  }
}
</script>

<style scoped>
.login{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-70%);
  /*box-shadow: 0 0 6px 5px rgba(217, 224, 222, 0.49);*/
}
.login_box_mid{
  width: 400px;
  height: 280px;
  background: #f7f8fa;
  border-radius: 28px;
}
.login_box_round{
  width: 28px;
  height: 28px;
  background: white;
  border-radius: 56px;
  margin-left: 20px;
  position: absolute;
  top: 5%;
}
.login_box_top{
  content: "";
  display: block;
  width: 120px;
  height: 0px;
  border-width: 0px 30px 30px;
  border-style: solid solid solid;
  border-color: transparent transparent #f7f8fa;
  position: absolute;
  left: 50%;
  transform: translate(-50%,-70%);
}

.login_form{
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
.btns{
  display: flex;
  justify-content: end;
}
</style>
