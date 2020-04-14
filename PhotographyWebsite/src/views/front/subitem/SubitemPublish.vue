<template>
    <div id="publish">
      <div class="publish-content center-width">
        <div class="content-one common-panel">
          <h2>发布作品</h2>
        </div>
        <div class="content-two common-panel">
          <h3>作品信息</h3>
          <div class="info-input">
            <input type="text" placeholder="给你的作品取个名字"> <span class="num">30</span>
          </div>
          <div class="info-input"><textarea placeholder="描述一下你的创作脑洞,让更多人了解你~"></textarea> <span class="num">1000</span></div>
        </div>
        <div class="content-three common-panel">
          <h3>上传作品 <span>图片单边不能超过10000像素</span></h3>
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList"
            list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过2MB</div>
          </el-upload>
          <div class="uploaded-area">
          <div class="uploaded-list">
          </div>
          </div>
        </div>
        <div class="confirm">
          <el-button type="warning" round @click="publish">确认发布</el-button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'SubitemPublish',
  data () {
    return {
      fileList: []
    }
  },
  methods: {
    handleRemove () {

    },
    handlePreview () {

    },
    publish () {
      this.$message.success('发布成功!');
    }
  }
}
</script>

<style scoped lang="less">
#publish{
  width: 100%;
  background: #F8F8F8;
  padding: 20px 0;
  h2,h3{
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0px;
    margin-inline-end: 0px
  }
  .common-panel{
    padding: 20px 60px;
    background: #fff;
    margin-bottom: 20px;
    box-shadow: 0 0 4px 0 rgba(0,0,0,.1);
    border-radius: 6px;
    -ms-border-radius: 6px;
    -moz-border-radius: 6px;
    -webkit-border-radius: 6px;
    h3{
      font-size: 15px;
      color: #111;
      padding-bottom: 20px;
      border-bottom: 1px solid #f8f8f8;
      margin-bottom: 30px;
    }
  }
  .center-width{
    width: 1200px;
    margin: 0 auto;
  }
  .publish-content{
    text-align: left;
    h2{
      padding: 0 60px;
      font-size: 24px;
      color: #111;
      height: 100px;
      line-height: 100px;
    }
    .content-one{
      padding: 0;
    }
    .content-two{
      padding: 20px 60px;
      h3{
        font-size: 15px;
        color: #111;
        padding-bottom: 20px;
        border-bottom: 1px solid #f8f8f8;
        margin-bottom: 30px;
      }
      .info-input{
        display: flex;
        width: 1022px;
        margin: 30px 0;
        padding: 0 30px;
        background: #f8f8f8;
        border-radius: 6px;
        -ms-border-radius: 6px;
        -moz-border-radius: 6px;
        -webkit-border-radius: 6px;
        position: relative;
        input,textarea{
          display: inline-block;
          background: #f8f8f8;
          width: 100%;
          font-size: 13px;
          outline: none;
          border: none;
        }
        input{
          height: 40px;
          line-height: 40px;
          &::-webkit-input-placeholder{
            color: #A4A4A4;
          }
        }
        textarea{
          height: 200px;
          padding: 20px 0;
          &::-webkit-input-placeholder{
            color: #A4A4A4;
          }
        }
        .num{
          display: inline-block;
          color: #a4a4a4;
          position: absolute;
          bottom: 10px;
          right: 15px;
          font-size: 13px;
        }
      }
    }
    .el-upload__tip{
      font-size: 12px;
      margin-top: 10px;
    }
    .confirm{
      text-align: center;
    }
  }
}
</style>
