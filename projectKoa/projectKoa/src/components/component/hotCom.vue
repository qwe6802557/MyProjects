<template>
    <div class="goods-info" @click="goGoodsPage">
      <div class="goods-image">
        <img v-lazy="item.image" alt="" width="90%">
      </div>
      <div class="goods-name">{{item.name}}</div>
      <div class="goods-price">¥{{item.price | moneyFilter}}</div>
    </div>
</template>

<script>
    import {moneyFilter} from "../../filter/money";

    export default {
        name: "hotCom",
        props:['item'],
        filters:{
          moneyFilter(money){
            return moneyFilter(money)
          }
       },
      methods:{
          goGoodsPage(){
            this.$router.push({name:'Goods',query:{goodsId:this.item.goodsId}})
          }
      }
    }
</script>

<style scoped>
  .goods-name{
    padding: 0 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
  }
</style>
