<template>
  <div id="userComments">
    <el-tabs type="border-card">
      <el-tab-pane label="评论列表">
        <el-form :inline="true" class="demo-form-inline">
          <el-form-item label="搜索用户">
            <el-input clearable placeholder="请输入用户手机号"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" plain>查询</el-button>
          </el-form-item>
          <el-form-item style="float: right">
            <el-button type="primary" plain @click="addFunc">添加评论</el-button>
          </el-form-item>
        </el-form>
        <el-table
          :data="CommentsListData"
          style="width: 100%">
          <el-table-column
            type="selection">
          </el-table-column>
          <el-table-column
            label="评论 ID"
            prop="remarksId">
          </el-table-column>
          <el-table-column
            label="评论时间"
            prop="remarksTime">
          </el-table-column>
          <el-table-column
            label="用户 ID"
            prop="userID">
          </el-table-column>
          <el-table-column
            label="作品 ID"
            prop="workId">
          </el-table-column>
          <el-table-column
            label="评论内容"
            prop="remarksDesc">
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
          <el-form-item label="评论时间" prop="detail_price">
              <el-input v-model="ruleForm.userTel" class="goods_price"></el-input>
          </el-form-item>
          <el-form-item label="用户ID" prop="detail_num">
              <el-input v-model="ruleForm.userPassword" class="goods_price"></el-input>
          </el-form-item>
           <el-form-item label="作品ID" prop="detail_num">
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
  name: 'UserComments',
  data () {
    return {
      pageSize: 10,
      title: '添加评论',
      formVisible: false,
      ruleForm: {
        userID: '',
        workId: ''
      },
      rules: {
        userID: [{
          required: true,
          message: '请输入用户名！'
        }],
        workId: [{
          required: true,
          message: '请输入用户密码！'
        }]
      },
      CommentsListData: [{
        remarksId: 'pl147852',
        userID: '12987122',
        workId: 'zp369852147',
        remarksDesc: '构图清晰',
        remarksTime: '2020-02-15',
        remarksState: '1'
      }, {
        remarksId: 'pl147852',
        userID: '12987122',
        workId: 'zp369852147',
        remarksDesc: '构图清晰',
        remarksTime: '2020-02-15',
        remarksState: '1'
      }]
    }
  },
  methods: {
    addFunc () {
      this.title = '添加评论'
      this.formVisible = true
    },
    removeById () {
      MessageBox.confirm('确定要删除此评论吗?', '删除提示', {
        confirmButtonText: '删除',
        cancelButtonText: '取消'
      }).then(res => {

      }).catch(err => {})
    },
    showEditDialog () {
      this.title = '修改评论'
      this.formVisible = true
    }
  }
}
</script>

<style scoped>

</style>
