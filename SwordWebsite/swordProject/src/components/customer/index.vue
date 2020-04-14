<template>
  <div class="customer">
    <div class="page-header">
      <div class="header-rightBar">
        <el-button type="primary" @click="hotSelect">热门套餐(点击选择)</el-button>
        <el-button type="plain" @click="reset">重置</el-button>
        <el-select placeholder="请选择服务器" v-model="searchValue">
          <el-option v-for="(item,index) in serverList" :value="item.value" :key="index" :label="item.lable"></el-option>
        </el-select>
        <el-button type="plain" @click="searchDialog" :loading="searchLoading">查询</el-button>
      </div>
    </div>
    <div class="page-content">
      <h1>剑与远征</h1>
      <div class="content-image">
        <el-row>
          <div :class="['each-image']" v-for="(item, index) in imageList" :key="item.id" @click="selectChange(item, index)">
            <i class="el-icon-success"></i>
            <div class="circle">
              <img :src="item.url" alt="pic" title="剑与远征人物卡" :onerror="error_img">
              <span>{{item.name}}</span>
            </div>
          </div>
        </el-row>
      </div>
      <el-drawer
        title="热门套餐"
        :visible.sync="drawer"
        :direction="direction">
        <div class="hot-list">
          <ul>
            <li v-for="item in hotList" :key="item.id" @click="hotClick(item.content)">
              <span style="color: red;">{{item.name}}:</span>{{item.content}}
              <el-divider></el-divider>
            </li>
          </ul>
        </div>
      </el-drawer>
      <el-dialog
        title="查询结果"
        :visible.sync="dialogVisible"
        width="90%"
      >
        <div class="result-list" v-if="this.resultList.length !== 0">
          <ul>
            <el-row v-for="(item, index) in resultList" :key="item.id">
              <li>
                <el-col :span="24" :lg="6">
                  <el-button @click="copyKey(index)">{{item.pass}}(点此复制)</el-button>
                  <input type="text" v-model="item.pass" class="key-input">
                </el-col>
                <el-col :span="24" :lg="2">
                  <span style="color: red;">¥{{item.price | moneyFormat}}元</span>
                </el-col>
                <el-col :span="24" :lg="2">
                  <span style="color: red;">{{item.server}}区</span>
                </el-col>
                <el-col :span="24" :offset="1" :lg="14">
                  <div class="result-image">
                    <div class="each-image" v-for="(cItem, Cindex) in item.cList" :key="cItem.id">
                      <img :src="cItem.url" alt="pic" title="剑与远征人物卡" :onerror="error_img">
                      <span>{{cItem.name}}</span>
                    </div>
                  </div>
                </el-col>
              </li>
            </el-row>
          </ul>
        </div>
        <span v-if="this.resultList.length === 0">暂无符合条件的结果</span>
      </el-dialog>
    </div>
    <div class="footer">
      <a href="http://www.beian.miit.gov.cn">渝ICP备18015259号-1</a>
    </div>
  </div>
</template>

<script>
  import { reqCustomerInfo, reqSearchInfo, hotClickSearch } from '@/api';
  import { moneyFormat } from "@/filters";
  import memoryUntil from "@/untils/memoryUntil";
    export default {
        name: "Customer.vue",
        data(){
        return {
          visible: false,
          drawer: false,
          dialogVisible: false,
          searchLoading: false,
          direction: 'rtl',
          selectedArr: [],
          searchValue: '',
          serverList: [],
          imageList: [],
          hotList: [],
          error_img: 'this.src="'+require('@/assets/errorimg.png')+'"',
          resultList: [],
        }
      },
      methods:{
        reset(){ //重置按钮回调
          this.searchValue = '';
          document.querySelectorAll('.selected').forEach((item) => {
            item.classList.remove('selected');
          });
          this.selectedArr = [];
        },
        selectChange(item, index){ //多选回调
          const selectedDom = document.querySelectorAll('.each-image')[index];
          if(selectedDom.classList.contains('selected')){
            selectedDom.classList.remove('selected');
            this.selectedArr = this.selectedArr.filter( (cItem) => {
              return cItem.id !== item.id;
            });
          } else {
            selectedDom.classList.add('selected');
            this.selectedArr.push(item);
          }
        },
        hotSelect(){ //热门套餐按钮回调
          this.drawer = !this.drawer;
        },
        searchDialog(){ //查询
          /*if (this.selectedArr.length === 0){
            return this.$message.warning('请先选择要查询的英雄！');
          }*/
          this.searchInfo();
        },
        copyKey(index){ //点击按钮复制功能
          const copyInput = document.querySelectorAll('.key-input')[index];
          copyInput.select();
          document.execCommand("Copy");
        },
        hotClick(content){ //热门列表点击
          hotClickSearch({
            hero: content,
          }).then( res => {
            const { status, data } = res;
            if (status === 200 ){
              this.resultList = data.searchArr;
              this.dialogVisible = true;
            }
          }).catch(err => {
            this.$message.error('请求异常!');
          })
        },
        searchInfo(content){ //通用查询
          const selectedHero = this.selectedArr.map((item) => {
            return item.name;
          });
          if (!content){
            this.searchLoading = true;
          }
          reqSearchInfo({
            hero: content? content : selectedHero.join(','),
            server: content? "" : this.searchValue,
          }).then( res => {
            const { data, status } = res;
            if (status === 200){
              if (!content){
                this.searchLoading = false;
              }
              this.resultList = data.searchArr;
              this.dialogVisible = true;
            } else {
              if (!content){
                this.searchLoading = false;
              }
              this.$message.error('查询出错!');
            }
          });
        }
      },
      filters: {
        moneyFormat(money){
          money = money - 0;
          return moneyFormat(money);
        },
      },
      created() {
        reqCustomerInfo().then(res => {
          const { data, status } = res;
          if (status === 200 ){
            const { hero, hot_Taocan, server_Name } = data;
            this.imageList = hero;
            this.hotList = hot_Taocan;
            this.serverList = server_Name;
          } else {
            this.$message.error('初始化数据失败！');
          }
        })
      }
    }
</script>

<style scoped lang="less">
.customer{
    .header-rightBar{
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      padding-top: 22px;
      .el-button--plain{
        margin:0px 5px;
      }
    }
    .page-content{
      .content-image{
        padding: 0 80px;
        text-align: left;
        .each-image{
          margin-bottom: 10px;
          display: inline-block;
          margin-left: 5px;
          position: relative;
          .circle{
            display: flex;
            flex-direction: column;
            img{
              width: 60px;
              height: 60px;
            }
            span{
              font-size: 12px;
              text-align: center;
            }
          }
          .el-icon-success{
            display: none;
          }
        }
        .selected{
          color: #13ce66;
          .el-icon-success{
            display: block;
            position: absolute;
            top: 0;
            font-size: 22px;
            right: 0;
          }
        }
      }
    }
    .el-drawer{
      ul{
        li{
          text-align: left;
          margin-left: 10px;
          margin-top: 5px;
          cursor: pointer;
        }
      }
    }
    .el-dialog{
      .result-list{
        ul{
          li{
            display: flex;
            flex-direction: row;
            align-items: center;
            margin: 15px 0;
            img{
              width: 60px;
              height: 60px;
            }
            .each-image{
              float: left;
              display: flex;
              flex-direction: column;
              font-size: 12px;
              .el-button{
                font-size: 14px;
              }
            }
            .key-input{
              position: absolute;
              opacity: 0;
            }
          }
        }
      }
    }
  .footer{
    position: relative;
    margin-top: 26%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    a{
      font-size: 12px;
      text-decoration: none;
    }
  }
  }
@media screen and (max-width: 500px){
  .header-rightBar{
    display: flex;
    flex-direction: column !important;
    width: 50%;
    margin: 0 auto;
    button{
      margin-bottom:10px !important;
    }
    .el-select{
      margin-bottom: 10px;
    }
  }
 .el-dialog{
   ul{
     padding-inline-start: 20px;
     .el-row{
       li{
         display: flex;
         flex-direction: column !important;
         .el-col{
           margin-top: 5px;
         }
         border-bottom: 1px #8cc5ff solid;
         box-sizing: border-box;
         padding-bottom: 3px;
       }
     }
   }
  }
  .footer{
    margin-top: 0px !important;
  }
}
</style>
