<template>
    <div>
      <swiper class="swiper" :options="swiperOption">
        <swiperSlide class="swiper-personal">
             <div class="text">
               作为上世纪80年代出道的歌手之一，他的名字也许已经为很多人所淡忘了。但是他的《望天》却是很多老歌迷肯定不能忘却的记忆，他演唱的《古月照今尘》把中国人心中的历史情节，中华情节表现得厚重透彻，88年排名台湾榜首长达三十周。还有由他首唱的《故乡的云》、《三百六十五里路》等歌曲风靡台湾和东南亚地区，被费翔、包娜娜等歌手在祖国大陆翻唱后，受到了祖国大陆歌迷的喜爱。1984年8月，文章从日本来到台湾加盟EMI唱片，并于同年10月在台湾由四海唱片公司代理发行了第一张专辑《三百六十五里路》。《三百六十五里路》由挖掘出齐豫、潘越云等歌手的台湾著名的音乐人李泰祥和谭健常共同担纲制作，收录了《三百六十五里路》、《泛黄的书签》和《故乡的云》等十首歌曲。初入乐坛的文章，以一个异国游子的心情，谱写出动人心魄的家园之恋，高亢雄厚的嗓音，精致典雅的个人形象，马上获得社会大众的认可，《三百六十五里路》、《故乡的云》等歌曲迅速红遍台湾、新加坡和马来西亚地区。而文章也凭借这张《三百六十五里路》专缉，于1985年7月在台湾获得了“金嗓奖”最具潜力新人奖。《三百六十五里路》由小轩和谭健常这对夫妻搭档共同创作。很多人第一次听到《三百六十五里路》这首歌曲应该是在1988年的中央电视台的春节联欢晚会上，由包娜娜演唱的。之后就开始风靡大陆。后来，很多人才终于听到了文章原唱的版本，那独特的嗓音所表达出的游子情怀就一直萦绕在听者的心中，挥之不去。当年《故乡的云》原唱堪称经典，很多听过原唱的人认为，无论费翔1987年被录音师刻意调得接近原唱的翻唱，还是歌曲原唱者文章后来的演唱，都无法表现当年原唱那缓缓飘过的乡愁。
             </div>
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
           slide:[1,2,3,4,5,6],
            swiperOption:{
             direction:'vertical',
              slidesPerView:'auto',
              freeMode:true,
              mousewheel:true
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
 .swiper{
   height: 300px;
   overflow: hidden;
 }
  .text{
    padding: 30px;
    height: auto;
    font-size: 18px;
    text-align: left;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }
</style>
