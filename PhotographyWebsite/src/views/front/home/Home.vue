 <template>
  <div id="home">
    <div class="top-bar center-width">
      <div class="bar-left">
            <img :src="require('@/public/images/banner2.jpg')" alt="banner">
      </div>
      <div class="bar-right">
        <h2>玩摄影，上<span>"玩拍"</span></h2>
        <p>一键安排你的生活</p>
      </div>
    </div>
    <div class="subitem center-width">
      <div class="subitem-title">
        <h2>活动</h2>
        <a>查看更多</a>
      </div>
      <div class="subitem-content">
        <el-row>
          <el-col :span="6" v-for="(item, index) in subitemArr" :key="index">
            <div class="each-subitem">
              <img :src="item.src" alt="活动" title="活动">
              <h4>{{item.h4}}</h4>
              <span>{{item.span}}</span>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="subitem-show">
        <div class="each-show" v-for="(item, index) in showArr" :key="index">
          <div class="show-cover">
            <div class="cover-top">
              <div class="cover-left">
                <img :src="require('@/public/images/user.jpg')" alt="用户头像" style="border-radius: 15px; width: 30px;height: 30px;">
                <span style="display: inline-block;margin-top: 5px;margin-left: 5px;">{{item.authorName}}</span>
              </div>
              <span>{{item.picNum}}张</span>
            </div>
            <div class="cover-bottom">
              <h3>{{item.title}}</h3>
              <span>{{item.desc}}</span>
            </div>
          </div>
          <img :src="item.src" alt="活动图片">
        </div>
      </div>
      <div class="loading-more">
        <a href="#">点击加载更多</a>
      </div>
    </div>
    <div class="home-bottom">
      <div class="bottom-message center-width">
        <el-row>
          <el-col :span="12">
            <h3>玩拍致力于成为中国青年摄影师的成长平台，</h3>
            <h3>超过300万+的摄影伙伴们加入米拍大家庭.</h3>
            <span class="line"></span>
            <p>在这里，发现摄影同好，结识摄影大咖，提升摄影技能，掌握摄影资讯；在这里，我们鼓励原创和分享，
              帮助每一个伙伴成长；在这里，玩摄影如此简单！</p>
          </el-col>
          <el-col :span="12">
          </el-col>
        </el-row>
      </div>
      <p style="font-size: 13px;margin-top: 15px;">Copyright 2014-2019 玩拍 版权所有 蜀ICP备14015734号-2 ICP证:川B2-20180306</p>
    </div>
  </div>
</template>

<script>
import { CarouselItem, Carousel } from 'element-ui'
import Vue from 'vue'
Vue.use(Carousel).use(CarouselItem)
export default {
  name: 'Home',
  data () {
    return {
      bannerImgArr: [
        require('@/public/images/banner1.jpg'),
        require('@/public/images/banner2.jpg'),
        require('@/public/images/banner3.jpg')],
      subitemArr: [
        { src: require('@/public/images/subitem/subitem1.jpg'),
          h4: '我的防疫生活',
          span: '距离投稿结束还有21天' },
        { src: require('@/public/images/subitem/subitem2.jpg'),
          h4: '我的防疫生活',
          span: '距离投稿结束还有21天' },
        { src: require('@/public/images/subitem/subitem3.png'),
          h4: '我的防疫生活',
          span: '距离投稿结束还有21天' },
        { src: require('@/public/images/subitem/subitem4.png'),
          h4: '我的防疫生活',
          span: '距离投稿结束还有21天' }
      ],
      showArr: [{
        src: require('@/public/images/subitem/show1.jpg'),
        title: '月下月光',
        desc: '好看得不得了，根本停不下来',
        picNum: 6,
        authorName: '会爬的蜗牛',
        authorAvatar: require('@/public/images/subitem/subitem1.jpg')
      }, {
        src: require('@/public/images/subitem/show2.jpg'),
        title: '月下月光',
        desc: '好看得不得了，根本停不下来',
        picNum: 6,
        authorName: '会爬的蜗牛',
        authorAvatar: require('@/public/images/subitem/subitem1.jpg')
      }, {
        src: require('@/public/images/subitem/show3.jpg'),
        title: '月下月光',
        desc: '好看得不得了，根本停不下来',
        picNum: 6,
        authorName: '会爬的蜗牛',
        authorAvatar: require('@/public/images/subitem/subitem1.jpg')
      }, {
        src: require('@/public/images/subitem/show1.jpg'),
        title: '月下月光',
        desc: '好看得不得了，根本停不下来',
        picNum: 6,
        authorName: '会爬的蜗牛',
        authorAvatar: require('@/public/images/subitem/subitem1.jpg')
      }, {
        src: require('@/public/images/subitem/show1.jpg'),
        title: '月下月光',
        desc: '好看得不得了，根本停不下来',
        picNum: 6,
        authorName: '会爬的蜗牛',
        authorAvatar: require('@/public/images/subitem/subitem1.jpg')
      }, {
        src: require('@/public/images/subitem/show1.jpg'),
        title: '月下月光',
        desc: '好看得不得了，根本停不下来',
        picNum: 6,
        authorName: '会爬的蜗牛',
        authorAvatar: require('@/public/images/subitem/subitem1.jpg')
      }]
    }
  },
  computed: {
  }
}
</script>

<style scoped lang="less">
  #home{
    h2,h3,h4{
      margin-block-start: 0;
      margin-block-end: 0;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
    }
    .center-width{
      width: 1400px;
      margin: 0 auto;
    }
    .top-bar{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      height: 430px;
      /deep/ .el-carousel{
        height: 430px;
        position: relative;
        /deep/ .el-carousel__container{
          height: 430px;
        }
        /deep/ .el-carousel__indicators--outside{
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        }
      }
      .bar-left{
        width: 950px;
        height: 100%;
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
          vertical-align: top;
        }
      }
      .bar-right{
        width: 420px;
        height: 100%;
        background: url("../../../public/images/bg2.png") center no-repeat;
        background-size: 100% 100%;
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        h2{
          font-size: 38px;
          margin-block-start: 0;
          margin-block-end: 0;
          margin-bottom: 45px;
        }
        span{
          color: #ffd217
        }
        p{
          font-size: 30px;
          font-weight: bolder;
          margin-block-start: 0;
          margin-block-end: 0;
        }
      }
    }
    .subitem{
      text-align: left;
      padding: 30px 0;
      .subitem-title{
        h2{
          font-size: 30px;
          margin-bottom: 10px;
        }
        a{
          display: inline-block;
          width: 93px;
          height: 32px;
          line-height: 32px;
          background: #111;
          border-radius: 2px;
          color: #fff;
          text-align: center;
          font-size: 13px;
          overflow: hidden;
          -moz-border-radius: 4px;
          -webkit-border-radius: 4px;
        }
      }
      .subitem-content{
        margin-top: 25px;
      }
      img{
        width: 336px;
        height: 150px;
        border-radius: 4px;
      }
      h4{
        margin: 15px 0;
        font-size: 15px;
      }
      span{
        font-size: 13px;
      }
      .subitem-show{
        position: relative;
        margin-top: 30px;
        -moz-column-count:3; /* Firefox */
        -webkit-column-count:3; /* Safari 和 Chrome */
        column-count:3;
        -moz-column-gap: 1em;
        -webkit-column-gap: 1em;
        column-gap: .6em;
        .each-show{
          position: relative;
          display: inline-block;
          cursor: pointer;
          width: 450.66px;
          text-align: center;
          margin-top: 20px;
          img{
            width: 451.66px;
            height: auto;
            vertical-align: top;
          }
          .show-cover{
            text-align: left;
            display: none;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            color: white;
            background: rgba(0,0,0,.2);
            .cover-top{
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              width: 408px;
              margin: 20px auto;
              span{
                font-size: 18px;
              }
              .cover-left{
              }
            }
            .cover-bottom{
              position: absolute;
              bottom: 20px;
              left: 20px;
              h3{
                margin-bottom: 8px;
              }
            }
          }
          &:hover{
            .show-cover{
              display: block;
            }
          }
        }
      }
      .loading-more{
        text-align: center;
        margin-top: 10px;
        a{
          display: inline-block;
          padding: 8px 15px;
          font-size: 13px;
          background: #111;
          color: #fff;
          cursor: pointer;
          border-radius: 4px;
          -ms-border-radius: 4px;
          -moz-border-radius: 4px;
          -webkit-border-radius: 4px;
          text-decoration: none;
        }
      }
    }
    .home-bottom{
      background: #f1f1f1;
      height: 248px;
      .bottom-message{
        padding: 28px 0;
        text-align: left;
        h3{
          font-size: 18px;
          color: black;
          margin-bottom: 10px;
        }
        .line{
          display: inline-block;
          height: 4px;
          width: 20px;
          background: #111;
          margin: 20px 0;
          color: black;
          font-size: 15px;
        }
      }
      p{
        color: black;
        margin-block-start: 0em;
        margin-block-end: 0em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
      }
    }
  }
</style>
