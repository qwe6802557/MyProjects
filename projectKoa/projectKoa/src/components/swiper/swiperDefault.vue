<template>
    <div>
      <swiper class="swiper-parent">
        <swiperSlide class="swiper-personal" v-for="(item,i) in slide" :key="i">
             Slide{{item}}
        </swiperSlide>
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
           slide:[1,2,3,4,5,6]
          }
        },
        components:{
          swiper,
          swiperSlide
        }
    }
</script>

<style scoped>
  .swiper-parent{
    height: 6rem;

  }
.swiper-personal{
  width: 100%;
  height: 100%;
  text-align: center;
  background: #eeeeee;
  line-height: 6rem;
}
</style>
