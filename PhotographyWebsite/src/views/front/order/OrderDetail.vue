<template>
<div id="subitem-detail">
  <div class="detail-header center-width">
    <div class="header-left">
      <img :src="require('@/public/images/subitem/subitem1.jpg')" alt="作品">
    </div>
    <div class="header-right">
      <div class="right-top">
        <h3>我的防疫生活</h3>
        <span>玩拍收集</span>
        <p>投稿时间</p>
        <span>摄影师名称:会飞的蜗牛</span>
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
          <a href="#" @click="showComment">发表评论</a>
        </div>
      </div>
    </div>
  </div>
  <div class="detail-comment center-width">
    <Comment />
  </div>
</div>
</template>

<script>
import Comment from 'hbl-comment'
export default {
  name: 'subitemDetail',
  data () {
    return {
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
            createDate: '2019-9-11',
          }]
        }

      ]
    }
  },
  methods: {
    commentInit () {
      document.querySelector('.hbl-comm').style.display = 'none'
    },
    showComment () {
      document.querySelector('.hbl-comm').style.display = 'block'
    }
  },
  components: {
    Comment
  },
  mounted () {
    this.commentInit()
  }
}
</script>

<style scoped lang="less">
#subitem-detail {
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
    border-bottom: 1px solid #f8f8f8;
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
      padding-bottom: 20px;
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
          width: 220px;
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
}
</style>
