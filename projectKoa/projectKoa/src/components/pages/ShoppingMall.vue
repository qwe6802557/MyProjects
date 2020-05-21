<template>
  <div class="main">
   <div class="search-bar">
     <van-row class="text-row">
       <van-col span="3">
         <img :src="locationIcon" alt="" width="70%" class="search-icon-one">
       </van-col>
       <van-col span="16">
         <input type="text" class="search-input">
       </van-col>
       <van-col span="5">
         <van-button size="mini" class="search-find">查找</van-button>
       </van-col>
     </van-row>
   </div>
    <div class="swipe-area">
      <van-swipe :autoplay="3000">
       <van-swipe-item v-for="(item,i) in bannerArray" :key="i">
         <img v-lazy="item.image" alt="" width="100%" height="200">
       </van-swipe-item>
      </van-swipe>
    </div>
    <div class="type-bar">
      <div v-for="(item,i) in category" :key="i">
        <img v-lazy="item.image" alt="" width="90%">
        <span>{{item.mallCategoryName}}</span>
      </div>
    </div>
    <div class="banner-bar">
      <img v-lazy="adBanners" alt="" width="100%">
    </div>
    <div class="recommend-area">
      <div class="recommend-title">
       商品推荐
      </div>
      <div class="recommend-body">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item,i) in recommendGoods" :key="i" class="swiper-items">
          <div class="recommend-item">
            <img :src="item.image" alt="" width="80%">
            <div class="recommend-item-name">{{item.goodsName}}</div>
            <div class="recommend-item-price">￥{{item.price | moneyFilter}}(￥{{item.mallPrice | moneyFilter}})</div>
          </div>
        </swiper-slide>
      </swiper>
      </div>
    <!--  <swiperDefault></swiperDefault>
      <swiperDefault2></swiperDefault2>
      <swiperDefault3></swiperDefault3>
      <swiperText></swiperText>-->
      <downsCom :floorDatas="floor1" :floorTitle="floorTitle1"></downsCom>
      <downsCom :floorDatas="floor2" :floorTitle="floorTitle2"></downsCom>
      <downsCom :floorDatas="floor3" :floorTitle="floorTitle3"></downsCom>
    </div>
    <div class="hotsell-area">
      <div class="hot-title">热卖商品</div>
      <div class="hot-goods">
        <van-row gutter="20">
          <van-col span="12" v-for="(item,i) in hotGoods" :key="i">
            <!--<hotCom :item="item"></hotCom>-->
          </van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.min.css'
  import {swiper,swiperSlide} from 'vue-awesome-swiper'
  import axios from 'axios'
  import swiperDefault from '../swiper/swiperDefault'
  import swiperDefault2 from '../swiper/swiperDefault2'
  import swiperDefault3 from '../swiper/swiperDefault3'
  import swiperText from '../swiper/swiperText'
  import downsCom from '../component/downsCom'
  import {moneyFilter} from '../../filter/money'
  import hotCom from '../component/hotCom'
  import URL from '@/serviceAPI.config'
  export default {
        name: "ShoppingMain",
        data(){
          return{
            swiperOption:{
              slidesPerView:3
            },
            msg:'HelloWorld！',
            locationIcon:'../../../static/icon1.png',
            bannerImgs:[{
              imageURL:'../../../static/banner1.jpg'
            },{
              imageURL:'../../../static/banner2.jpg'
            },{
              imageURL:'../../../static/banner3.jpg'
            }],
            category: [],
            adBanners:'',
            bannerArray:[],
            recommendGoods:[],
            floor1:'',
            floor2:'',
            floor3:'',
            floorTitle1:'',
            floorTitle2:'',
            floorTitle3:'',
            hotGoods:[]
          }
        },
      components:{swiper,swiperSlide,swiperDefault,swiperDefault2,swiperDefault3,swiperText,downsCom,hotCom},
      filters:{
        moneyFilter(money){
           return moneyFilter(money)
        }
      },
      created() {
        axios({
          url:URL.getMainInfo,
          method:'get'
        }).then(data=>{
          if (data.status===200){
            this.category=data.data.data.category;
            this.adBanners=data.data.data.advertesPicture.PICTURE_ADDRESS;
            this.bannerArray=data.data.data.slides;
            this.recommendGoods=data.data.data.recommend;
            this.floor1=data.data.data.floor1;
            this.floor2=data.data.data.floor2;
            this.floor3=data.data.data.floor3;
            this.floorTitle1=data.data.data.floorName.floor1;
            this.floorTitle2=data.data.data.floorName.floor2;
            this.floorTitle3=data.data.data.floorName.floor3;
            this.hotGoods=data.data.data.hotGoods
          }
        }).catch(err=>{
          console.log(err);
        })
      }
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
  .search-bar{
    height: 2.2rem;
    background: #e5017d;
    line-height: 2.2rem;
    text-align: center;
  }
  .search-icon-one{
    vertical-align: middle;
  }
  .search-find{
    margin-right: 10px;
  }
  .search-input{
    width: 100%;
    height: 1.3rem;
    border:0px;
    border-bottom: 1px solid #ffffff;
    background:#e5017d;
    color: #ffffff;
  }
  .type-bar{
    display: flex;
    flex-direction: row;
    background: #ffffff;
    margin: 0 .3rem .3rem .3rem;
    font-size: 14px;
    flex-wrap: nowrap;
  }
  .type-bar div{
    font-size: 12px;
    padding: .3rem;
    text-align: center;
  }
  .recommend-area{
    background: white;
  }
  .recommend-title{
    border-bottom: 1px solid #eeeeee;
    font-size: 14px;
    color: #e5017d;
    padding: .2rem;
  }
  .recommend-body{
    border-bottom: 1px solid #eeeeee;
  }

  .recommend-item{
    width: 99%;
    font-size: 12px;
    text-align: center;
    height: 8rem;
  }
  .swiper-items{
    border-left: 1px solid #eeeeee;
  }
  .swiper-items:last-of-type{
    border-right: 1px solid #eeeeee;
  }

  .hotsell-area{
    text-align: center;
    font-size:14px;
    height: 1.8rem;
    line-height:1.8rem;
  }
  .recommend-item-name{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space:nowrap;
    padding-top: .1rem;
  }
  .recommend-item-price{
    padding-top: .3rem;
  }
  .hot-goods{
    height: 130rem;
    overflow: hidden;
    background: #ffffff;
  }
</style>
