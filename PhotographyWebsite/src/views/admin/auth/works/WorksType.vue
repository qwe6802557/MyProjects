<template>
  <div id="worksType">
    <el-tabs type="border-card">
      <el-tab-pane label="作品分类">
        <el-form :inline="true" class="demo-form-inline">
          <el-form-item label="搜索分类">
            <el-input clearable placeholder="请输入分类名称"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" plain>查询</el-button>
          </el-form-item>
          <el-form-item style="float: right">
            <el-button type="primary" plain @click="addFunc">添加分类</el-button>
          </el-form-item>
        </el-form>
        <el-table
          :data="typeListData"
          style="width: 100%">
          <el-table-column
            type="selection">
          </el-table-column>
          <el-table-column
            label="分类 ID"
            prop="typeId">
          </el-table-column>
          <el-table-column
            label="分类名称"
            prop="typeName">
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
      width="25%"
      center>
      <span>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
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
import {MessageBox} from "element-ui";

export default {
  name: 'WorksType',
  data () {
    return {
      title: '添加分类',
      formVisible: false,
      pageSize: 10,
      ruleForm: {

      },
      rules: {

      },
      typeListData: [{
        typeId: 'type123451',
        typeName: '全部'
      }, {
        typeId: 'type123452',
        typeName: '人像'
      }, {
        typeId: 'type123453',
        typeName: '风光'
      }, {
        typeId: 'type123454',
        typeName: '商业'
      }, {
        typeId: 'type123455',
        typeName: '记录'
      }, {
        typeId: 'type123456',
        typeName: '生态'
      }, {
        typeId: 'type123457',
        typeName: '建筑'
      }, {
        typeId: 'type123458',
        typeName: '静物'
      }, {
        typeId: 'type123459',
        typeName: '艺术'
      }, {
        typeId: 'type123460',
        typeName: '手机'
      }, {
        typeId: 'type123461',
        typeName: '其他'
      }]
    }
  },
  methods: {
    addFunc () {
      this.title = '添加分类'
      this.formVisible = true
    },
    removeById () {
      MessageBox.confirm('确定要删除此分类吗?', '删除提示', {
        confirmButtonText: '删除',
        cancelButtonText: '取消'
      }).then(res => {

      }).catch(err => {})
    },
    showEditDialog () {
      this.title = '修改分类'
      this.formVisible = true
    }
  }
}
</script>

<style scoped>

</style>
