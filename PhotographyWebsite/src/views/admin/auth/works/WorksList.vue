<template>
    <div id="worksList">
      <el-tabs type="border-card">
        <el-tab-pane label="作品列表">
          <el-form :inline="true" class="demo-form-inline">
            <el-form-item label="搜索用户">
              <el-input clearable placeholder="请输入用户手机号"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" plain>查询</el-button>
            </el-form-item>
            <el-form-item style="float: right">
              <el-button type="danger" plain size="mini" v-if="multipleSelectionFlag" @click="multiDeleteVisible=true">批量删除</el-button>
              <el-button type="primary" plain @click="addFunc">添加用户</el-button>
            </el-form-item>
          </el-form>
          <el-table
            :data="worksListData"
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="作品 ID">
                    <span>{{ props.row.worksId }}</span>
                  </el-form-item>
                  <el-form-item label="上传时间">
                    <span>{{ props.row.worksTime }}</span>
                  </el-form-item>
                  <el-form-item label="作品名称">
                    <span>{{ props.row.worksName }}</span>
                  </el-form-item>
                  <el-form-item label="作品描述">
                    <span>{{ props.row.worksDesc }}</span>
                  </el-form-item>
                  <el-form-item label="作品地址">
                    <span>{{ props.row.worksUrl }}</span>
                    <!--                  <el-image :src="scope.row.userImageUrl" style="width: 100px;height: 100px"></el-image>-->
                  </el-form-item>
                  <el-form-item label="作品类型">
                    <span>{{ props.row.workType }}</span>
                  </el-form-item>
                  <el-form-item label="用户ID">
                    <span>{{ props.row.userID }}</span>
                  </el-form-item>
                  <el-form-item label="作品价格">
                    <span>{{ props.row.userPrice }}</span>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>
            <el-table-column
              label="作品 ID"
              prop="worksId">
            </el-table-column>
            <el-table-column
              label="作品名称"
              prop="worksName">
            </el-table-column>
            <el-table-column
              label="作品类型"
              prop="workType">
            </el-table-column>
            <el-table-column
              label="用户ID"
              prop="userID">
            </el-table-column>
            <el-table-column
              label="上传时间"
              prop="worksTime">
            </el-table-column>
            <el-table-column label="审核状态"  >
              <template slot-scope="scope">
                <el-tag type="success" v-if="scope.row.worksState === 1">审核通过</el-tag>
                <el-tag type="warning" v-if="scope.row.worksState === 2">审核未通过</el-tag>
                <el-tag type="danger" v-else>未审核</el-tag>
              </template>
            </el-table-column>
            <el-table-column
              label="操作"
              header-align="center"
              align="center"
              width="100">
              <template slot-scope="scope">
                <el-button  type="text" size="small"  @click="showEditDialog(scope.row.worksId)">修改</el-button>
                <el-button type="text" size="small" @click="removeById(scope.row.worksId)">删除</el-button>
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
      <!--添加轮播图-->
      <el-dialog title="添加轮播图"   :visible.sync="addDialogVisible" width="50%" @close="addDialogClosed">
        <!-- 内容主体区域 -->
        <el-form :model="addForm" ref="addFormRef" label-width="70px">
          <el-form-item label="作品名称"  >
            <el-select
              v-model="addForm.goodsId"
              filterable
              remote
              reserve-keyword
              placeholder="请输入关键词"
              :remote-method="remoteMethod"
              :loading="loading"
              @change="currentSel">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="轮播图片" >
            <el-upload
              class="avatar-uploader"
              multiple
              action="http://123.207.18.77:80/imagesUpload?name=file"
              :show-file-list="false"
              :on-success="handleSuccess"
              :headers="headerObj">
              <img v-if="addForm.bannerImageUrl" :src="addForm.bannerImageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="展示状态" prop="bannerState">
            <el-select v-model="addForm.bannerState" placeholder="请选择是否展示">
              <el-option label="是" value="1"></el-option>
              <el-option label="否" value="0"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <!-- 底部区域 -->
        <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addInfo">确 定</el-button>
      </span>
      </el-dialog>
      <!--修改轮播图对话框-->
      <el-dialog title="修改轮播图" :visible.sync="editDialogVisible" width="50%" >
        <el-form  :model="editForm" ref="editFormRef" label-width="70px">
          <!--内容区开始-->

          <el-form-item label="商品名称"  prop="goodsName">
            <el-select
              v-model="editForm.goodsId"
              filterable
              remote
              reserve-keyword
              placeholder="请输入关键词"
              :remote-method="remoteMethod"
              :loading="loading">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="轮播图片" prop="bannerImageUrl">
            <el-upload
              class="avatar-uploader"
              action="http://123.207.18.77:80/imagesUpload?name=file"
              :show-file-list="false"
              multiple
              :on-success="handleSuccess1"
              :headers="headerObj">
              <img v-if="editForm.bannerImageUrl" :src="editForm.bannerImageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="展示状态" prop="bannerState">
            <el-select v-model="editForm.bannerState" placeholder="请选择是否展示">
              <el-option label="是" value="1"></el-option>
              <el-option label="否" value="0"></el-option>
            </el-select>
          </el-form-item>
          <!--内容结束-->
        </el-form>
        <span slot="footer" class="dialog-footer">
        <el-button @click="editDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editInfo">确 定</el-button>
      </span>
      </el-dialog>
      <!-- 批量删除弹框-->
      <el-dialog :visible.sync="multiDeleteVisible" title="提示" width="30%">
        <span>确定要删除吗</span>
        <span slot="footer">
          <el-button type="primary" @click="multiDelete">确 定</el-button>
          <el-button @click="multiDeleteVisible = false">取 消</el-button>
        </span>
      </el-dialog>
    </div>
</template>

<script>
import { Dialog, Select, Upload, Tag, MessageBox } from 'element-ui'
import Vue from 'vue'
Vue.use(Dialog, Select, Upload).use(Tag)
export default {
  name: 'WorksList',
  data () {
    return {
      pageNum: 1,
      total: 0,
      pageSize: 10,
      loading: false,
      editForm: {},
      addDialogVisible: false,
      options: [],
      headerObj: {},
      editDialogVisible: false,
      worksListData: [{
        worksId: 'py12987122',
        worksTime: '2020-02-15',
        worksName: '吃瓜群众一个',
        worksDesc: '江湖晚景',
        worksUrl: '',
        workType: '风光',
        userID: '12987122',
        userPrice: '30',
        worksState: '1'
      }],
      addForm: {

      },
      multipleSelectionFlag: false,
      multiDeleteVisible: false,
      multipleSelection: ''
    }
  },
  created () {
    this.getDataList()
  },
  methods: {
    add () {
      this.addDialogVisible = true
      this.getDataLists()
    },
    async getDataLists () {
      console.log('开始请求数据')
      const { data: res } = await this.$http.get('/goods/queryAllGoods')
      if (res.code !== 200) {
        console.log('判断code')
        return this.$message.error('获取失败！')
      }
      this.Datalists = res.data
      for (let i = 0; i < this.Datalists.length; i++) {
        let t = { value: this.Datalists[i].goodsId, label: this.Datalists[i].goodsName }
        this.list.push(t)
      }
    },

    remoteMethod (query) {
      if (query !== '') {
        this.loading = true
        setTimeout(() => {
          this.loading = false
          this.options = this.list.filter(item => {
            return item.label.toLowerCase()
              .indexOf(query.toLowerCase()) > -1
          })
        }, 200)
      } else {
        this.options = []
      }
    },
    // 轮播分页查询
    async getDataList () {
      const { data: res } = await this.$http.post('/banner/pageBanner/' + this.pageNum + '/' + this.pageSize)
      if (res.code !== 200) {
        this.DataList = res.data.records
        return this.$message.error('获取失败！')
      }
      this.DataList = res.data.records
      this.total = res.data.total
      console.log(res)
    },
    handleSizeChange (newSize) {
      console.log(newSize)
      this.pageSize = newSize
      this.getDataList()
    },
    handleCurrentChange (newPage) {
      this.pageNum = newPage
      this.getDataList()
    },
    // 轮播新增
    async addInfo () {
      // 可以发起添加用户的网络请求
      const { data: res } = await this.$http.post('/banner/addBanner', {
        bannerImageUrl: this.addForm.bannerImageUrl,
        bannerState: this.addForm.bannerState,
        goodsId: this.addForm.goodsId
      })
      if (res.code !== 200) {
        this.$message.error('添加失败！')
      }

      this.$message.success('添加成功！')
      // 隐藏添加用户的对话框
      this.addDialogVisible = false
      // 自定义获取数据方法
      this.getDataList()
    },
    handleSuccess (response) {
      console.log('图片上传成功返回信息')
      console.log(response)
      this.addForm.bannerImageUrl = response.data[0]
      // 1. 拼接得到一个图片信息对象
      // const picInfo = { pic: response.data.tmp_path }
      // 2. 将图片信息对象，push 到pics数组中
      // this.addForm.pics.push(picInfo)
      // console.log(this.addForm)
    },
    handleSuccess1 (response) {
      console.log('图片上传成功返回信息')
      console.log(response)
      this.addForm.bannerImageUrl = response.data[0]
      // 1. 拼接得到一个图片信息对象
      // const picInfo = { pic: response.data.tmp_path }
      // 2. 将图片信息对象，push 到pics数组中
      // this.addForm.pics.push(picInfo)
      // console.log(this.addForm)
    },
    currentSel (value) {
      console.log(value)
    },
    addFunc () {
      this.addDialogVisible = true
    },
    addDialogClosed () {
      this.addForm.bannerImageUrl = ''
      this.addForm.bannerState = ''
      this.addForm.goodsId = ''
      this.$refs.addFormRef.resetFields()
    },
    // 删除轮播图
    async removeById (id) {
      MessageBox.confirm('此操作将永久删除该轮播图信息, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(res => {

      }).catch(err => {

      })
      /* // 弹框询问用户是否删除数据
      const confirmResult = await this.$confirm(
        '此操作将永久删除该轮播图信息, 是否继续?',
        '提示',
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }
      ).catch(err => err)
      if (confirmResult !== 'confirm') {
        return this.$message.info('已取消删除')
      }

      const { data: res } = await this.$http.delete('/banner/deleteBannerById/' + id)

      if (res.code !== 200) {
        return this.$message.error('删除失败！')
      }
      this.$message.success('删除成功！')
      // 更换获取数据方法
      this.getDataList() */
    },
    // 修改轮播图片
    async editInfo () {
      // 发起修改用户信息的数据请求
      const { data: res } = await this.$http.post(
        '/banner/updateBannerById',
        {
          bannerId: this.editForm.bannerId,
          bannerImageUrl: this.editForm.bannerImageUrl,
          bannerState: this.editForm.bannerState,
          goodsId: this.editForm.goodsId
        }
      )

      if (res.code !== 200) {
        return this.$message.error('更新轮播图信息失败！')
      }

      // 关闭对话框
      this.editDialogVisible = false
      // 自定义刷新数据
      this.getDataList()
      // 提示修改成功
      this.$message.success('更新轮播图信息成功！')
    },
    async showEditDialog (id) {
      /* this.getDataLists()
      const { data: res } = await this.$http.get('/banner/queryBannerById/' + id)

      if (res.code !== 200) {
        return this.$message.error('查询信息失败！')
      }
      this.editForm = res.data */
      this.editDialogVisible = true
    },
    editDialogClosed () {
      this.$refs.editFormRef.resetFields()
    },
    // 批量删除

    handleSelectionChange (val) {
      console.log(val)
      this.multipleSelection = val
      this.multipleSelectionFlag = true
      if (this.multipleSelection.length === 0) {
        // 如不进行判断则勾选完毕后批量删除按钮还是会在
        this.multipleSelectionFlag = false
      }
    },

    async multiDelete () {
      this.multiDeleteVisible = false
      let checkArr = this.multipleSelection // multipleSelection存储了勾选到的数据
      let params = []
      checkArr.forEach(function (item) {
        params.push(item.customerServiceId) // 添加所有需要删除数据的id到一个数组，post提交过去
      })
      console.log(params)
      const { data: res } = await this.$http.delete('/banner/deleteBannerListByIds', { data: { ids: params } })

      if (res.code !== 200) {
        return this.$message.error('删除失败！')
      }
      this.$message.success('删除成功！')
      // 更换获取数据方法
      this.getDataList()
    }

  }
}
</script>

<style scoped>

</style>
