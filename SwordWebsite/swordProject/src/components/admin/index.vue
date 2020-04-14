<template>
  <div class="admin">
    <div class="admin-header">
      <Header/>
    </div>
    <div class="admin-content">
      <transition name="el-fade-in-linear" mode="out-in">
      <router-view/>
      </transition>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/admin/common/header';
    export default {
        name: "Admin",
        components:{
          Header,
        },
        mounted() {
          document.querySelector('.admin-content').style.height = document.documentElement.clientHeight - 68 + 'px';
        }
    }
</script>

<style scoped lang="less">
  .admin{
    display: flex;
    flex-direction: column;
    .admin-header{
      height: 68px;
    }
    .admin-content{
      background: #eeeeee;
    }
  }

</style>
