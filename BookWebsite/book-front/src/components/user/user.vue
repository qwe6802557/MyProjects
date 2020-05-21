<template>
    <div class="background" v-bind:style="{height:windowsHeight}">
		<span class="tittle">用户管理</span>
		<div class="sousuo">
			<el-form ref="form" label-width="120px" class="input">
			  <el-form-item label="用户搜索">
			    <el-input placeholder="请输入用户名" v-model="username"></el-input>
			  </el-form-item>
			</el-form>
			<el-button type="primary" icon="el-icon-search" class="sousuoIcon" @click="select">搜索</el-button>
		</div>
        <div class="center">
			<el-table
				:data="userData"
				height="100%"
				header-cell-style="padding:0.5% 0.1% 0.5% 0.1%"
				style="width: 100%;font-size:0.8rem"
				cell-style="padding:0.5% 0.1% 0.5% 0.1%"
				@row-click="get_index"
				 v-loading="loading"
				>
				<el-table-column
				  prop="username"
				  label="用户名"
				  align="center">
				</el-table-column>
				<el-table-column
				  label="头像"
				  align="center">
				  <template slot-scope="scope">
				  	<img  class="logo" :src="$store.state.serverUrl+scope.row.avatar"/>
				  </template>
				</el-table-column>
				<el-table-column
				  label="年龄"
				  align="center">
				  <template slot-scope="scope">
					<span>{{scope.row.age}}岁</span>
				  </template>
				</el-table-column>
				<el-table-column
				  label="性别"
				  align="center">
				  <template slot-scope="scope">
					  <span>{{scope.row.sex==0?'男':'女'}}</span>
				  </template>
				</el-table-column>
				<el-table-column
				  prop="address"
				  label="地址"
				  align="center">
				</el-table-column>
				<el-table-column
				  prop="caozuo"
				  label="操作"
				  align="center"
				  >
				  <template slot-scope="scope">
						<el-button size="small" type="primary" @click='reset(scope.row)'>密码重置</el-button>
						<el-button size="small" type="danger" @click='userDelete(scope.row)'>删除</el-button>
				  </template>
				</el-table-column>
			</el-table>
		</div>
		<el-dialog title="密码重置" :visible.sync="dialogFormVisible">
		  <el-form >
			<el-form-item label="新密码" >
			  <el-input placeholder="请输入重置密码" v-model="newPassword" ></el-input>
			</el-form-item>
		  </el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible = false">取 消</el-button>
		    <el-button type="primary" @click="reset1">确 定</el-button>
		  </div>
		</el-dialog>
	</div>
</template>
<script>
import globalData from '../../utils/global_val'
import { userList,userDelete,personalUpdate } from '../../api/index.js'
export default {
			data() {
				return {
			        windowsHeight:'',
					dialogFormVisible:false,
					userData:[
						
					],
					username:'',
					newPassword:'',
					newData:''
				}
		},
  created: function() {
     this.getHeight()
	 this.index()
  },
  methods: {
    getHeight(){
        this.windowsHeight=globalData.windowsHeight*0.9
        this.windowsHeight=this.windowsHeight+'px'
        console.log(this.windowsHeight)
    },
	index(data){
		var data={
			curPage:1,
			pageSize:9999,
		}
		console.log(data)
		userList(data).then(response => {
			console.log(response)
			this.userData=response.messageBody
		})
	},
	userDelete(row){
		var data={
			id:row.id
		}
		console.log(data)
		userDelete(data).then(response => {
			console.log(response)
			if(response.code==0){
				this.index()
			}
		})
	},
	select(){
		var data={
			curPage:1,
			pageSize:9999,
			username:this.username
		}
		console.log(data)
		userList(data).then(response => {
			console.log(response)
			this.userData=response.messageBody
		})
	},
	reset(row){
		this.dialogFormVisible=true
		this.newData=row
	},
	reset1(){
		console.log(this.newData)
		var data={
			username:this.newData.username,
			password:this.newPassword,
			email:this.newData.email,
			sex:this.newData.sex,
			avatar:this.newData.avatar,
			age:this.newData.age,
			address:this.newData.address,
			id:this.newData.id
		}
		console.log(data)
		this.dialogFormVisible=false
		personalUpdate(data).then(response => {
			console.log(response)
			if(response.code==0){
				this.$message({
				  message: '修改成功',
				  type: 'success',
				});
				this.index()
			}		
		})
	}
  }
}
</script>

<style scoped>
.background{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
	background: #F4F6F9;
	position: relative;
}
.center{
    width: 97%;
    height: 80%;
	display: flex;
	flex-wrap: wrap;
	background: #FFFFFF;
}
.tittle{
	width: 97%;
	padding: 0 0 0.5% 0;
	border-bottom: 1px solid #CDCDCD;
    margin: 0.5% 0 1% 0;
}
.logo{
	width: 70px;
	height: 70px;
	border-radius: 50px;
	background: firebrick;
}
 .avatar-uploader>>>.el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader>>>.el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .el-input{
	width: 98%;
  }
.sousuo{
	font-size: 50px;
	width: 30%;
	display: flex;
}
.input{
	width: 100%;
}
.input>>>el-input{
	width: 80%;
}
.input>>>.el-form-item__label{
	font-size: 25px;
}
.sousuoIcon{
	margin: 0 0 0 0%;
	width: 20%;
	height: 65%;
}
</style>
