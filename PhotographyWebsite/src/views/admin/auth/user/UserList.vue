<template>
  <div id="userList">
    <el-tabs type="border-card">
      <el-tab-pane label="用户列表">
        <el-form :inline="true" class="demo-form-inline">
          <el-form-item label="搜索用户">
            <el-input clearable placeholder="请输入用户手机号"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" plain>查询</el-button>
          </el-form-item>
          <el-form-item style="float: right">
            <el-button type="primary" plain @click="addFunc">添加用户</el-button>
          </el-form-item>
        </el-form>
        <el-table
          :data="userListData"
          style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="用户 ID">
                  <span>{{ props.row.userId }}</span>
                </el-form-item>
                <el-form-item label="注册时间">
                  <span>{{ props.row.userTime }}</span>
                </el-form-item>
                <el-form-item label="用户手机号">
                  <span>{{ props.row.userTel }}</span>
                </el-form-item>
                <el-form-item label="用户密码">
                  <span>{{ props.row.userPassword }}</span>
                </el-form-item>
                <el-form-item label="用户头像">
                  <span>{{ props.row.userImageUrl }}</span>
<!--                  <el-image :src="scope.row.userImageUrl" style="width: 100px;height: 100px"></el-image>-->
                </el-form-item>
                <el-form-item label="用户昵称">
                  <span>{{ props.row.userNickname }}</span>
                </el-form-item>
                <el-form-item label="用户真实姓名">
                  <span>{{ props.row.userName }}</span>
                </el-form-item>
                <el-form-item label="用户性别">
                  <span>{{ props.row.userSex }}</span>
                </el-form-item>
                <el-form-item label="用户地址">
                  <span>{{ props.row.userAddress }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column
            label="用户 ID"
            prop="userId">
          </el-table-column>
          <el-table-column
            label="用户手机号"
            prop="userTel">
          </el-table-column>
          <el-table-column
            label="用户密码"
            prop="userPassword">
          </el-table-column>
          <el-table-column
            label="操作"
            header-align="center"
            align="center"
            width="100">
            <template slot-scope="scope" >
              <el-button type="text" size="mini" @click="showEditDialog">修改</el-button>
              <el-button type="text" size="mini" @click="removeById(scope.row)">冻结</el-button>
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
          <el-form-item label="用户手机号" prop="detail_price">
              <el-input v-model="ruleForm.userTel" class="goods_price"></el-input>
          </el-form-item>
          <el-form-item label="用户密码" prop="detail_num">
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
import { MessageBox } from 'element-ui'
export default {
  name: 'UserList',
  data () {
    return {
      title: '新增用户',
      formVisible: false,
      pageSize: 10,
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
      userListData: [{
        userId: '12987122',
        userTime: '2020-02-15',
        userTel: '18748996060',
        userPassword: 'bs123456',
        userImageUrl: '',
        userNickname: '吃瓜群众一个',
        userName: '黄丹',
        userAddress: '上海市普陀区真北路',
        userSex: '男',
        goodsState: '1'
      }, {
        userId: '12987122',
        userTime: '2019',
        userTel: '12987122',
        userPassword: '好滋好味鸡蛋仔',
        userImageUrl: '江浙小吃、小吃零食',
        userNickname: '荷兰优质淡奶，奶香浓而不腻',
        userName: '上海市普陀区真北路',
        userAddress: '上海市普陀区真北路',
        userSex: '1',
        goodsState: '1'
      }, {
        userId: '12987122',
        userTime: '2019',
        userTel: '12987122',
        userPassword: '好滋好味鸡蛋仔',
        userImageUrl: '江浙小吃、小吃零食',
        userNickname: '荷兰优质淡奶，奶香浓而不腻',
        userName: '上海市普陀区真北路',
        userAddress: '上海市普陀区真北路',
        userSex: '1',
        goodsState: '1'
      }, {
        userId: '12987122',
        userTime: '2019',
        userTel: '12987122',
        userPassword: '好滋好味鸡蛋仔',
        userImageUrl: '江浙小吃、小吃零食',
        userNickname: '荷兰优质淡奶，奶香浓而不腻',
        userName: '上海市普陀区真北路',
        userAddress: '上海市普陀区真北路',
        userSex: '1',
        goodsState: '1'
      }]
    }
  },
  methods: {
    addFunc () {
      this.title = '添加用户'
      this.formVisible = true
    },
    removeById () {
      MessageBox.confirm('确定要冻结此用户吗?', '冻结提示', {
        confirmButtonText: '冻结',
        cancelButtonText: '取消'
      }).then(res => {

      }).catch(err => {})
    },
    showEditDialog () {
      this.title = '修改用户'
      this.formVisible = true
    }
  }
}
</script>

<style scoped>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
