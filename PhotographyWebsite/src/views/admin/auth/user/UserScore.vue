<template>
  <div id="userScore">
    <el-tabs type="border-card">
      <el-tab-pane label="评分列表">
        <el-form :inline="true" class="demo-form-inline">
          <el-form-item label="搜索用户">
            <el-input clearable placeholder="请输入用户手机号"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" plain>查询</el-button>
          </el-form-item>
        </el-form>
        <el-table
          :data="scoreListData"
          style="width: 100%">
          <el-table-column
            type="selection">
          </el-table-column>
          <el-table-column
            label="用户 ID"
            prop="userId">
          </el-table-column>
          <el-table-column
            label="约拍评分"
            prop="shootScore">
          </el-table-column>
          <el-table-column
            label="操作"
            header-align="center"
            align="center"
            width="100">
            <template slot-scope="scope" >
              <el-button type="text" size="mini" @click="removeById(scope.row)">清零</el-button>
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
  </div>
</template>

<script>
import { MessageBox } from 'element-ui'

export default {
  name: 'UserScore',
  data () {
    return {
      pageSize: 10,
      pageNum: 0,
      total: 0,
      scoreListData: [{
        userId: '12987122',
        shootScore: '88'
      }]
    }
  },
  methods: {
    removeById () {
      MessageBox.confirm('确定要清零吗?', '清零提示', {
        confirmButtonText: '清零',
        cancelButtonText: '取消'
      }).then(res => {

      }).catch(err => {})
    },
    handleSizeChange () {

    }
  }
}
</script>

<style scoped>

</style>
