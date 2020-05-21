<template>
  <div>
    <div class="shopping-bar">
      <van-nav-bar title="购物车" left-text="返回" left-arrow     @click-left="onClickLeft"/>
    </div>
  <div class="cart-title">
    <van-button size="small" type="danger" @click="clearCart">清空购物车</van-button>
  </div>
    <div class="cart-list" v-for="(item,i) in cartInfo" :key="i">
      <div class="cart-goods">
        <div class="cart-img">
          <img :src="item.image" alt="购物车商品" width="100%">
        </div>
        <div class="cart-text">
          <div class="cart-name">{{item.name}}</div>
          <div class="cart-control">
            <van-stepper v-model="item.count"/>
          </div>
        </div>
        <div class="cart-price">
          <div class="cart-single">
            ¥{{item.price | moneyFilter}}
          </div>
          <div class="cart-count">
            X{{item.count}}
          </div>
          <div class="cart-total">
            ¥{{item.price*item.count | moneyFilter}}
          </div>
        </div>
      </div>
    </div>
    <div class="total-price">
      <div class="total-money">
        商品总价：¥{{Allmoney|moneyFilter}}
      </div>
      <div class="total-buy">
        <van-button type="danger" size="small">去付款</van-button>
      </div>
    </div>
  </div>
</template>

<script>
  import {moneyFilter} from "../../filter/money";
  export default {
        name: "Cart",
        data(){
          return {
           cartInfo:[],
            isEmpty:false,
          }
        },
        methods:{
          onClickLeft(){
            this.$router.go(-1);
          },
          getCartInfo(){
            if (localStorage.cartInfo){
              this.cartInfo=JSON.parse(localStorage.cartInfo);
            }
            this.isEmpty=this.cartInfo.length>0?true:false;
          },
          clearCart(){
            localStorage.removeItem('cartInfo');
            this.cartInfo=[];
          }
        },
        created() {
          this.getCartInfo();
        },
    computed:{
      Allmoney(){
        let money=0;
        this.cartInfo.forEach((item,index)=>{
          money+=item.price*item.count;
        })
        localStorage.cartInfo=JSON.stringify(this.cartInfo);
        return money;
      }
    },
    filters:{
          moneyFilter(money){
            return moneyFilter(money);
          }
    }
    }
</script>

<style scoped>
.cart-title{
  height: 2rem;
  line-height: 2rem;
  background-color: #ffffff;
  border-bottom: 1px #E4E7ED solid;
  padding: 5px;
  text-align: right;
}
  .cart-goods{
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding: .5rem;
    font-size: .85rem;
    border-bottom: 1px solid #E4E7ED;
    background: #ffffff;
  }
  .cart-img{
    flex: 6;
  }
  .cart-text{
    flex: 14;
    padding-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .cart-control{
    padding-top: 10px;
  }
  .cart-price{
    flex: 4;
    text-align: right;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .cart-total{
    color: #e5017d;
  }
  .total-price{
    height: 2rem;
    line-height: 2rem;
    background-color: #ffffff;
    border-top: 1px #E4E7ED solid;
    display: flex;
    flex-direction: row;
    position: fixed;
    bottom: 3.125rem;
    width: 100%;
    justify-content: space-between;
    padding: .3rem;
  }
  .total-buy{
    margin-right: .5rem;
  }
</style>
