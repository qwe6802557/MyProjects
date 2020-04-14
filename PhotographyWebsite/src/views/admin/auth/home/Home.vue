<template>
  <div id="countList">
        <div class="box-area">
            <div class="area-top">
              <div class="top-container-one">
                <div class="box-one box-width">
                  <img :src="require('@/public/images/order.png')" alt="订单">
                  <div class="right-message">
                    <span>10800</span>
                    <span>订单数量</span>
                  </div>
                </div>
                <div class="box-two box-width">
                  <img :src="require('@/public/images/user.png')" alt="用户">
                  <div class="right-message">
                    <span>10800</span>
                    <span>用户数量</span>
                  </div>
                </div>
              </div>
              <div class="top-container-two">
                <img :src="require('@/public/images/avatar.png')" alt="头像">
                <div class="user-message">
                  <h3>登录信息</h3>
                  <span>用户账号:<span>admin</span></span>
                  <span>用户角色:<span class="user-role">管理员</span></span>
                </div>
                <span class="last-login">最后登录:2020-2-24</span>
              </div>
            </div>
          <div class="area-center">
            <div class="center-left center-width">
              <div class="title">
                热销作品排行
              </div>
              <div class="count order">
                <el-row>
                  <el-col :span="12">
                    <ul>
                      <li>
                        <img :src="require('@/public/images/1.png')" alt="第一">
                        <span>青春期少年</span>
                      </li>
                      <li>
                        <img :src="require('@/public/images/2.png')" alt="第二">
                        <span>兔女郎学姐</span>
                      </li>
                      <li>
                        <img :src="require('@/public/images/3.png')" alt="第三">
                        <span>我的妹妹</span>
                      </li>
                    </ul>
                  </el-col>
                  <el-col :span="12">
                    <ul>
                      <li>
                        <i>4.</i>
                        <span>青春期少年</span>
                      </li>
                      <li>
                        <i>5.</i>
                        <span>兔女郎学姐</span>
                      </li>
                      <li>
                        <i>6.</i>
                        <span>我的妹妹</span>
                      </li>
                    </ul>
                  </el-col>
                </el-row>
              </div>
            </div>
            <div class="center-right center-width">
              <div class="title">
                摄影家评分排行
              </div>
              <div class="count order">
                <el-col :span="12">
                  <ul>
                    <li>
                      <img :src="require('@/public/images/1.png')" alt="第一">
                      <span>青春期少年</span>
                    </li>
                    <li>
                      <img :src="require('@/public/images/2.png')" alt="第二">
                      <span>兔女郎学姐</span>
                    </li>
                    <li>
                      <img :src="require('@/public/images/3.png')" alt="第三">
                      <span>我的妹妹</span>
                    </li>
                  </ul>
                </el-col>
                <el-col :span="12">
                  <ul>
                    <li>
                      <i>4.</i>
                      <span>青春期少年</span>
                    </li>
                    <li>
                      <i>5.</i>
                      <span>兔女郎学姐</span>
                    </li>
                    <li>
                      <i>6.</i>
                      <span>我的妹妹</span>
                    </li>
                  </ul>
                </el-col>
              </div>
            </div>
          </div>
          <div class="area-center">
            <div class="center-left center-width">
              <div class="title">
                受欢迎作品统计
              </div>
              <div class="count" id="workEchart">

              </div>
            </div>
            <div class="center-right center-width">
              <div class="title">
                受欢迎摄影家统计
              </div>
              <div class="count" id="cameraEchart">

              </div>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
import { myEchartsOne, myEchartsTwo } from '@/plugins/echarts'
export default {
  name: 'Home',
  data () {
    return {
      squareUrl: 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png'
    }
  },
  methods: {
    drawLine () {
      // 基于准备好的dom，初始化echarts实例
      let myChartOne = this.$echarts.init(document.getElementById('workEchart'))
      let myChartTwo = this.$echarts.init(document.getElementById('cameraEchart'))
      // 绘制图表
      myChartOne.setOption(myEchartsOne)
      myChartTwo.setOption(myEchartsTwo)
    }
  },
  mounted () {
    this.drawLine()
  }
}
</script>

<style scoped lang="less">
  #countList{
    #workEchart, #cameraEchart{
      width: 650px;
      height: 400px;
      margin: 60px auto 0px;
    }
    .box-area{
      padding: 20px;
      .area-top{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .top-container-one{
          padding: 20px;
          width:  calc(48% - 40px);
          background: white;
          display: flex;
          flex-direction: row;
          justify-content: center;
        }
        .top-container-two{
          width: calc(48% - 40px);
          background: white;
          padding: 20px;
          display: flex;
          flex-direction: row;
          text-align: left;
          align-items: center;
          img{
            width: 100px;
            height: 100px;
            margin-left: 60px;
          }
          h3{
            font-size:16px;
            margin-bottom: 20px;
          }
          .user-message{
            display: flex;
            flex-direction: column;
            margin-left: 60px;
            span{
              font-size: 14px;
              margin-bottom: 10px;
              span{
                margin-left: 10px;
              }
            }
            .user-role{
              background: #0092F1;
              color: white;
              padding: 3px 5px;
              margin-left: 10px;
            }
          }
          .last-login{
            margin-left: 60px;
            font-size: 14px;
            display: block;
            margin-top: 77px;
          }
        }
        .box-width{
          width: 280px;
          height: 110px;
          border-radius: 15px;
          margin: 0px 30px;
          padding: 15px 20px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          .right-message{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            span{
              font-size: 40px;
              color: white;
              &:nth-child(2){
                font-size: 18px;
              }
            }
          }
        }
        .box-one{
          background: #0092F1;
        }
        .box-two{
          background: #FFBF44;
        }
        .box-three{
          background: #1ADA6F;
        }
        .box-four{
          background: #84CCC9;
        }
      }
      .area-center{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-top: 40px;
        .center-width{
          padding: 20px 20px;
          background: white;
          width: calc(48% - 40px);
        }
      }
      .title{
        font-size: 18px;
        text-align: left;
        &::before{
          content:'';
          display: inline-block;
          margin-right: 5px;
          width: 12px;
          height: 12px;
          background: #0092F1;
          border-radius: 50%;
        }
      }
    }
    .order{
      ul{
        li{
          list-style: none;
          text-align: left;
          height: 35px;
          padding: 10px 0 5px 0;
          border-bottom: 1px #EBEBEB solid;
          font-size: 15px;
          color: #8C8C8C;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          span{
            margin-left: 10px;
          }
        }
      }
    }
  }
</style>
