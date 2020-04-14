<template>
  <div id="main">
    <div id="header">
      <div class="head common">
        <div class="nav">
          <img :src="require('@/public/images/LOGO.png')" width="200" height="60" style="margin-left: 60px;">
          <div class="link">
            <div><router-link to="/home">首页</router-link></div>
            <div><router-link to="/subitem">作品</router-link></div>
            <div><router-link to="/beat">约拍</router-link></div>
            <div><router-link to="/order">订单</router-link></div>
            <div><router-link to="/message">资讯</router-link></div>
          </div>
          <div class="right-bar">
            <input type="text" placeholder="请输入作品名称或用户名称" style="margin-right: 10px;" class="hidden-input">
            <i class="el-icon-search" style="color: #a4a4a4;font-size: 20px; margin-right: 20px;cursor: pointer;" @click="showInput"/>
            <span class="active" @click="toPublish">发布</span>
            <!--<span>登录</span>-->
            <span class="user-info">
                <span class="userName" @click="showPersonal">
                  {{userName}}
                </span>
                <span class="login-out">退出</span>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div id="body">
      <router-view/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Main',
  data () {
    return {
      userName: 'undefined'
    }
  },
  methods: {
    showInput () {
      const inputEl = document.querySelector('input')
      if (inputEl.value) {
        return alert('发请求查询!')
      }
      if (inputEl.classList.contains('hidden-input')) {
        inputEl.classList.remove('hidden-input')
        inputEl.classList.add('show-input')
      } else {
        inputEl.classList.remove('show-input')
        inputEl.classList.add('hidden-input')
      }
    },
    toPublish () {
      this.$router.push({ path: '/subitem/publish' })
    },
    showPersonal () {
      this.$router.push({ path: '/personal' })
    }
  },
  mounted () {
    document.querySelector('input').addEventListener('transitionend', () => {
      document.querySelector('input').value = ''
    })
  }
}
</script>

<style scoped lang="less">
 #header{
   background: rgba(0,0,0,.8);
   height: 60px;
   .user-info{
     font-size: 12px;
     position: relative;
     display: flex;
     flex-direction: row;
     img{
       border-radius: 15px;
     }
     span{
       font-weight: normal !important;
     }
     .userName{
       color: #ffd217 !important;
     }
     .login-out{
       position: absolute;
       top: 0;
       right: -80px;
     }
   }
   input{
     width: 0px;
     height: 30px;
     opacity: 0;
     line-height: 30px;
     vertical-align: middle;
     margin-left: 10px;
     border-radius: 16px;
     background: #696969;
     color: #fff;
     padding-left: 15px;
     padding-top: 2px;
     outline: none;
     border: none;
     transition: .6s ease-in-out;
   }
   ::-webkit-input-placeholder{
     color: #a4a4a4;
   }
   .show-input{
     width: 180px;
     opacity: 1;
   }
   .hidden-input{
     width: 0;
     opacity: 0;
   }
   .head{
     display: flex;
     flex-direction: row;
     .nav{
       flex: 1;
       display: flex;
       flex-direction: row;
       height: 60px;
       .link{
         display: flex;
         flex-direction: row;
         justify-content: center;
         align-items: center;
         height: 60px;
         width: 100%;
         div{
           margin-left: 60px;
           height: 100%;
         }
       }
       a{
         text-decoration: none;
         color: white;
         font-size: 15px;
         padding: 0 10px;
         height: 100%;
         display: inline-block;
         line-height: 60px;
         position: relative;
         &:after{
           content: '';
           display: block;
           position: absolute;
           width: 0;
           height: 2px;
           left: 40%;
           bottom: 0;
           background: white;
           opacity: 0;
           transition: .3s all;
         }
         &:hover:after{
           left: 0;
           width: 100%;
           opacity: 1;
         }
       }
       .router-link-active{
         &:after{
           content: '';
           display: block;
           position: absolute;
           width: 100%;
           height: 2px;
           left: 0;
           bottom: 0;
           background: white;
           opacity: 1;
         }
       }
       .right-bar{
         font-size: 15px;
         display: flex;
         flex-direction: row;
         align-items: center;
         margin-right: 60px;
         .active{
           background: #ffd217;
           border-radius: 4px;
         }
         span{
           line-height: 32px;
           display: inline-block;
           color: #a4a4a4;
           font-weight: bolder;
           width: 80px;
           height: 32px;
           margin-right: 20px;
           cursor: pointer;
         }
       }
     }
   }
 }
</style>
