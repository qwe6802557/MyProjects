<template>
  <div class="admin-home">
    <div class="admin-home-content">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <i class="line"></i>
          <h2>首页</h2>
        </div>
        <div class="form-area">
          <el-form :model="ruleForm" status-icon  ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="激活码" prop="code" class="password">
              <el-row>
                <el-col :span="8"  :lg="5">
                  <el-input v-model="ruleForm.code" type="text" placeholder="请输入激活码查询"></el-input>
                </el-col>
                <el-col :span="3"  :lg="2" style="margin-left: 10px;">
                  <el-button type="primary" @click="search" icon="el-icon-search">查询</el-button>
                </el-col>
                <el-col :span="3"  :lg="2">
                  <el-button  @click="toAddPage" icon="el-icon-plus" >添加英雄</el-button>
                </el-col>
                <el-col :span="3"  :lg="2" style="margin-left: 10px;">
                  <el-button type="danger" @click="delMany" icon="el-icon-delete">批量删除</el-button>
                </el-col>
                <el-col :span="3"  :lg="2" style="margin-left: 10px;">
                  <el-button type="danger" @click="delAll" icon="el-icon-delete" :loading="isDelAll">
                    <span v-if="!isDelAll">一键删除</span>
                    <span v-if="isDelAll">删除中...</span>
                  </el-button>
                </el-col>
                <el-col :span="5"  :lg="4" :xl="3" style="float: right;">
                  <TopBox :title="'未售出账号'" :color="'#33c4a2'" :number="have"></TopBox>
                </el-col>
                <el-col :span="24"  :lg="4" :xl="3" style="float: right;">
                  <TopBox :title="'已售出账号'" :color="'#f5a623'" :number="sold"></TopBox>
                </el-col>
              </el-row>
            </el-form-item>
          </el-form>
        </div>
        <div class="table-content">
          <el-table
            ref="multipleTable"
            :data="tableData"
            width="100%"
            max-height="575"
            :row-class-name="tableRowClassName"
            border
            v-loading="loading"
            @selection-change="handleSelectionChange">
            <el-table-column
              type="selection"
              width="45"
              align="center"
              fixed="left">
            </el-table-column>
            <el-table-column
              prop="pass"
              label="激活码"
              align="center"
              width="300"
              >
            </el-table-column>
            <!--<el-table-column
              prop="user"
              label="账号"
              align="center"
              width="200"
            >
            </el-table-column>-->
            <el-table-column
              prop="price"
              label="价格(元)"
              align="center"
              width="150"
            >
              <template slot-scope="scope">
                {{scope.row.price|moneyFormat}}
              </template>
            </el-table-column>
            <el-table-column
              prop="server"
              label="服务器"
              align="center"
              width="120"
            >
              <template slot-scope="scope">
                {{scope.row.server && scope.row.server + '区' || ''}}
              </template>
            </el-table-column>
            <el-table-column
              prop="cList"
              label="英雄卡组"
              align="center"
            >
              <template slot-scope="scope">
                <img :src="item.url" alt="英雄卡组" v-for="(item, index) in scope.row.cList" :key="index" width="60" height="60" style="margin-left: 6px;"/>
              </template>
            </el-table-column>
            <el-table-column
              label="操作"
              align="center"
              show-overflow-tooltip
              width="300"
            >
              <template slot-scope="scope">
                <el-button type="primary" icon="el-icon-s-goods" size="mini" round @click="sell(scope.row)" v-if="scope.row.selled === 0">售出</el-button>
                <el-button type="primary" icon="el-icon-edit" size="mini" round @click="editHero(scope.row)">修改</el-button>
                <el-button @click="delHero(scope.row)" type="danger" icon="el-icon-delete" size="mini" round>删除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="pagination">
            <el-pagination
              background
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="pagination.currentPage"
              :page-sizes="[10, 20, 30]"
              :page-size="100"
              layout="total, sizes, prev, pager, next, jumper"
              :total="pagination.total">
            </el-pagination>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
  import { Card, FormItem, Form, Input, Row, Col,
    Table, TableColumn, Pagination, Loading,
    MessageBox } from 'element-ui';
  import Vue from 'vue';
  import { moneyFormat } from '@/filters';
  import TopBox from '@/components/admin/common/TopBox'
  import { getSoldCount, getListAndSearch, toSellGoods, deleteGoods, deleteAll } from '@/api';
  Vue.use(Card).use(FormItem).use(Form).use(Input).use(Row)
    .use(Col).use(Table).use(TableColumn).use(Pagination)
    .use(Loading);
    export default {
        name: "Home",
      data(){
          return {
            loading: false,
            isDelAll:false,
            sold: 0,
            have: 0,
            tableData: [],
            selectedArr: [],
            ruleForm:{
              code:''
            },
            pagination:{
              currentPage: 1,
              pageSize: 10,
              total:0,
            }
          }
      },
      methods:{
        search(){
          this.getSearch();
        },
        toAddPage(){
          this.$router.push({name: 'Add'});
        },
        editHero(row){
          this.$router.push({name:'Add', params: row});
        },
        sell(row){
          MessageBox.confirm('确定要售出商品么？', '售出提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
          }).then( res => {
            toSellGoods({
              id: row.id
            }).then( res => {
              const { status, data } = res;
              const { code } = data;
              if (status === 200 && code === 0){
                this.$message.success('售出成功!');
                this.getSearch();
              } else {
                this.$message.error('售出失败!')
              }
            });
          }).catch(err => {});
        },
        delHero(row){
          MessageBox.confirm('确定要删除商品么？', '删除提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
          }).then( res => {
            deleteGoods({
              id: row.id
            }).then( res => {
              const { status, data } = res;
              const { code } = data;
              if (status === 200 && code === 0){
                this.$message.success('删除成功!');
                this.getSearch();
              } else {
                this.$message.error('删除失败!')
              }
            });
          }).catch(err => {});
        },
        getSearch(){
          getListAndSearch({
            code: this.ruleForm.code,
          }).then( res => {
            const { status, data,} = res;
            const { code } = data;
            if (status === 200 && code !== 8){
              if (data.Card && data.Card.length > 0){
                this.tableData = data.Card.map( item => {
                  item.price = Number(item.price);
                  return item;
                });
              } else {
                this.tableData = [];
              }
              this.sold = data.selled || 0;
              this.have = data.No_sell || 0;
              this.pagination.total = data.count;
            } else {
              this.$message.error('请求异常!');
            }
          });
        },
        delMany(){
          if (this.selectedArr.length === 0){
            return this.$message.warning('请选择需要删除的商品！');
          }
          MessageBox.confirm('确定要批量删除这些商品么？','批量删除提示', {
            confirmButtonText:'确定',
            cancelButtonText:'取消',
          }).then( res => {
            const seletedUsers = this.selectedArr.map( item => item.id).join(',');
            deleteGoods({
              id: seletedUsers,
            }).then( res => {
              const { status, data } = res;
              const { code } = data;
              if (status === 200 && code === 0){
                this.$message.success('批量删除成功!');
                this.getSearch();
              } else {
                this.$message.error('批量删除失败!')
              }
            });
          }).catch(err => {});
        },
        delAll(){
          this.isDelAll = true;
          deleteAll().then( res => {
            const { status, data } = res;
            const { code } = data;
            this.isDelAll = false;
            if (status === 200 && code === 0){
              this.$message.success('一键删除成功!');
              this.pageSearch();
            }
          }).catch( err => {
            this.$message.error('一键删除出错!请稍后再试!');
          });
        },
        handleSizeChange(pageSize){
          this.pagination.pageSize = pageSize;
          this.pageSearch();
        },
        handleCurrentChange(currentPage){
          this.pagination.currentPage = currentPage;
          this.pageSearch();
        },
        handleSelectionChange(selectedArr){
          this.selectedArr = selectedArr;
        },
        tableRowClassName(row){
          if (row.row.selled === 1){
            return 'sold-row';
          }
        },
        pageSearch(){
          getSoldCount({
            pageSize: this.pagination.pageSize,
            curPage:  this.pagination.currentPage,
          }).then( res => {
            const { status, data } = res;
            const { code } = data;
            if (status === 200 && code !== 8){
              const { No_sell, Card, selled, count } = data;
              if (Card && Card.length > 0){
                this.tableData = Card.map( item => {
                  item.price = Number(item.price);
                  return item;
                });
              } else {
                this.tableData = [];
              }
              this.sold = selled || 0;
              this.have = No_sell || 0;
              this.pagination.total = count || 0;
            } else {
              this.$message.error('请求异常!');
            }
          });
        },
      },
      filters:{
        moneyFormat(money){
          return moneyFormat(money);
        }
      },
      components:{
        TopBox,
      },
      mounted() {
        this.pageSearch();
      }
    }
</script>

<style scoped lang="less">
  /deep/ .el-form-item__label{
    font-size: 16px;
    padding-right: 20px;
  }
  /deep/ .el-table .sold-row {
    background: #f0f9eb;
  }
</style>
<style lang="less">
  .admin-home{
    .admin-home-content{
      line-height: 27px;
      background: #eeeeee;
      .el-card{
        width: 98%;
        margin: 20px auto;
      }
      .line{
        width: 10px;
        height: 27px;
        background: #018EED;
        display: inline-block;
        float: left;
        margin: 16px 26px 0px 26px;
      }
      h2{
        float: left;
        font-size: 20px;
        color: black;
        font-weight: bold;
      }
    }
    .text {
      font-size: 14px;
    }
    .item {
      margin-bottom: 18px;
    }
    .clearfix:before,
    .clearfix:after {
      display: table;
      content: "";
    }
    .clearfix:after {
      clear: both
    }
    .box-card {
      width: 100%;
      height: 100%;
    }
    .el-card__body{
      padding: 20px 45px;
      height: 100%;
    }
    .table-content{
      .pagination{
        margin-top: 10px;
      }
    }
    .devider{
      margin: 0 0 20px 0;
      span{
        font-size: 14px;
        cursor: pointer;
      }
      .is-active{
        color:#409EFF;
      }
    }
  }
  @media screen and (max-width: 1200px){
    .top-box{
      float: right;
    }
  }
</style>

