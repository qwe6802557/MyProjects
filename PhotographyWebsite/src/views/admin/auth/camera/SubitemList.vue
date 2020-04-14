<template>
  <div id="subitemList">
    <el-tabs type="border-card">
      <el-tab-pane label="活动管理">
        <el-form :inline="true" class="demo-form-inline">
          <el-form-item label="活动编号">
            <el-input clearable placeholder="请输入活动编号"></el-input>
          </el-form-item>
          <el-form-item label="活动名称">
            <el-input clearable placeholder="请输入活动名称"></el-input>
          </el-form-item>
          <el-form-item label="发布人">
            <el-input clearable placeholder="请输入发布人"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" plain>查询</el-button>
          </el-form-item>
          <el-form-item style="float: right;">
            <el-button type="primary" plain @click="addFunc">新增活动</el-button>
          </el-form-item>
        </el-form>
        <el-table
          :data="subitemListData"
          style="width: 100%">
          <el-table-column
            type="selection">
          </el-table-column>
          <el-table-column
            label="活动编号"
            prop="subitemId">
          </el-table-column>
          <el-table-column
            label="活动名称"
            prop="subitemName">
          </el-table-column>
          <el-table-column
            label="活动内容"
            prop="subitemContent">
          </el-table-column>
          <el-table-column
            label="发布人"
            prop="subitemLeader">
          </el-table-column>
          <el-table-column
            label="操作"
            header-align="center"
            align="center"
            width="100">
            <template slot-scope="scope" >
              <el-button type="text" size="mini" @click="showEditDialog(scope.row)">修改</el-button>
              <el-button type="text" size="mini" @click="removeById(scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <!-- 分页区域 -->
        <div style="padding-top: 15px">
          <el-pagination class="page-order" @size-change="handleSizeChange" @current-change="handleCurrentChange"
                         :current-page="pageNum" :page-sizes="[5, 10, 15]" :page-size="pageSize"
                         layout="total, sizes, prev, pager, next, jumper" :total="total">
          </el-pagination>
        </div>
      </el-tab-pane>
    </el-tabs>
    <el-dialog
      :title="title"
      :visible.sync="formVisible"
      width="30%"
      center>
      <span>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="活动编号" prop="detail_price">
              <el-input v-model="ruleForm.userTel" class="goods_price"></el-input>
          </el-form-item>
          <el-form-item label="活动名称" prop="detail_num">
              <el-input v-model="ruleForm.userPassword" class="goods_price"></el-input>
          </el-form-item>
          <el-form-item label="活动内容" prop="detail_num">
              <el-input v-model="ruleForm.userPassword" class="goods_price"></el-input>
          </el-form-item>
          <el-form-item label="发布人" prop="detail_num">
              <el-input v-model="ruleForm.userPassword" class="goods_price"></el-input>
          </el-form-item>
        </el-form>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="formVisible = false">取 消</el-button>
        <el-button type="primary" @click="formVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {MessageBox} from "element-ui";

export default {
  name: 'SubitemList',
  data () {
    return {
      pageNum: 1,
      pageSize: 10,
      total: 0,
      title: '',
      formVisible: false,
      ruleForm: {
        userTel: '',
        userPassword: ''
      },
      rules: {
        userTel: [{
          required: true,
          message: '请输入用户名！'
        }],
        userPassword: [{
          required: true,
          message: '请输入用户密码！'
        }]
      },
      subitemListData: [{
        subitemId: '12987122',
        subitemName: '龙与虎',
        subitemContent: '这是一段消息文字',
        subitemLeader: '李四'
      }, {
        subitemId: '12987122',
        subitemName: '龙与虎',
        subitemContent: '这是一段消息文字',
        subitemLeader: '李四'
      }, {
        subitemId: '12987122',
        subitemName: '龙与虎',
        subitemContent: '这是一段消息文字',
        subitemLeader: '李四'
      }]
    }
  },
  methods: {
    addFunc () {
      this.title = '添加活动'
      this.formVisible = true
    },
    removeById () {
      MessageBox.confirm('确定要删除此活动吗?', '删除提示', {
        confirmButtonText: '删除',
        cancelButtonText: '取消'
      }).then(res => {

      }).catch(err => {})
    },
    showEditDialog () {
      this.title = '修改活动'
      this.formVisible = true
    },
    handleSizeChange () {

    },
    handleCurrentChange () {

    }
  }
}
</script>

<style scoped>

</style>
