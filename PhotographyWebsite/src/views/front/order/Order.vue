<template>
  <div id="order">
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
            <el-tag
              :closable="false"
              :type="item.type === 0? 'success' : 'warning'"
              style="margin-right: 10px;">
              {{item.type === 0? '购买作品' : '约拍摄影'}}
            </el-tag>
            <el-tag
              :closable="false"
              :type="item.status === 1? 'info' : 'danger'">
              {{item.status === 1? '已付款' : '未付款'}}
            </el-tag>
          </div>
          <div class="li-bottom">
            <div class="bottom-left">
              <img :src="require('@/public/images/user.jpg')" alt="用户头像" width="30" height="30" style="border-radius: 15px;">
              <span>{{item.authorName}}</span>
            </div>
            <div class="bottom-right">
              <a href="#" @click="buyNew(item.type, item.id)" v-if="item.status === 1">再来一单</a>
              <a href="#" @click="payNow(item.id)" v-if="item.status === 0">立即付款</a>
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
    <div class="dialog">
      <el-dialog title="二维码付款"
                 :visible.sync="dialogVisible"
                 width="30%">
        <span><img :src="require('@/public/images/erweima.png')" alt="二维码"></span>
        <h2 style="margin-top: 10px;">扫一扫二维码 向我付款</h2>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Subitem',
  data () {
    return {
      activeIndex: 0,
      currentPage: 1,
      pageSize: 12,
      dialogVisible: false,
      headerMenu: [ '约拍订单', '作品订单', '已购买的订单', '未支付的订单' ],
      subitemArr: [{
        id: 1,
        title: '订单001',
        authorName: '收款人名称',
        status: 1,
        type: 0
      }, {
        id: 1,
        title: '订单001',
        authorName: '收款人名称',
        status: 1,
        type: 1
      }, {
        id: 1,
        title: '订单001',
        authorName: '收款人名称',
        status: 0,
        type: 1
      }, {
        id: 1,
        title: '订单001',
        authorName: '收款人名称',
        status: 1,
        type: 0
      }, {
        id: 1,
        title: '订单001',
        authorName: '收款人名称',
        status: 0,
        type: 0
      }, {
        id: 1,
        title: '订单001',
        authorName: '收款人名称',
        status: 1,
        type: 0
      }, {
        id: 1,
        title: '订单001',
        authorName: '收款人名称',
        status: 0,
        type: 1
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
      this.$router.push({ path: '/subitem/detail/1' })
    },
    buyNew (type, id) {
      if (type === 0) {
        this.$router.push({ path: '/subitem/detail/' + id }) // type为0则为作品订单 1为约拍订单
      } else {
        this.$router.push({ path: '/beat/detail/' + id })
      }
    },
    payNow () {
      // 先去请求二维码接口
      this.dialogVisible = true
    }
  },
  mounted () {
    document.querySelector('.subitem-content').style.height = document.documentElement.scrollHeight - 60 - 60 + 'px'
  }
}
</script>

<style scoped lang="less">
  #order{
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
          flex-basis: 100px;
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
            padding-bottom: 20px;
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
