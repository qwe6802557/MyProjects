<template>
    <div class="background" v-bind:style="{height:windowsHeight}">
		<div class="sousuo">
			<el-button type="primary" @click="add" class="sousuoIcon">发布图书</el-button>
			<el-form ref="form" label-width="120px" class="input">
			  <el-form-item label="图书搜索">
			    <el-input placeholder="请输入图书名字" v-model="bookname"></el-input>
			  </el-form-item>
			</el-form>
			<el-button type="primary" icon="el-icon-search" class="sousuoIcon" @click="select">搜索</el-button>
		</div>
        <div class="center">
			<el-table
				:data="bookData"
				height="95%"
				header-cell-style="padding:0.5% 0.1% 0.5% 0.1%"
				style="width: 100%;font-size:0.8rem"
				cell-style="padding:0.5% 0.1% 0.5% 0.1%"
				>
				<el-table-column
				  prop="bookName"
				  label="书名"
				  align="center">
				</el-table-column>
				<el-table-column
				  label="封面"
				  align="center">
				  <template slot-scope="scope">
				  	<img  class="logo" :src="$store.state.serverUrl+scope.row.bookPic"/>
				  </template>
				</el-table-column>
				<el-table-column
				  prop="bookAuthor"
				  label="作者"
				   align="center">
				</el-table-column>
				<el-table-column
				  prop="publishHouse"
				  label="出版社"
				  align="center">
				</el-table-column>
				<el-table-column
				  prop="bookOriginPrice"
				  label="原价"
				  align="center">
				</el-table-column>
				<el-table-column
				  prop="bookSellPrice"
				  label="现价"
				  align="center">
				</el-table-column>
				<!-- <el-table-column
				  label="状态"
				  align="center">
				  <template slot-scope="scope">
				  	<span>{{scope.row.isBuying==true||scope.row.isWanting==true||scope.row.isBuy==true||scope.row.isGive==true||scope.row.isComment==true?'已出售':'未出售'}}</span>
				  </template>
				</el-table-column> -->
				<!-- <el-table-column
				  label="推荐状态"
				  align="center">
				  <template slot-scope="scope">
					<el-select v-model="scope.row.isHot" size="mini" @change="bookChange(scope.row)">
					  <el-option
						v-for="item in hot"
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
						<el-button size="small" type="primary" @click="updateBook(scope.row)">修改</el-button>
						<el-button size="small" type="danger" @click="deleteBook(scope.row)">删除</el-button>
				  </template>
				</el-table-column>
			</el-table>
		</div>
		<el-dialog :title="tittle" :visible.sync="dialogFormVisible">
		  <el-form >
		    <el-form-item label="图书名字" >
		      <el-input  placeholder="请输入图书名字" v-model="form.bookName"></el-input>
		    </el-form-item>
			<el-form-item label="图书封面" >
			  <el-upload
			    class="avatar-uploader"
			    :action="uploadUrl"
			    :show-file-list="false"
			    :on-success="handleAvatarSuccess">
			    <img v-if="imageUrl" :src="imageUrl" class="avatar">
			    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
			  </el-upload>
			</el-form-item>
			<el-form-item label="图书作者" >
			  <el-input  placeholder="请输入图书作者" v-model="form.bookAuthor"></el-input>
			</el-form-item>
			<el-form-item label="出版公司" >
			  <el-input  placeholder="请输入出版公司" v-model="form.publishHouse"></el-input>
			</el-form-item>
			<el-form-item label="图书原价" >
			  <el-input  placeholder="请输入图书原价" v-model="form.bookOriginPrice"></el-input>
			</el-form-item>
			<el-form-item label="图书现价" >
			  <el-input  placeholder="请输入图书现价" v-model="form.bookSellPrice"></el-input>
			</el-form-item>
			<el-form-item label="图书分类" >
			  <el-select v-model="form.categoryId" placeholder="请选择新旧程度" style="width:100%">
			      <el-option
			      v-for="item in category"
			      :key="item.id"
			      :label="item.categoryName"
			      :value="item.id">
			      </el-option>
			  </el-select>
			</el-form-item>
			<el-form-item label="图书新旧程度" >
			  <el-select v-model="form.bookQuality" placeholder="请选择新旧程度" style="width:100%">
			      <el-option
			      v-for="item in Quality"
			      :key="item.value"
			      :label="item.lable"
			      :value="item.value">
			      </el-option>
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
import { releaseCategory,addBook,indexUserBook,updateBook,deleteBook,hotBook } from '../../api/index.js'
export default {
			data() {
				return {
					recommend:'',
					bookname:'',
					type:'',
					id:'',
					uploadUrl:globalData.sever_url+'user/upload',
					imageUrl:'',
					tittle:'',
			        windowsHeight:'',
					dialogFormVisible:false,
					bookData:[
						{
							name:'基督山',
							writter:'基督山',
							oldPrice:10,
							nowPrice:10,
							from:'基督山',
							older:'基督山',
							state:'出售',
							time:'2020-04-24'
						}
					],
					form:{
						categoryId:'',
						bookName:'',
						bookPic:'',
						bookQuality:'',
						bookOriginPrice:'',
						bookSellPrice:'',
						publishHouse:'',
						bookAuthor:''
					},
					category:[],
					Quality:[
						
					],
					hot:[
						{	
							value:'0',
							label:'不推荐'
						},
						{	value:'1',
							label:'推荐'
						}
					]
				}
		},
  created: function() {
     this.getHeight()
	 this.index()
	 this.getCategory()
	 this.getQuality()
  },
  methods: {
    getHeight(){
        this.windowsHeight=globalData.windowsHeight*0.75
        this.windowsHeight=this.windowsHeight+'px'
        console.log(this.windowsHeight)
    },
	index(){
		var data={
			curPage:1,
			pageSize:9999
		}
		console.log(data)
		indexUserBook(data).then(response => {
			console.log(response)
			this.bookData=response.messageBody
		})
	},
	getQuality(){
		for(var i=1;i<11;i++){
			var data={
				lable:i+'成新',
				value:i
			}
			this.Quality.push(data);
		}
		console.log(this.Quality)
	},
	getCategory(){
		var data={
			
		}
		console.log(data)
		releaseCategory(data).then(response => {
			console.log(response)
			this.category=response.messageBody
		})
	},
	add(){
		this.dialogFormVisible=true
		this.type=0
		this.tittle='添加图书'
	},
	handleAvatarSuccess(res,file){
		console.log(res)
		this.imageUrl = URL.createObjectURL(file.raw);
		this.form.bookPic=res.messageBody
	},
	send(){
		console.log(this.form)
		var data=this.form
		if(this.type==0){
			addBook(data).then(response => {
				console.log(response)
				this.index()
			})
		}else{
			updateBook(data).then(response => {
				console.log(response)
				this.index()
			})
		}
		this.dialogFormVisible=false
	},
	updateBook(row){
		this.type=1
		this.dialogFormVisible=true
		this.tittle='修改图书'
		this.form=row
		this.imageUrl=globalData.sever_url+row.bookPic
		this.form.id=row.id
		var data=this.form
		console.log(data)
	},
	select(){
		var data={
			curPage:1,
			pageSize:9999,
			bookName:this.bookname
		}
		indexBook(data).then(response => {
			console.log(response)
			this.bookData=response.messageBody
		})
	},
	deleteBook(row){
		var data={
			id:row.id
		}
		deleteBook(data).then(response => {
			console.log(response)
			this.index()
		})
	},
	bookChange(row){
		var data={
			id:row.id,
			isHot:row.isHot
		}
		console.log(data)
		hotBook(data).then(response => {
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
    height: 90%;
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
	height: 90px;
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
	width: 100%;
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
  	width: 98%;
  }
  .input>>>.el-form-item__label{
  	font-size: 25px;
  }
  .sousuoIcon{
  	margin: 0 0 0 1%;
  	width: 20%;
  	height: 65%;
  }
</style>
