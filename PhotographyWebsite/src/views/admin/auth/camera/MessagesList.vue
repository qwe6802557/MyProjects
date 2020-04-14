<template>
  <div id="messageList">
    <el-tabs type="border-card">
      <el-tab-pane label="最新动态">
        <el-form :inline="true" class="demo-form-inline">
          <el-form-item label="消息编号">
            <el-input clearable placeholder="请输入消息编号"></el-input>
          </el-form-item>
          <el-form-item label="消息名称">
            <el-input clearable placeholder="请输入消息名称"></el-input>
          </el-form-item>
          <el-form-item label="发布人">
            <el-input clearable placeholder="请输入发布人"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" plain>查询</el-button>
          </el-form-item>
          <el-form-item style="float: right;">
          <el-button type="primary" plain @click="addFunc">新增消息</el-button>
        </el-form-item>
        </el-form>
        <el-table
          :data="messageListData"
          style="width: 100%">
          <el-table-column
            type="selection">
          </el-table-column>
          <el-table-column
            label="消息编号"
            prop="messageId">
          </el-table-column>
          <el-table-column
            label="消息名称"
            prop="messageName">
          </el-table-column>
          <el-table-column
            label="消息内容"
            prop="messageContent">
          </el-table-column>
          <el-table-column
            label="发布人"
            prop="messageLeader">
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
          <el-form-item label="消息编号" prop="detail_price">
              <el-input v-model="ruleForm.userTel" class="goods_price"></el-input>
          </el-form-item>
          <el-form-item label="消息名称" prop="detail_num">
              <el-input v-model="ruleForm.userPassword" class="goods_price"></el-input>
          </el-form-item>
           <el-form-item label="消息内容" prop="detail_num">
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
  name: 'UserScore',
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
      messageListData: [{
        messageId: '12987122',
        messageName: '龙与虎',
        messageContent: '这是一段消息文字',
        messageLeader: '李四'
      }, {
        messageId: '12987122',
        messageName: '龙与虎',
        messageContent: '这是一段消息文字',
        messageLeader: '李四'
      }, {
        messageId: '12987122',
        messageName: '龙与虎',
        messageContent: '这是一段消息文字',
        messageLeader: '李四'
      }]
    }
  },
  methods: {
    addFunc () {
      this.title = '添加消息'
      this.formVisible = true
    },
    removeById () {
      MessageBox.confirm('确定要删除此消息吗?', '删除提示', {
        confirmButtonText: '删除',
        cancelButtonText: '取消'
      }).then(res => {

      }).catch(err => {})
    },
    showEditDialog () {
      this.title = '修改消息'
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
