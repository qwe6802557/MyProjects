<template>
    <div id="personal">
        <section class="container">
          <div class="aside-edit" v-if="isEdit">
            <el-upload
              class="avatar-uploader"
              action="https://jsonplaceholder.typicode.com/posts/"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload"
              >
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <h4>用户名:</h4><el-input v-model="userName" style="margin-bottom: 10px;"></el-input>
            <h4>真实姓名:</h4><el-input v-model="realName" style="margin-bottom: 10px;"></el-input>
            <h4>约拍价格:</h4><el-input v-model="price" style="margin-bottom: 10px;"></el-input>
            <h3>Abount Me</h3><el-input v-model="about" style="margin-bottom: 10px;"></el-input>
            <el-button type="primary" round style="margin-top: 10px;" @click="saveEdit">保存</el-button>
          </div>
          <div class="aside-show"  v-if="!isEdit">
            <img :src="imageUrl" alt="" width="150" height="150" style="border-radius: 75px;">
            <h2>{{userName}}</h2>
            <h4>真实姓名:</h4><span>{{realName}}</span>
            <h4>约拍价格:</h4><span>{{price}}元</span>
            <h3>Abount Me</h3><span>{{about}}</span>
            <el-button type="primary" round style="margin-top: 10px;" @click="isEdit = !isEdit">编辑</el-button>
          </div>
      </section>
      <section class="rightBar">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="我的作品" name="first">
            <el-form :model="workForm" ref="workForm" :inline="true" style="text-align: left;margin-top: 20px;margin-left: 20px;">
              <el-form-item label="作品名称">
                <el-input v-model="workForm.name"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button><i class="el-icon-search" style="margin-right: 5px;"></i>搜索</el-button>
              </el-form-item>
            </el-form>
            <el-table
              :data="tableData"
              style="width: 100%"
              max-height="310"
              >
              <el-table-column
                prop="date"
                label="作品编号"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="作品名称"
                width="180">
              </el-table-column>
              <el-table-column
                prop="address"
                label="作品内容">
              </el-table-column>
              <el-table-column
                prop="address"
                label="操作">
                <template slot-scope="scope" >
                  <el-button type="text" size="mini" @click="showEditDialog(scope.row)">修改</el-button>
                  <el-button type="text" size="mini" @click="removeById(scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage4"
              :page-sizes="[100, 200, 300, 400]"
              :page-size="100"
              layout="total, sizes, prev, pager, next, jumper"
              :total="400"
            style="position: absolute;bottom: 10px;left: 20%;">
            </el-pagination>
          </el-tab-pane>
          <el-tab-pane label="我的收藏" name="second">
            <el-form :model="workForm" ref="workForm" :inline="true" style="text-align: left;margin-top: 20px;margin-left: 20px;">
              <el-form-item label="收藏类型">
                <el-input v-model="workForm.name"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button><i class="el-icon-search" style="margin-right: 5px;"></i>搜索</el-button>
              </el-form-item>
            </el-form>
            <el-table
              :data="tableData"
              style="width: 100%"
              max-height="310"
            >
              <el-table-column
                prop="date"
                label="收藏编号"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="收藏类型"
                width="180">
              </el-table-column>
              <el-table-column
                prop="address"
                label="收藏内容">
              </el-table-column>
              <el-table-column
                prop="address"
                label="操作">
                <template slot-scope="scope" >
                  <el-button type="text" size="mini" @click="showEditDialog(scope.row)">修改</el-button>
                  <el-button type="text" size="mini" @click="removeById(scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage4"
              :page-sizes="[100, 200, 300, 400]"
              :page-size="100"
              layout="total, sizes, prev, pager, next, jumper"
              :total="400"
              style="position: absolute;bottom: 10px;left: 20%;">
            </el-pagination>
          </el-tab-pane>
          <el-tab-pane label="我的评论" name="third">
            <el-form :model="workForm" ref="workForm" :inline="true" style="text-align: left;margin-top: 20px;margin-left: 20px;">
              <el-form-item label="评论对象">
                <el-input v-model="workForm.name"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button><i class="el-icon-search" style="margin-right: 5px;"></i>搜索</el-button>
              </el-form-item>
            </el-form>
            <el-table
              :data="tableData"
              style="width: 100%"
              max-height="310"
            >
              <el-table-column
                prop="date"
                label="评论编号"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="评论对象"
                width="180">
              </el-table-column>
              <el-table-column
                prop="address"
                label="评论内容">
              </el-table-column>
              <el-table-column
                prop="address"
                label="操作">
                <template slot-scope="scope" >
                  <el-button type="text" size="mini" @click="showEditDialog(scope.row)">修改</el-button>
                  <el-button type="text" size="mini" @click="removeById(scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage4"
              :page-sizes="[100, 200, 300, 400]"
              :page-size="100"
              layout="total, sizes, prev, pager, next, jumper"
              :total="400"
              style="position: absolute;bottom: 10px;left: 20%;">
            </el-pagination>
          </el-tab-pane>
          <el-tab-pane label="我的消息" name="fourth">
            <el-form :model="workForm" ref="workForm" :inline="true" style="text-align: left;margin-top: 20px;margin-left: 20px;">
              <el-form-item label="消息名称">
                <el-input v-model="workForm.name"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button><i class="el-icon-search" style="margin-right: 5px;"></i>搜索</el-button>
              </el-form-item>
            </el-form>
            <el-table
              :data="tableData"
              style="width: 100%"
              max-height="310"
            >
              <el-table-column
                prop="date"
                label="消息编号"
                width="180">
              </el-table-column>
              <el-table-column
                prop="name"
                label="消息名称"
                width="180">
              </el-table-column>
              <el-table-column
                prop="address"
                label="消息内容">
              </el-table-column>
              <el-table-column
                prop="address"
                label="操作">
                <template slot-scope="scope" >
                  <el-button type="text" size="mini" @click="showEditDialog(scope.row)">修改</el-button>
                  <el-button type="text" size="mini" @click="removeById(scope.row)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage4"
              :page-sizes="[100, 200, 300, 400]"
              :page-size="100"
              layout="total, sizes, prev, pager, next, jumper"
              :total="400"
              style="position: absolute;bottom: 10px;left: 20%;">
            </el-pagination>
          </el-tab-pane>
        </el-tabs>
      </section>
      <div class="dialog-list">
        <el-dialog
          :title="title1"
          :visible.sync="visible1"
          width="30%"
          center>
          <span>
            <el-form :model="ruleForm1"  ref="ruleForm" label-width="150px" class="demo-ruleForm">
              <el-form-item label="作品名称" prop="detail_price">
                  <el-input v-model="ruleForm1.userTel" class="goods_price"></el-input>
              </el-form-item>
              <el-form-item label="作品内容" prop="detail_num">
                  <el-input v-model="ruleForm1.userPassword" class="goods_price"></el-input>
              </el-form-item>
            </el-form>
          </span>
              <span slot="footer" class="dialog-footer">
            <el-button @click="visible1 = false">取 消</el-button>
            <el-button type="primary" @click="visible1 = false">确 定</el-button>
          </span>
        </el-dialog>
        <el-dialog
          :title="title2"
          :visible.sync="visible2"
          width="30%"
          center>
          <span>
            <el-form :model="ruleForm2"  ref="ruleForm" label-width="150px" class="demo-ruleForm">
              <el-form-item label="收藏类型" prop="detail_price">
                  <el-input v-model="ruleForm1.userTel" class="goods_price"></el-input>
              </el-form-item>
              <el-form-item label="收藏内容" prop="detail_num">
                  <el-input v-model="ruleForm1.userPassword" class="goods_price"></el-input>
              </el-form-item>
            </el-form>
          </span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="visible2 = false">取 消</el-button>
            <el-button type="primary" @click="visible2 = false">确 定</el-button>
          </span>
        </el-dialog>
        <el-dialog
          :title="title4"
          :visible.sync="visible4"
          width="30%"
          center>
          <span>
            <el-form :model="ruleForm2"  ref="ruleForm" label-width="150px" class="demo-ruleForm">
              <el-form-item label="消息名称" prop="detail_price">
                  <el-input v-model="ruleForm4.userTel" class="goods_price"></el-input>
              </el-form-item>
              <el-form-item label="消息内容" prop="detail_num">
                  <el-input v-model="ruleForm4.userPassword" class="goods_price"></el-input>
              </el-form-item>
            </el-form>
          </span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="visible4 = false">取 消</el-button>
            <el-button type="primary" @click="visible4 = false">确 定</el-button>
          </span>
        </el-dialog>
        <el-dialog
          :title="title3"
          :visible.sync="visible3"
          width="30%"
          center>
          <span>
            <el-form :model="ruleForm3"  ref="ruleForm" label-width="150px" class="demo-ruleForm">
              <el-form-item label="评论对象" prop="detail_price">
                  <el-input v-model="ruleForm3.userTel" class="goods_price"></el-input>
              </el-form-item>
              <el-form-item label="评论内容" prop="detail_num">
                  <el-input v-model="ruleForm3.userPassword" class="goods_price"></el-input>
              </el-form-item>
            </el-form>
          </span>
          <span slot="footer" class="dialog-footer">
            <el-button @click="visible3 = false">取 消</el-button>
            <el-button type="primary" @click="visible3 = false">确 定</el-button>
          </span>
        </el-dialog>
      </div>
    </div>
</template>

<script>
import { MessageBox } from 'element-ui';
export default {
  name: 'Personal',
  data () {
    return {
      userName: 'undefined丶',
      realName: '张三',
      price: '李四',
      about: 'Ta好像不喜欢介绍自己耶',
      isEdit: false,
      imageUrl: require('@/public/images/user.jpg'),
      activeName: 'first',
      currentPage4: 1,
      visible1: false,
      title1: '修改作品',
      ruleForm1: {

      },
      visible2: false,
      title2: '修改收藏',
      ruleForm2: {

      },
      visible3: false,
      title3: '修改消息',
      ruleForm3: {

      },
      visible4: false,
      title4: '修改评论',
      ruleForm4: {

      },
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      workForm: {
        name: ''
      }
    }
  },
  methods: {
    saveEdit () {
      this.$message.success('保存成功!')
      this.isEdit = !this.isEdit
    },
    handleAvatarSuccess () {

    },
    showEditDialog () {
      this.visible1 = !this.visible1;
    },
    removeById () {
      MessageBox.confirm('确定删除吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(res => {}).catch(err => {})
    },
    beforeAvatarUpload () {

    },
    handleClick () {

    },
    handleSizeChange () {

    },
    handleCurrentChange () {

    }
  }
}
</script>

<style scoped lang="less">
  #personal{
    padding: 60px;
    display: flex;
    flex-direction: row;
    .rightBar{
      margin-left: 70px;
      margin-top: 10px;
      flex: 1;
      display: flex;
      flex-direction: column;
     /deep/ .el-tabs__content{
        height: 473px;
        border-left: 1px #E4E7ED solid;
        border-right: 1px #E4E7ED solid;
        border-bottom: 1px #E4E7ED solid;
      }
      /deep/ .el-tabs__header{
        margin-bottom: 0;
      }
    }
    .aside-edit{
      img{
        width: 150px;
        height: 150px;
        border-radius: 75px;
      }
    }
    h3,h1,h2,h4{
      margin-block-start: 0;
      margin-block-end: 0;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      margin-top: 10px;
    }
    .container{
      margin: 10px;
      font-size: 15px;
      text-align: center;
      padding: 40px 30px;
      width: 400px;
      background: #fff;
      box-shadow: 0 0 4px 0 rgba(0,0,0,.1);
      border-radius: 4px;
      -ms-border-radius: 4px;
      -moz-border-radius: 4px;
      -webkit-border-radius: 4px;
      h2{
        margin-top: 5px;
      }
      h3{
        text-align: left;
        margin-bottom: 15px;
      }
      h4{
        text-align: left;
        font-weight: normal;
        margin-bottom: 10px;
      }
      span{
        display: block;
        text-align: left;
        font-size: 14px;
        color: #a4a4a4;
        border-bottom: 1px solid #f1f1f1;
        margin-bottom: 10px;
      }
    }
  }
</style>
