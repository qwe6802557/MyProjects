<template>
    <div class="background" v-bind:style="{height:windowsHeight}">
		<span class="tittle">公告管理</span>
		<div class="sousuo">
			<el-button type="primary" @click="add" class="sousuoIcon">添加公告</el-button>
			<el-form ref="form" label-width="120px" class="input">
			  <el-form-item label="公告搜索">
			    <el-input placeholder="请输入查询的公告" v-model="tittle"></el-input>
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
				>
				<el-table-column
				  prop="id"
				  label="id"
				  align="center">
				</el-table-column>
				<el-table-column
				  label="标题"
				  align="center"
				  prop="announceTitle">
				</el-table-column>
				<el-table-column
				  label="内容"
				  align="center"
				  prop="announceContent">
				</el-table-column>
				<!-- <el-table-column
				  prop="address"
				  label="状态"
				  align="center">
				  <template slot-scope="scope">
					<el-select v-model="scope.row.announceStatus==0?'禁用':'启用'" size="mini" >
					  <el-option
						v-for="item in options"
						:key="item.value"
						:label="item.label"
						:value="item.value">
					  </el-option>
					</el-select>
				  </template>
				</el-table-column> -->
				<el-table-column
				  prop="caozuo"
				  label="操作"
				  align="center"
				  >
				  <template slot-scope="scope">
						<el-button size="small" type="primary" @click='update(scope.row)'>修改</el-button>
						<el-button size="small" type="danger" @click='Delete(scope.row)'>删除</el-button>
				  </template>
				</el-table-column>
			</el-table>
		</div>
		<el-dialog :title="dialogTittle" :visible.sync="dialogFormVisible">
		  <el-form >
			<el-form-item label="公告标题" >
			  <el-input placeholder="请输入公告标题" v-model="form.announceTitle" ></el-input>
			</el-form-item>
			<el-form-item label="公告内容" >
			  <el-input  
				type="textarea"
				:rows="3"
				placeholder="请输入内容"
				v-model="form.announceContent">
			  </el-input>
			</el-form-item>
			<el-form-item label="公告类型" >
			  <el-select v-model="form.categoryId" placeholder="请选择公告类型" style="width:100%">
			      <el-option label="重要通知" value="1"></el-option>
			      <el-option label="注意事项" value="2"></el-option>
			  </el-select>
			</el-form-item>
		  </el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible = false">取 消</el-button>
		    <el-button type="primary" @click="send">确 定</el-button>
		  </div>
		</el-dialog>
	</div>
</template>
<script>
import globalData from '../../utils/global_val'
import { announceIndex,announceAdd,announceUpdate,announceDelete } from '../../api/index.js'
export default {
			data() {
				return {
					tittle:'',
					id:'',
					type:'',
			        windowsHeight:'',
					dialogFormVisible:false,
					form:{
						announceTitle:'',
						announceContent:'',
						categoryId:'',
						announceStatus: ""
					},
					userData:[
						
					],
					username:'',
					newPassword:'',
					newData:'',
					options:[
					{
					  value:0,
					  label:'禁用'
					},
					{
					  value:1,
					  label:'启用'
					}
				  ]
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
	index(){
		var data={
			curPage:1,
			pageSize:9999,
		}
		console.log(data)
		announceIndex(data).then(response => {
			console.log(response)
			this.userData=response.messageBody
		})
	},
	add(){
		this.type=0
		this.dialogTittle='添加公告'
		this.form.announceTitle=''
		this.form.announceContent=''
		this.form.announceStatus=''
		this.dialogFormVisible=true
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
			announceTitle:this.tittle
		}
		console.log(data)
		announceIndex(data).then(response => {
			console.log(response)
			this.userData=response.messageBody
		})
	},
	send(){
		if(this.type==0){
			var data={
				categoryId:this.form.categoryId,
				announceTitle:this.form.announceTitle,
				announceContent:this.form.announceContent,
				announceStatus:1
			}
			console.log(data)
			announceAdd(data).then(response => {
				console.log(response)
				this.index()
			})
		}else{
			var data={
				id:this.id,
				categoryId:this.form.categoryId,
				announceTitle:this.form.announceTitle,
				announceContent:this.form.announceContent,
				announceStatus:this.form.announceStatus
			}
			console.log(data)
			announceUpdate(data).then(response => {
				console.log(response)
				this.index()
			})
		}
		this.dialogFormVisible=false
	},
	update(row){
		this.type=1
		this.dialogTittle='修改公告'
		this.dialogFormVisible=true
		this.form=row
		this.id=row.id
	},
	Delete(row){
		var data={
			id:row.id,
		}
		console.log(data)
		announceDelete(data).then(response => {
			console.log(response)
			this.index()
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
