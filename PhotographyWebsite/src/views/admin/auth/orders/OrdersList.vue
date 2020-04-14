<template>
  <div id="ordersList">
    <el-tabs type="border-card">
      <el-tab-pane label="作品订单">
        <el-form :inline="true" class="demo-form-inline">
          <el-form-item label="订单编号">
            <el-input clearable placeholder="请输入订单编号"></el-input>
          </el-form-item>
          <el-form-item label="用户名称">
            <el-input clearable placeholder="请输入用户名称"></el-input>
          </el-form-item>
          <el-form-item label="用户编号">
            <el-input clearable placeholder="请输入用户编号"></el-input>
          </el-form-item>
          <el-form-item label="作品名称">
            <el-input clearable placeholder="请输入作品名称"></el-input>
          </el-form-item>
          <el-form-item label="发布人">
            <el-input clearable placeholder="请输入发布人"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" plain>查询</el-button>
          </el-form-item>
          <el-form-item style="float: left;margin-left: 10px;">
            <el-button type="primary" plain @click="addFunc">添加订单</el-button>
          </el-form-item>
        </el-form>
        <el-table
          :data="ordersListData"
          style="width: 100%">
          <el-table-column
            type="selection">
          </el-table-column>
          <el-table-column
            label="订单编号"
            prop="ordersId">
          </el-table-column>
          <el-table-column
            label="用户名称"
            prop="ownerName">
          </el-table-column>
          <el-table-column
            label="用户编号"
            prop="ownerId">
          </el-table-column>
          <el-table-column
            label="作品名称"
            prop="goodsName">
          </el-table-column>
          <el-table-column
            label="发布人"
            prop="ordersLeader">
          </el-table-column>
          <el-table-column
            label="操作"
            header-align="center"
            align="center"
            >
            <template slot-scope="scope" >
              <el-button type="text" size="mini" @click="showEditDialog(scope.row)">查看</el-button>
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
      width="25%"
      center>
      <span>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item label="订单编号" prop="detail_price">
              <el-input v-model="ruleForm.userTel" class="goods_price"></el-input>
          </el-form-item>
          <el-form-item label="用户名称" prop="detail_price">
              <el-input v-model="ruleForm.userTel" class="goods_price"></el-input>
          </el-form-item>
          <el-form-item label="用户编号" prop="detail_price">
              <el-input v-model="ruleForm.userTel" class="goods_price"></el-input>
          </el-form-item>
          <el-form-item label="作品名称" prop="detail_price">
              <el-input v-model="ruleForm.userTel" class="goods_price"></el-input>
          </el-form-item>
          <el-form-item label="分类名称" prop="detail_price">
              <el-input v-model="ruleForm.userTel" class="goods_price"></el-input>
          </el-form-item>
          <!--<el-form-item label="用户密码" prop="detail_num">
              <el-input v-model="ruleForm.userPassword" class="goods_price"></el-input>
          </el-form-item>-->
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
import { MessageBox } from 'element-ui'
export default {
  name: 'OrdersList',
  data () {
    return {
      pageNum: 1,
      pageSize: 10,
      total: 0,
      title: '新增订单',
      formVisible: false,
      ruleForm: {
        userID: '',
        workId: ''
      },
      rules: {
        userID: [{
          required: true,
          message: '请输入用户名！'
        }]
      },
      ordersListData: [{
        ordersId: '12987122',
        ordersOwner: '',
        ownerName: '张三',
        ownerId: '1212121',
        goodsName: '龙与虎',
        ordersLeader: '李四'
      }, {
        ordersId: '12987122',
        ordersOwner: '',
        ownerName: '张三',
        ownerId: '1212121',
        goodsName: '龙与虎',
        ordersLeader: '李四'
      }, {
        ordersId: '12987122',
        ordersOwner: '',
        ownerName: '张三',
        ownerId: '1212121',
        goodsName: '龙与虎',
        ordersLeader: '李四'
      }]
    }
  },
  methods: {
    addFunc () {
      this.title = '新增订单'
      this.formVisible = true
    },
    removeById () {
      MessageBox.confirm('确定要删除此吗?', '删除提示', {
        confirmButtonText: '冻结',
        cancelButtonText: '取消'
      }).then(res => {

      }).catch(err => {})
    },
    showEditDialog () {
      this.title = '修改订单'
      this.formVisible = true
    }
  }
}
</script>

<style scoped>
  .el-form--inline .el-form-item{
    margin-right: 25px;
  }
</style>
