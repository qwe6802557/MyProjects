<template>
  <div class="admin-home">
    <div class="admin-home-content">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <i class="line"></i>
          <h2>其他管理</h2>
        </div>
        <el-row>
          <el-col :span="24"  :lg="16" :xl="8">
            <div class="add-basic">
              <div class="add-title">
                <i class="title-icon"/>
                添加英雄
              </div>
              <div class="add-form" style="margin: 40px 0;">
                <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                  <el-row>
                    <el-col :span="24" :lg="15" :xl="12">
                      <el-form-item label="英雄名称" prop="name" class="password">
                        <el-input v-model="ruleForm.name" type="text" placeholder="请输入英雄名称" style="width: 100%;"></el-input>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="24" :lg="15" :xl="12">
                      <el-form-item label="英雄图片" prop="imageUrl" class="picture">
                        <el-upload
                          class="avatar-uploader"
                          :action="picActionUrl"
                          :show-file-list="false"
                          :on-success="handleAvatarSuccess"
                          :before-upload="beforeAvatarUpload">
                          <img v-if="ruleForm.imageUrl" :src="ruleForm.imageUrl" class="avatar">
                          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                        </el-upload>
                      </el-form-item>
                    </el-col>
                    <el-col :span="24" :lg="8" :xl="4">
                      <el-button type="primary" round style="width: 120px;position: absolute;bottom: 35px;margin-left: 40px;" @click="addHero" :loading="heroLoading">添加</el-button>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="24" :lg="15" :xl="12">
                      <el-form-item label="是否热门" prop="hot">
                        <el-radio-group v-model="ruleForm.hot">
                          <el-radio :label="1">是</el-radio>
                          <el-radio :label="0">否</el-radio>
                        </el-radio-group>
                      </el-form-item>
                    </el-col>
                  </el-row>
                </el-form>
              </div>
            </div>
          </el-col>
          <el-col :span="24"  :lg="16" :xl="8">
            <div class="add-basic">
              <div class="add-title">
                <i class="title-icon"/>
                添加服务器
              </div>
                <el-form :model="ruleForm" status-icon :rules="rules" ref="serverForm" label-width="100px" class="demo-ruleForm" style="margin-top: 40px;">
                  <el-row>
                    <el-col :span="24" :lg="15" :xl="12">
                      <el-form-item label="服务器编号" prop="server" class="password">
                        <el-input v-model="ruleForm.server" type="text" placeholder="请输入服务器编号" style="width: 100%;"></el-input>
                      </el-form-item>
                    </el-col>
                    <el-button type="primary" round style="width: 120px;margin-left: 40px;" @click="addServer" :loading="serverLoading">添加</el-button>
                  </el-row>
                </el-form>
              </div>
          </el-col>
          <el-col :span="24"  :lg="16" :xl="8">
            <div class="add-basic">
              <div class="add-title">
                <i class="title-icon"/>
                批量导入
              </div>
              <el-form  label-width="100px" class="demo-ruleForm" style="margin-top: 40px;">
                <el-row>
                  <el-col :span="24" :lg="15" :xl="12">
                    <el-upload
                      class="upload-demo"
                      drag
                      :action="exportUrl"
                      multiple style="margin-left: 30px;"
                      :on-success="handleExportSuccess"
                      :before-upload="beforeExportUpload"
                      >
                      <i class="el-icon-upload"></i>
                      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                      <div class="el-upload__tip" slot="tip">只能上传excel文件，且不能太大。</div>
                    </el-upload>
                  </el-col>
                </el-row>
              </el-form>
            </div>
          </el-col>
        </el-row>
      </el-card>
    </div>
  </div>
</template>

<script>
  import { Card, Form, FormItem, Row, Col, Input, Upload, Radio, RadioGroup} from 'element-ui';
  import { addHero, addServer } from "@/api";
  import Vue from 'vue';
  import memoryUntil from "@/untils/memoryUntil";
  Vue.use(Card).use(Form).use(FormItem).use(Row).use(Col).use(Input).use(Upload).use(Radio).use(RadioGroup);
  export default {
    name: "Add",
    data(){
      return {
        loading: false,
        heroLoading: false,
        serverLoading: false,
        picActionUrl: '/houduan/public/index.php/index/houtai.Index/Upload_hero?token=' + memoryUntil.token,
        exportUrl: '/houduan/public/index.php/index/houtai.Index/daoRu?token=' + memoryUntil.token,
        ruleForm: {
          name: '',
          image: '',
          export: '',
          imageUrl: '',
          hot:'',
        },
        rules:{
          name:[
            { required: true, message: '请输入英雄名称！', trigger: 'blur' },
          ],
          imageUrl:[
            {required:true,message:'请上传英雄图片！',trigger:'blur'}
          ],
          server:[
            {required:true,message:'请输入服务器编号！',trigger:'blur'}
          ],
          export:[
            {required:true,message:'请上传导入文件！',trigger:'blur'}
          ],
          hot: [
            {required:true,message:'请选择是否热门！',trigger:'blur'}
          ]
        }
      }
    },
    methods: {
      addHero(){ //添加信息
        this.$refs['ruleForm'].validate((boolean) => {
          if (boolean === true){
            addHero({
              name: this.ruleForm.name,
              url: this.ruleForm.imageUrl,
              hot: this.ruleForm.hot,
            }).then( res => {
              const { status, data } = res;
              const { code } = data;
              if (status === 200 && code === 0){
                this.$message.success('添加英雄成功!');
                this.$refs['ruleForm'].resetFields();
              } else {
                this.$message.success('添加英雄失败!');
              }
            }).catch(err => {
              this.$message.error('请求异常!');
            });
          } else {
            this.$message.error('请填写正确信息!');
          }
        });
      },
      addServer(){
        this.$refs['serverForm'].validate((boolean) => {
          if (boolean === true){
            addServer({
              server: this.ruleForm.server,
            }).then( res => {
              const { status, data } = res;
              const { code } = data;
              if (status === 200 && code === 0){
                this.$message.success('添加服务器成功!');
                this.$refs['serverForm'].resetFields();
              } else {
                this.$message.success('添加服务器失败!');
              }
            }).catch(err => {
              this.$message.error('请求异常!');
            });
          } else {
            this.$message.error('请填写正确信息!');
          }
        });
      },
      cancel(){
        this.$router.go(-1);
      },
      handleAvatarSuccess(info){
        const { code, url } = info;
        if (code === 0){
          this.$message.success('上传成功!');
          this.ruleForm.imageUrl = url;
        } else {
          this.$message.error('上传失败！可能登录过期请退出重新登录');
          this.$router.push({name:'Login'});
        }
      },
      beforeAvatarUpload(info){
        const { type } = info;
        if (type !== 'image/jpeg' && type !== 'image/png'){
          return this.$message.warning('只支持jpg/png文件，请检查文件格式!');
        }
      },
      beforeExportUpload(info){
        const { name } = info;
        if (!name.endsWith('.xlsx')){
          return this.$message.error('文件格式错误，只支持xlsx文件');
        }
      },
      handleExportSuccess(info){
        const { code } = info;
        code === 0 && this.$message.success('批量导入成功!') || (
          this.$message.error('批量导入失败,可能登录过期请退出重新登录!')
          && this.$router.push({name:'Login'})
        );
      },
    },
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
<style>
  .avatar-uploader{
    width: 96px;
    height: 96px;
    display: inline-block;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 96px;
    height: 96px;
    line-height: 96px;
    text-align: center;
    border:1px #eee dotted;
    cursor: pointer;
  }
  .avatar {
    width: 96px;
    height: 96px;
    display: block;
  }
</style>
