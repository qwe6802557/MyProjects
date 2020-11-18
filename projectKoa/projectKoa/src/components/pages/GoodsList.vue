<template>
    <div>
      <div class="nav-bar">
        <van-nav-bar title="类别列表" />
      </div>
      <div class="title-button">
        <van-row>
          <van-col span="6">
            <div class="left-bar">
              <ul>
                <li v-for="(item,i) in catoryList" :key="i" @click="catoryClick(i,item.ID)" :class="{catoryClick:index===i}">
                  {{item.MALL_CATEGORY_NAME}}
                </li>
              </ul>
            </div>
          </van-col>
          <van-col span="18">
            <div class="top-bar">
                <van-tabs v-model="active" @click="ClickgetId">
                  <van-tab v-for="(item,i) in catorySubList" :key="i"  :title="item.MALL_SUB_NAME" @click="ClickgetId">
                  </van-tab>
                </van-tabs>
            </div>
            <div id="list-bar">
              <van-pull-refresh v-model="isRefresh" @refresh="onRefresh">
              <van-list v-model="loading" :finished="finished" @load="onLoad" >
                <div class="list-item" v-for="(item,i) in goodList" :key="i" @click="goGoodsInfo(item.ID)">
                  <div class="item-img">
                    <img :src="item.IMAGE1" alt="商品" :onerror="error_img" width="100%">
                  </div>
                  <div class="list-item-text">
                    <div>{{item.NAME}}</div>
                    <div>¥{{item.ORI_PRICE | moneyFilter}}元</div>
                  </div>
                </div>
              </van-list>
              </van-pull-refresh>
            </div>
          </van-col>
        </van-row>
      </div>
    </div>
</template>

<script>
  import axios from 'axios'
  import URL from '@/serviceAPI.config.js'
  import {Toast} from 'vant'
  import {moneyFilter} from "../../filter/money";

  export default {
        name: "GoodsList",
        data(){
          return {
            catoryList:'',
            index:0,
            catorySubList:'',
            active:0,
            loading:false,
            finished:true,
            isRefresh:false,
            page:1,
            goodList:[],
            categoryId: '',
            error_img:'this.src="'+require('@/assets/errorimg.png')+'"'
          }
        },
      created(){
          this.getCatoryList();
      },
      mounted(){
          let Height=document.documentElement.clientHeight;
          document.getElementsByClassName('left-bar')[0].style.height=Height-46-50+'px';
        document.getElementById('list-bar').style.height=Height-90-50+'px';

      },
      methods:{
          getCatoryList(){
            axios({
              url:URL.getCatoryList,
              method:'get'
            }).then(res=>{
              if (res.data.code===200 && res.data.message) {
                this.catoryList=res.data.message;
                this.getCatorySubList(this.catoryList[0].ID);
              }else {
                Toast('服务器错误，获取数据失败！')
              }
            }).catch(err=>{
               Toast(err);
            })
          },
          catoryClick(index,categoryId){
            this.index=index;
            this.page=1;
            this.finished=false;
            this.goodList=[];
            this.getCatorySubList(categoryId);
          },
          getCatorySubList(categoryId){
            axios({
              url:URL.getCatorySubList,
              method:'post',
              data:{
                categoryId:categoryId
              }
            }).then(res=>{
              console.log(res);
              if (res.data.code===200 && res.data.message) {
                this.catorySubList=res.data.message;
                this.active=0;
                this.categoryId=this.catorySubList[0].ID;
                this.onLoad();
              }else {
                Toast('服务器错误，获取数据失败！');
              }
            }).catch(err=>{
              console.log(err);
            })
          },
          onLoad(){
            console.log(1);
          setTimeout(()=>{
            this.categoryId=this.categoryId?this.categoryId:this.catorySubList[0].ID;

            this.getGoodsList();
          },500);
  },
          onRefresh(){
            setTimeout(()=>{
              this.isRefresh=false;

              this.goodList=[];
              this.page=1;
              this.onLoad();
              this.finished=false;
            },500)
          },
           ClickgetId(index, title){
            this.categoryId=this.catorySubList[index].ID;
            this.goodList=[];
            this.finished=false;
            this.page=1;
            this.onLoad();
        },
           getGoodsList(){
            axios({
              url: URL.getCatorySubGoods,
              method:'post',
              data:{
                catorySubId:this.categoryId,
                page:this.page
              }
            }).then(res=>{
              if (res.data.code===200 && res.data.message.length) {
                  this.page++;
                  this.goodList=this.goodList.concat(res.data.message);
              }else {
                this.finished=true;
              }
              this.loading=false;
            }).catch(err => {
              console.log(err);
            })
        },
        goGoodsInfo(id){
            this.$router.push({name:'Goods',params:{goodsId:id}});
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
  .left-bar{
    background: aliceblue;
  }
.left-bar ul li{
  line-height: 2rem;
  border-bottom: 1px solid #E4E7ED;
  padding: .2rem;
  font-size: .8rem;
  text-align: center;
}
  .catoryClick{
    background: #ffffff;
  }
  .list-item{
    border-bottom: 1px solid #f0f0f0;
    background: #ffffff;
    display: flex;
    flex-direction: row;
    font-size: .8rem;
    padding: 5px;
  }
  #list-bar{
    overflow: scroll;
  }
  .item-img{
    flex: 8;
  }
  .list-item-text{
    flex: 16;
    margin-top: 10px;
    margin-left: 10px;
  }
</style>
