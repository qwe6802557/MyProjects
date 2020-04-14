<template>
  <div id="beat-detail">
    <div class="detail-header center-width">
      <div class="header-left">
        <img :src="require('@/public/images/subitem/subitem1.jpg')" alt="作品">
      </div>
      <div class="header-right">
        <div class="right-top">
          <h3>我的防疫生活</h3>
          <el-rate
            v-model="value"
            disabled
            show-score
            text-color="#ff9900"
            score-template="{value}"
            style="margin: 5px 0;">
          </el-rate>
          <span>玩拍收集</span>
          <p>投稿时间</p>
          <span>作者:会飞的蜗牛</span>
        </div>
        <div class="right-bottom">
          <div class="collection">
          <span @click="goodFlag = !goodFlag">
            <img :src="goodFlag? require('@/public/images/subitem/good-active.png') : require('@/public/images/subitem/good.png')" alt="收藏" title="添加收藏">
            {{goodFlag?'取消点赞' : '点赞'}}
          </span>
          </div>
          <div class="care">
          <span @click="collectionFlag = !collectionFlag">
            <img :src="collectionFlag? require('@/public/images/subitem/collection.png') : require('@/public/images/subitem/collection-active.png')" alt="收藏" title="添加收藏">
            {{collectionFlag?'取消收藏' : '收藏'}}
          </span>
            <div class="button-area">
              <a href="#" @click="showComment" style="margin-right: 20px;">我要评分</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="detail-comment center-width">
      <div class="block">
        <span class="demonstration">请对该文章评分</span>
        <el-rate
          v-model="value2"
          :colors="colors">
        </el-rate>
      </div>
      <h3 class="border-line">文章内容</h3>
      <div class="subitem-show">
        这是一段文章内容这是一段文章内容这是一段文章内容这是一段文章内容
        这是一段文章内容这是一段文章内容这是一段文章内容这是一段文章内容
        这是一段文章内容这是一段文章内容这是一段文章内容这是一段文章内容
        这是一段文章内容这是一段文章内容这是一段文章内容这是一段文章内容
        这是一段文章内容这是一段文章内容这是一段文章内容这是一段文章内容
        这是一段文章内容这是一段文章内容这是一段文章内容这是一段文章内容
        这是一段文章内容这是一段文章内容这是一段文章内容这是一段文章内容
        这是一段文章内容这是一段文章内容这是一段文章内容这是一段文章内容
        这是一段文章内容这是一段文章内容这是一段文章内容这是一段文章内容
        这是一段文章内容这是一段文章内容这是一段文章内容这是一段文章内容
      </div>
      <!--<div class="loading-more">
        <a href="#">点击加载更多</a>
      </div>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'MessageDetail',
  data () {
    return {
      value: 4,
      value2: 0,
      isOrdered: false,
      colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
      goodFlag: false,
      collectionFlag: false,
      commentList: [
        {
          id: '1',
          commentUser: {
            id: '1',
            nickName: '张三'
          },
          targetUser: {
            id: '2',
            nickName: '李四'
          },
          content: '今天是个好日子',
          createDate: '2019-9-11',
          childrenList: [{
            id: '1',
            commentUser: {
              id: '1',
              nickName: '张三'
            },
            targetUser: {
              id: '2',
              nickName: '李四'
            },
            content: '今天是个好日子',
            createDate: '2019-9-11'
          }]
        }
      ],
      showArr: [{
        src: require('@/public/images/subitem/show1.jpg'),
        title: '月下月光',
        desc: '好看得不得了，根本停不下来',
        picNum: 6,
        authorName: '会爬的蜗牛',
        authorAvatar: ''
      }, {
        src: require('@/public/images/subitem/show2.jpg'),
        title: '月下月光',
        desc: '好看得不得了，根本停不下来',
        picNum: 6,
        authorName: '会爬的蜗牛',
        authorAvatar: ''
      }, {
        src: require('@/public/images/subitem/show3.jpg'),
        title: '月下月光',
        desc: '好看得不得了，根本停不下来',
        picNum: 6,
        authorName: '会爬的蜗牛',
        authorAvatar: ''
      }, {
        src: require('@/public/images/subitem/show1.jpg'),
        title: '月下月光',
        desc: '好看得不得了，根本停不下来',
        picNum: 6,
        authorName: '会爬的蜗牛',
        authorAvatar: ''
      }, {
        src: require('@/public/images/subitem/show1.jpg'),
        title: '月下月光',
        desc: '好看得不得了，根本停不下来',
        picNum: 6,
        authorName: '会爬的蜗牛',
        authorAvatar: ''
      }, {
        src: require('@/public/images/subitem/show1.jpg'),
        title: '月下月光',
        desc: '好看得不得了，根本停不下来',
        picNum: 6,
        authorName: '会爬的蜗牛',
        authorAvatar: ''
      }]
    }
  },
  methods: {
    showComment () {
      document.querySelector('.block').style.display = 'block'
    },
    showOrder () {
      this.isOrdered = !this.isOrdered
      this.isOrdered && this.$message.success('下单成功!稍后摄影师会联系您!')
      !this.isOrdered && this.$message.success('取消下单成功!')
    }
  },
  components: {
  },
  mounted () {

  }
}
</script>

<style scoped lang="less">
  #beat-detail{
    .block{
      padding-top: 15px;
      display: none;
      border-top: 1px solid #f8f8f8;;
    }
    h3{
      margin-block-start: 1em;
      margin-block-end: 0px;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      font-weight: bold;
    }
    .demonstration{
      display: block;
      font-size: 15px;
      margin: 5px 0;
    }
    .center-width{
      width: 1400px;
      margin: 0 auto;
    }
    .detail-header{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 65px 0;
      .header-left{
        img{
          width: 490px;
          height: 224px;
          border-radius: 4px;
        }
      }
      .header-right{
        text-align: left;
        padding-left: 20px;
        padding-bottom: 40px;
        vertical-align: top;
        height: 224px;
        span, p{
          font-size: 14px;
        }
        p{
          color: #a4a4a4;
        }
        .right-bottom{
          margin-top: 25px;
          .care{
            margin-top: 10px;
            display: flex;
            flex-direction: row;
            width: 260px;
            justify-content: space-between;
            a{
              color: #111;
              border: 1px solid #ffd217;
              background: #ffd217;
              display: inline-block;
              padding: 0 10px;
              font-size: 13px;
              border-radius: 4px;
              overflow: hidden;
              font-weight: 700;
              vertical-align: middle;
              line-height: 32px;
              text-decoration: none;
            }
          }
          span{
            display: flex;
            flex-direction: row;
            align-items: center;
            cursor: pointer;
            img{
              width: 20px;
              height: 20px;
              margin-right: 5px;
            }
          }
        }
      }
    }
    .border-line{
      border-top: 1px #f8f8f8 solid;
      padding-top: 20px;
    }
    .detail-comment{
      .subitem-show{
        position: relative;
        margin-top: 10px;
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
        margin: 10px 0;
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
  }
</style>
