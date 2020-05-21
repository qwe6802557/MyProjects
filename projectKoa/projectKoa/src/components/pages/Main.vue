<template>
  <div>
    <div class="main-content">
      <keep-alive>
      <router-view></router-view>
      </keep-alive>
    </div>
    <div class="main-bottom">
      <van-tabbar v-model="active" @change="changeTabbar(active)">
        <van-tabbar-item icon="shop">首页</van-tabbar-item>
        <van-tabbar-item icon="records">商品列表</van-tabbar-item>
        <van-tabbar-item icon="cart">购物车</van-tabbar-item>
        <van-tabbar-item icon="contact">个人中心</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Main",
      data(){
          return {
            active:0,
            nowPath:''
          }
      },
      created(){
          this.changeBar();
      },
      updated(){this.changeBar();
      },
      methods:{
          changeBar() {
            this.nowPath = this.$route.path;
            switch (this.nowPath) {
              case "/":
                this.active = 0;
                break;
              case "/goodsList":
                this.active = 1;
                break;
              case "/Cart":
                this.active = 2;
                break;
              case "/register":
                this.active = 3;
                break;
            }
          },
          changeTabbar(active){
            switch (active) {
              case 0:
                this.$router.push({name:'ShoppingMall'});
                break;
              case 1:
                this.$router.push({name:'GoodsList'});
                break;
              case 2:
                this.$router.push({name:'Cart'});
                break;
              case 3:
                this.$router.push({name:'Register'});
                break;
            }
          }
      }
    }
</script>

<style scoped>

</style>
