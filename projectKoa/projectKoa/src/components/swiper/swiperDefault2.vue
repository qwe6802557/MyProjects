<template>
    <div>
      <swiper :options="swiperOption">
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
             loop:true,
             pagination:{
               el:'.swiper-pagination',
               clickable:true
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
  height: 6rem;
  text-align: center;
  background: #eeeeee;
  line-height: 6rem;
}
</style>
