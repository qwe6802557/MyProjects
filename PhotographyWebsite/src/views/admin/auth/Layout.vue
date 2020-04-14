<template>
  <div id="layout">
    <el-container class="layout_box">
      <el-header>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item><span style="padding-left: 4px">摄影作品展示及售卖平台</span></el-menu-item>
          <el-menu-item class="fr"><a @click="logout">退出</a></el-menu-item>
        </el-menu>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            :default-active="$route.path"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#409EFF"
            >
            <el-menu-item index="/admin/auth/home">
              <router-link tag="p" to="/admin/auth/home">
              <i class="el-icon-view"></i>
                首页
              </router-link>
            </el-menu-item>
<!--            一级菜单-->
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-user"></i>
                <span>用户管理</span>
              </template>
              <!--                二级菜单-->
              <el-menu-item index="/admin/auth/userList"><router-link tag="p" to="/admin/auth/userList">用户列表</router-link></el-menu-item>
              <el-menu-item index="/admin/auth/UserComments"><router-link tag="p" to="/admin/auth/UserComments">用户评论</router-link></el-menu-item>
              <el-menu-item index="/admin/auth/userScore"><router-link tag="p" to="/admin/auth/userScore">用户评分</router-link></el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-camera"></i>
                <span>作品管理</span>
              </template>
              <!--                二级菜单-->
              <el-menu-item index="/admin/auth/worksType"><router-link tag="p" to="/admin/auth/worksType">作品分类</router-link></el-menu-item>
              <el-menu-item index="/admin/auth/worksList"><router-link tag="p" to="/admin/auth/worksList">作品列表</router-link></el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-tickets"></i>
                <span>订单管理</span>
              </template>
              <!--                二级菜单-->
              <el-menu-item index="/admin/auth/ordersList"><router-link tag="p" to="/admin/auth/ordersList">作品订单</router-link></el-menu-item>
              <el-menu-item index="/admin/auth/beatList"><router-link tag="p" to="/admin/auth/beatList">约拍订单</router-link></el-menu-item>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-monitor"></i>
                <span>内容管理</span>
              </template>
              <!--                二级菜单-->
              <el-menu-item index="/admin/auth/skillsList"><router-link tag="p" to="/admin/auth/skillsList">摄影资讯</router-link></el-menu-item>
              <el-menu-item index="/admin/auth/messagesList"><router-link tag="p" to="/admin/auth/messagesList">最新动态</router-link></el-menu-item>
              <el-menu-item index="/admin/auth/subitemList"><router-link tag="p" to="/admin/auth/subitemList">活动管理</router-link></el-menu-item>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-setting"></i>
                <span>权限管理</span>
              </template>
              <!--                二级菜单-->
              <el-menu-item index="/admin/auth/adminsList"><router-link tag="p" to="/admin/auth/adminsList">管理员列表</router-link></el-menu-item>
              <el-menu-item index="/admin/auth/authorityList"><router-link tag="p" to="/admin/auth/authorityList">权限列表</router-link></el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Layout',
  data () {
    return {
      activeIndex: '1-1',
      defaultOpeneds: ''
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    logout () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  },
  mounted () {

  }
}
</script>

<style scoped>
  .el-menu{
    border-right: none;
    border-bottom: none;
  }
  .layout_box {
    position: absolute;
    width: 100%;
    top: 0px ;
    left: 0 ;
    bottom: 0;
  }
  .el-header {
    background-color: #545c64;
    padding: 0;
  }
  .fr {
    float: right !important;
  }
  .el-aside{
    background-color: #545c64 ;
  }
  .el-main {
    background-color: #f7f8fa;
    color: #101010;
  }
  .el-menu-item.is-active {
    background-color: #f7f8fa !important;
  }

</style>
