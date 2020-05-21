<template>
    <div>
      <swiper class="swiper" :options="swiperOption">
        <swiperSlide class="swiper-personal" v-for="(item,i) in slide" :key="i">
             Slide{{item}}
        </swiperSlide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
  import 'swiper/dist/css/swiper.min.css'
  import {swiper,swiperSlide} from 'vue-awesome-swiper'
    export default {
        name: "swiperDefault",
        data(){
          return{
           slide:[1,2,3,4,5,6],
            swiperOption: {
             direction:'vertical',
             pagination:{
               el:'.swiper-pagination'
             }
            }
          }
        },
        components:{
          swiper,
          swiperSlide
        }
    }
</script>

<style scoped>
.swiper-personal{
  width: 100%;
  text-align: center;
  background: #eeeeee;
  line-height: 7rem;
}
  .swiper{
    height: 7rem;
    border-top: 1px solid #eeeeee;
    border-bottom: 1px solid #eeeeee;
  }
</style>
