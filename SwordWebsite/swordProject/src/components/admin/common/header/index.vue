<template>
  <div class="header">
    <h1 style="text-align: left">
      <span><img :src="require('@/assets/logo.jpg')" alt="LOGO" width="120" height="100%" style="margin-top: 20px;"></span>
    </h1>
    <div class="menu-link">
      <router-link to="/auth/home">
          <i class="el-icon-s-home"></i>首页
      </router-link>
      <router-link to="/auth/hot" class="link-click">
        <i class="el-icon-s-order"></i>套餐管理
      </router-link>
      <router-link to="/auth/other" class="link-click">
        <i class="el-icon-s-tools"></i>其他管理
      </router-link>
    </div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#fff"
      text-color="black"
      active-text-color="#ffd04b">
      <el-submenu index="2">
        <template slot="title">
          <span class="header-myself"><el-avatar :size="40" :src="circleUrl" class="avatar"></el-avatar>{{username}}</span>
        </template>
        <el-menu-item index="2-3" @click="loginOut">退出系统</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  import { Menu, MenuItem, Submenu, Avatar, MessageBox} from 'element-ui';
  import Vue from 'vue';
  import { getUserInfo } from "@/api";
  import memoryUntil from "@/untils/memoryUntil";
  import storeUntil from "@/untils/storeUntil";
  Vue.use(Menu).use(MenuItem).use(Submenu).use(Avatar);
    export default {
        name: "Header",
        data(){
          return {
            circleUrl:'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
            activeIndex: '1',
            username: '',
          }
        },
       methods:{
        loginOut(){
          MessageBox.confirm('确定要退出系统吗？', '退出提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
          }).then( res => {
            memoryUntil.token = null;
            storeUntil.delToken();
            this.$router.push({name: 'Login'});
          }).catch(err => {});
        },
        handleSelect(){

        },
      },
      created() {
        getUserInfo().then( res => {
          const { status, data } = res;
          if (status === 200){
            this.username = data.user;
          }
        })
      },
    }
</script>

<style scoped>
  .header-myself{
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .content-title{
    text-align: center;
    font-size: 12px;
    font-weight: bold;
    font-style: italic;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 5px;
  }
</style>
<style lang="less">
  .header{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-width:718px;
    height: 68px;
    width: 100%;
    position: relative;
    background: #ffffff;
    .menu-link{
      display: flex;
      flex-direction: row;
      position: absolute;
      right: 160px;
      .router-link-active{
        text-decoration: none;
        background: #54B2FE;
        color: #ffffff;
        &:hover{
          background: #54B2FE;
        }
      }
      a {
        text-decoration: none;
        display: block;
        padding: 8px 18px;
        border-radius: 16px;
        font-size: 14px;
        margin-right: 40px;
        cursor: pointer;
        background: transparent;
        color: #6b747a;
        transition: .5s background;
        &:hover{
          background: #EEF5FF;
        }
        i{
          margin-right: 10px;
        }
      }
    }
  .announce-box{
  .el-icon-s-promotion{
    font-size: 25px;
    cursor: pointer;
    transition: .5s color;
  &:hover{
     color: #54B2FE;
   }
  }
  position: absolute;
  right: 180px;
  top: 50%;
  transform: translateY(-50%);
  }
  .avatar{
    margin-right: 10px;
  }
  h1{
    line-height: 74px;
  span{
    display: inline-block;
    width: 200px;
    height: 74px;
  }
  .collapse{
    width: 20px;
    height: 20px;
    background: url("../../../../assets/col.png");
    display: inline-block;
    margin-left: 38px;
  }
  }
  .el-submenu__title{
    color: #54B2FE !important;
    border-bottom-color:#54B2FE !important;
  }
  .el-submenu__title:hover{
    background: #EDF5FF!important;
  }
  .el-menu--horizontal>.el-submenu .el-submenu__title{
    height: 74px;
    line-height: 74px;
  }
  }
  .el-menu--horizontal .el-menu .el-menu-item.is-active{
    color:#54B2FE !important;
  }
  .el-menu--horizontal .el-menu .el-menu-item:hover{
    background:#EDF5FF !important;
  }
</style>
