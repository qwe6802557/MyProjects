<template>
  <div class="admin-home">
    <div class="admin-home-content">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <i class="line"></i>
          <h2>热门套餐</h2>
        </div>
        <div class="form-area">
              <el-row>
                <el-col :span="3"  :lg="2">
                  <el-button  icon="el-icon-plus" @click="toAddList">添加套餐</el-button>
                </el-col>
                <el-col :span="3"  :lg="2">
                  <el-button type="danger" @click="delMany" icon="el-icon-delete">批量删除</el-button>
                </el-col>
              </el-row>
        </div>
        <div class="table-content" style="padding-bottom: 20px;">
          <el-table
            ref="multipleTable"
            :data="tableData"
            width="100%"
            max-height="605"
            stripe
            border
            v-loading="loading"
            @selection-change="handleSelectionChange"
          >
            <el-table-column
              type="selection"
              width="45"
              align="center"
              fixed="left">
            </el-table-column>
            <el-table-column
              prop="name"
              label="套餐名称"
              align="center"
              width="300"
            >
            </el-table-column>
            <el-table-column
              prop="content"
              label="套餐内容"
              align="center"
            >
            </el-table-column>
            <el-table-column
              label="操作"
              align="center"
              show-overflow-tooltip
              width="300"
            >
              <template slot-scope="scope">
                <el-button @click="delHero(scope.row)" type="danger" icon="el-icon-delete" size="mini" round>删除</el-button>
              </template>
            </el-table-column>
          </el-table>
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
  import { delHot, reqCustomerInfo } from "@/api";

  Vue.use(Card).use(FormItem).use(Form).use(Input).use(Row)
    .use(Col).use(Table).use(TableColumn).use(Pagination)
    .use(Loading);
  export default {
    name: "Home",
    data(){
      return {
        loading: false,
        sold: 0,
        have: 0,
        tableData: [],
        selectedArr: [],
        ruleForm:{
          code:''
        },
      }
    },
    methods:{
      menuSearch(){
        reqCustomerInfo().then( res => {
          const { hot_Taocan } = res.data;
          this.tableData = hot_Taocan;
        }).catch(err => {
          this.$message.error('请求异常!');
        });
      },
      toAddList(){
        this.$router.push({name: 'AddList'})
      },
      delHero(row){
        MessageBox.confirm('确定要删除商品么？', '删除提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then( res => {
          delHot({
            id: row.id,
          }).then( res => {
            this.$message.success('删除套餐成功!')
            this.menuSearch();
          }).catch(err => {
            this.$message.error('请求异常!');
          });
        }).catch(err => {});
      },
      delMany(){
        if (this.selectedArr.length === 0){
          return this.$message.warning('请选择需要删除的商品！');
        }
        MessageBox.confirm('确定要批量删除这些商品么？','批量删除提示', {
          confirmButtonText:'确定',
          cancelButtonText:'取消',
        }).then( res => {
          delHot({
            id: this.selectedArr.map( item => item.id).join(','),
          }).then( res => {
            this.$message.success('批量删除套餐成功!')
            this.menuSearch();
          }).catch(err => {
            this.$message.error('请求异常!');
          });
        }).catch(err => {});
      },
      handleSizeChange(pageSize){
        this.pagination.pageSize = pageSize;
      },
      handleCurrentChange(currentPage){
        this.pagination.currentPage = currentPage;
      },
      handleSelectionChange(selectedArr){
        this.selectedArr = selectedArr;
      },
    },
    filters:{
      moneyFormat(money){
        return moneyFormat(money);
      }
    },
    mounted() {
      this.menuSearch();
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
  .form-area{
    .el-row{
      text-align: left;
      margin-bottom: 20px;
    }
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

