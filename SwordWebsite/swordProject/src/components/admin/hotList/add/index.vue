<template>
  <div class="admin-home">
    <div class="admin-home-content">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <i class="line"></i>
          <h2>套餐管理</h2>
        </div>
        <div class="add-basic">
          <div class="add-title">
            <i class="title-icon"/>
            添加套餐
          </div>
          <div class="add-form" style="margin: 40px 0;">
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
              <el-row>
                <el-col :span="24" :lg="8" :xl="6">
                  <el-form-item label="套餐名称" prop="hotName" class="password">
                    <el-input v-model="ruleForm.hotName" type="text" placeholder="请输入套餐名称" style="width: 60%;"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </el-form>
          </div>
        </div>
        <div class="add-basic">
          <div class="add-title">
            <i class="title-icon"/>
            套餐卡组
          </div>
          <div class="content-image">
            <el-row>
              <div :class="['each-image']" :data-id="item.id" v-for="(item, index) in imageList" :key="item.id" @click="selectChange(item, index)">
                <i class="el-icon-success"></i>
                <div class="circle">
                  <img :src="item.url" alt="pic" title="剑与远征人物卡" :onerror="error_img">
                  <span>{{item.name}}</span>
                </div>
              </div>
            </el-row>
          </div>
        </div>
        <div class="add-button">
          <el-row>
            <el-col :span="24" style="text-align: center;">
              <el-button type="info" round  style="width: 120px;margin-right: 90px;" @click="cancel">取消</el-button>
              <el-button type="primary" round style="width: 120px;" @click="addInfo" :loading="loading">添加</el-button>
              <!--<el-button type="primary" round style="width: 120px;" @click="editInfo" :loading="loading" v-if = "this.$route.params.cList">保存</el-button>-->
            </el-col>
          </el-row>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
  import { Card, Form, FormItem, Row, Col, Input, } from 'element-ui';
  import { addPageInit, addHot,} from '@/api';
  import Vue from 'vue';
  Vue.use(Card).use(Form).use(FormItem).use(Row).use(Col).use(Input);
  export default {
    name: "AddList",
    data(){
      return {
        imageList:[],
        selectedArr: [],
        loading: false,
        error_img: 'this.src="'+require('@/assets/errorimg.png')+'"',
        ruleForm: {
          name: '',
        },
        rules:{
          hotName:[
            { required: true, message: '请输入套餐名称！', trigger: 'blur' },
            /*{pattern:/^[a-zA-Z0-9_]+$/,message: '用户名必须是英文丶数字或下划线组成',trigger: 'blur'}*/
          ],
        }
      }
    },
    methods: {
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
      picToSelect(){ //修改时查询选中图片
        const heros = document.querySelectorAll('.each-image');
        this.$route.params.cList.map( cItem => {
          heros.forEach( item => {
            if ((cItem.id - 0) === (item.dataset.id - 0)){
              item.classList.add('selected');
              this.selectedArr.push(cItem);
            }
          });
          return cItem;
        });
      },
      addInfo(){ //添加信息
        this.loading = true;
        this.$refs['ruleForm'].validate((boolean)=>{
          if (boolean==true){
            if (this.selectedArr.length === 0){
              this.loading = false;
              return this.$message.warning('请选择添加的英雄组!');
            }
            const hero = this.selectedArr.map( item => item.name ).join(',');
            addHot({
              name: this.ruleForm.hotName,
              hero,
            }).then(res => {
              const { status, data } = res;
              const { code } = data;
              if (status === 200 && code === 0 ){
                this.$message.success('添加成功!');
                this.$router.push({name:'HotList'});
                this.loading = false;
              } else {
                this.loading = false;
                this.$message.error('添加失败!');
              }
            }).catch(err => {
              this.$message.error('添加异常，请检查是否添加了相同账号!');
              this.loading = false;
            });
          }else {
            this.loading = false;
            this.$message.error('请您输入正确的信息！')
          }
        })
      },
      cancel(){
        this.$router.go(-1);
      },
    },
    mounted() {
      if (this.$route.params.cList){
        this.ruleForm = this.$route.params;
      }
      addPageInit().then( res => {
        const {code, hero, server } = res.data;
        if (res.status === 200  && code !== 8){
          this.imageList = hero;
          this.serverList = server;
          this.$nextTick( () => {
            if (this.$route.params.cList){
              this.picToSelect();
            }
          });
        } else {
          this.$message.error('请求异常！');
        }
      });
    }
  }
</script>

<style scoped lang="less">
  .add-basic{
    text-align: left;
    font-size: 15px;
    .add-title{
      font-weight: bolder;
      color: #5f8ac9;
      position: relative;
      .title-icon{
        display: inline-block;
        width: 0;
        height: 0;
        border: 6px solid;
        border-color: transparent transparent transparent #5f8ac9;
      }
    }
  }
  .content-image{
    padding: 40px 80px;
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
</style>
