<template>
    <div>
      <div class="nav-div">
        <van-nav-bar
        title="商品详情"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        />
      </div>
      <div class="goods-info">
      <div class="goods-image">
        <img :src="goodsInfo.IMAGE1" width="100%" alt="">
      </div>
      <div class="goods-message">
        <div class="goods-name">{{goodsInfo.NAME}}</div>
        <div class="goods-price">价格：¥{{goodsInfo.PRESENT_PRICE | moneyFilter}}元</div>
      </div>
      </div>
      <div class="goods-tabs">
        <van-tabs swipeable sticky>
          <van-tab title="商品详情">
            <div class="goods-detail" v-html="goodsInfo.DETAIL">
            </div>
          </van-tab>
          <van-tab title="评论">评论</van-tab>
        </van-tabs>
      </div>
      <div class="goods-bottom">
        <div class="goods-button">
        <van-button size="large" type="primary" @click="addToCart">加入购物车</van-button>
        </div>
        <div class="goods-button">
        <van-button size="large" type="danger">立即购买</van-button>
        </div>
      </div>
    </div>
</template>

<script>
   import axios from 'axios'
   import URL from '@/serviceAPI.config.js'
   import {Toast} from 'vant'
   import {moneyFilter} from '@/filter/money.js'
    export default {
        name: "Goods",
        data(){
          return {
           goodsId:'',
            goodsInfo:''
          }
        },
        methods:{
          getInfo(){
            axios({
              url:URL.getGoodsInfo,
              method:'post',
              data:{
                goodsId: this.goodsId
              }
            }).then(res=>{
              if (res.data.code===200 && res.data.message){
                this.goodsInfo=res.data.message;
              }else{
              Toast('服务器错误，获取数据失败！');
              }
            }).catch(err=>{
              console.log(err);
            })
          },
          onClickLeft(){
            this.$router.go(-1);
          },
          addToCart(){
            let cartInfo=localStorage.cartInfo?JSON.parse(localStorage.cartInfo):[];
            let isHaveGoods=cartInfo.find(cart=>cart.goodsId===this.goodsId);
            if (!isHaveGoods){
              let newGoodsInfo={
                goodsId:this.goodsInfo.ID,
                name:this.goodsInfo.NAME,
                price:this.goodsInfo.PRESENT_PRICE,
                image:this.goodsInfo.IMAGE1,
                count:1
              }
              cartInfo.push(newGoodsInfo);
              localStorage.cartInfo=JSON.stringify(cartInfo);
              Toast.success('加入购物车成功！');
            }else {
              Toast.success('此商品已存在！');
            }
            this.$router.push({name:'Cart'})

          }
        },
        created() {
          this.goodsId=this.$route.query.goodsId?this.$route.query.goodsId:this.$route.params.goodsId;
          this.getInfo();
        },
       filters:{
          moneyFilter(money){
            return moneyFilter(money);
          }
       }
    }
</script>

<style scoped>
  .goods-message{
    background: #ffffff;
    width: 100%;
    box-sizing: border-box;
    padding: .5rem .3rem;
  }
  .goods-detail{
    font-size: 0;
  }
  .goods-bottom{
    display: flex;
    flex-direction: row;
    position: fixed;
    left: 0;
    bottom: 3.125rem;
    width: 100%;
    z-index: 999;
  }
  .goods-button{
    flex: 1;
    padding: .3rem;
    background: #ffffff;
  }
</style>
