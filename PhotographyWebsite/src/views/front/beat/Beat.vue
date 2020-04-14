<template>
  <div id="beat">
    <div class="subitem-header">
      <ul class="center-width">
        <li v-for="(item, index) in headerMenu" :key="index" :class="activeIndex === index? 'active' : ''" @click="activeIndex = index">{{item}}</li>
      </ul>
    </div>
    <div class="subitem-content">
      <ul class="center-width">
        <li v-for="(item, index) in subitemArr" :key="index">
          <div class="li-top">
            <img :src="require('@/public/images/subitem/subitem1.jpg')" alt="作品">
          </div>
          <div class="li-center">
            <h3>{{item.title}}</h3>
            <el-tag :closable="false" :type="'warning'">玩拍高级摄影师</el-tag>
          </div>
          <div class="li-bottom">
            <div class="bottom-left">
              <img :src="require('@/public/images/user.jpg')" alt="用户头像" width="30" height="30" style="border-radius: 15px;">
              <span>{{item.authorName}}</span>
            </div>
            <div class="bottom-right">
              <a href="#" @click="showDetail">我要下单</a>
            </div>
          </div>
        </li>
      </ul>
      <div class="pagination">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="100"
          layout="prev, pager, next, jumper"
          :background="true"
          :total="1000">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Beat',
  data () {
    return {
      activeIndex: 0,
      currentPage: 1,
      pageSize: 12,
      headerMenu: ['全部', '摄影师', '地区推荐'],
      subitemArr: [{
        title: '拍单1',
        authorName: '摄影师名称'
      }, {
        title: '拍单1',
        authorName: '摄影师名称'
      }, {
        title: '拍单1',
        authorName: '摄影师名称'
      }, {
        title: '拍单1',
        authorName: '摄影师名称'
      }, {
        title: '拍单1',
        authorName: '摄影师名称'
      }, {
        title: '拍单1',
        authorName: '摄影师名称'
      }, {
        title: '拍单1',
        authorName: '摄影师名称'
      }]
    }
  },
  methods: {
    handleSizeChange (pageSize) {
      this.pageSize = pageSize
    },
    handleCurrentChange (currentPage) {
      this.currentPage = currentPage
    },
    showDetail () {
      this.$router.push({ path: '/beat/detail/1' }) // 动态路由 数字为可变化量
    }
  },
  mounted () {
    document.querySelector('.subitem-content').style.height = document.documentElement.scrollHeight - 60 - 60 + 'px'
  }
}
</script>

<style scoped lang="less">
  #beat{
    height: 60px;
    color: #a4a4a4;
    display: flex;
    flex-direction: column;
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
    .subitem-header{
      width: 100%;
      height: 60px;
      background: white;
      ul{
        height: 60px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        li{
          list-style: none;
          flex-basis: 80px;
          font-size: 15px;
          cursor: pointer;
        }
        .active{
          font-weight: 700;
          color: black;
        }
      }
    }
    .subitem-content{
      background: #F8F8F8;
      ul{
        text-align: left;
        padding-top: 20px;
        background: #F8F8F8;
        li{
          display: inline-block;
          font-size: 13px;
          margin: 0 5px 20px;
          background: #fff;
          border-radius: 4px;
          -ms-border-radius: 4px;
          -moz-border-radius: 4px;
          -webkit-border-radius: 4px;
          border: 1px solid #eee;
          color: black;
          .li-top{
            img{
              width: 452px;
              height: 203px;
            }
          }
          .li-center{
            padding: 0 15px;
            padding-bottom: 10px;
            border-bottom: 1px solid #f8f8f8;
          }
          .li-bottom{
            padding: 15px;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            .bottom-left{
              display: flex;
              flex-direction: row;
              align-items: center;
              span{
                margin-left: 5px;
              }
            }
            .bottom-right{
              a{
                color: #111;
                border: 1px solid #ffd217;
                background: #ffd217;
                display: inline-block;
                padding: 0 12px;
                font-size: 13px;
                border-radius: 4px;
                overflow: hidden;
                font-weight: 700;
                vertical-align: middle;
                line-height: 32px;
                text-decoration: none;
              }
            }
          }
          h3{
            margin: 10px 0;
          }
        }
      }
      .pagination{
        padding:10px;
        background: #F8F8F8;
      }
    }
  }
</style>
