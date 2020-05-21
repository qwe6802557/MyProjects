<template>
    <div class="background" v-bind:style="{height:windowsHeight}">
		<span class="tittle">图书库</span>
		<div class="sousuo">
			<el-form ref="form" label-width="120px" class="input">
			  <el-form-item label="图书搜索">
			    <el-input v-model="bookname"></el-input>
			  </el-form-item>
			</el-form>
			<el-button type="primary" icon="el-icon-search" class="sousuoIcon" @click="selectBook">搜索</el-button>
		</div>
        <div class="center">
			<div class="book" v-for="(item,index) in bookData" :key="item.index" @click="detailsBook(item)">
				<div class="icon">
					<img style="width: 100%;height: 100%;" :src="$store.state.serverUrl+item.bookPic"/>
				</div>
				<div class="font">
					<span class="name">书名:{{item.bookName}}</span>
					<span class="name">作者:{{item.bookAuthor}}</span>
					<span class="name">原价:{{item.bookOriginPrice}}元</span>
					<span class="name">现价:{{item.bookSellPrice}}元</span>
					<span class="name">出版社:{{item.publishHouse}}</span>
					<span class="name">折旧:{{item.bookQuality}}成新</span>
					<span class="name">状态:{{item.isBuying==false&&item.isWanting==false&&item.isBuy==false&&item.isGive==false&&item.isComment==false?'未出售':'已出售'}}</span>
				</div>
			</div>
		</div>
		<div class="bottom">
			<el-pagination
			  background
			  layout="prev, pager, next"
			  :total="100"
			  class="page"
			  :current-page="currentPage"
			  :page-size="pagesize"
			  @current-change="pagination">
			</el-pagination>
		</div>
		<el-dialog :visible.sync="dialogFormVisible" title="图书详情">
		  <div class="details">
			<el-button type="info" @click="askBook" v-if="xrAsk">我要索要</el-button>
			<el-button type="warning" v-if="xrBuy">我要购买</el-button>
		  </div>
		   <el-form >
			  <el-form-item label="索要内容" v-if="xrContent">
				<el-input  placeholder="请输入索要内容" v-model="content"></el-input>
			  </el-form-item>
		  </el-form >
		<div class="details" style="margin-top: 5%;" v-if="xrContent">
			<el-button type="info" @click="send">确认</el-button>
		</div>
		</el-dialog>
	</div>
</template>
<script>
import globalData from '../../utils/global_val'
import { indexBook,askBook } from '../../api/index.js'
export default {
			data() {
				return {
					bookname:'',
					currentPage:1,
					pagesize:10,
					xrAsk:true,
					xrBuy:true,
					xrComment:false,
					bookId:'',
					userId:'',
					xrContent:false,
					content:'',
					dialogFormVisible:false,
			        windowsHeight:'',
					bookData:[
						{
							name:'基督山',
							writter:'基督山',
							oldPrice:10,
							nowPrice:10,
							from:'基督山',
							older:'基督山',
							state:'出售'
						},
						{
							name:'基督山',
							writter:'基督山',
							oldPrice:10,
							nowPrice:10,
							from:'基督山',
							older:'基督山',
							state:'出售'
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
			curPage:this.currentPage,
			pageSize:this.pagesize
		}
		console.log(data)
		indexBook(data).then(response => {
			console.log(response)
			this.bookData=response.messageBody
		})
	},
	detailsBook(item){
		if(this.$store.state.userInfo.username!='游客'){
			this.dialogFormVisible=true
			if(item.isBuying==true||item.isWanting==true||item.isBuy==true||item.isGive==true||item.isComment==true){
				this.xrAsk=false
				this.xrBuy=false
			}else{
				this.xrAsk=true
				this.xrBuy=true
			}
			this.bookId=item.id
			this.userId=item.userId
			this.state=item
		}else{
			this.$alert('检测到您未登录,请登录后在试', '警告', {
			  confirmButtonText: '确定',
			})
		}
	},
	askBook(){
		this.xrContent=true
		var type=1
		return type
	},
	send(type){
		this.xrContent=false
		this.dialogFormVisible=false
		type=this.askBook()
		var data={
			messageContent:this.content,
			type:type,
			userId:this.userId,
			bookId:this.bookId
		}
		console.log(data)
		askBook(data).then(response => {
			console.log(response)
			this.index()
		})
	},
	pagination(currentPage){
		this.currentPage=currentPage
		console.log(this.currentPage)
		this.index()
	},
	selectBook(){
		var data={
			curPage:1,
			pageSize:9999,
			bookName:this.bookname
		}
		indexBook(data).then(response => {
			console.log(response)
			this.bookData=response.messageBody
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
    height: 55%;
	display: flex;
	flex-wrap: wrap;
	background: #FFFFFF;
}
.book{
	width: 20%;
	height: 45%;
	display: flex;
}
.icon{
	width: 50%;
	height: 100%;
	background: fuchsia;
}
.font{
	margin: 0 0 0 1%;
	display: flex;
	flex-direction: column;
}
.name{
	margin: 1.5% 0 0 0;
}
.tittle{
	border-bottom: 1px #CDCDCD solid;
	padding: 0 0 0.5% 0;
	width: 97%;
	margin: 0.5% 0 2% 0;
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
	margin: 0 0 0 2%;
	width: 20%;
	height: 65%;
}
.sousuoIcon1{
	margin: 0 0 0 2%;
	width: 20%;
	height: 65%;
}
.bottom{
	margin: 1% 0 0 0;
	width: 97%;
	display: flex;
}
.input1>>>el-input{
	width: 80%;
}
.input1>>>el-input{
	width: 80%;
}
.input1>>>.el-form-item__label{
	font-size: 25px;
}
.page{
	margin: 0.5% 0 0 45%;
}
.details{
		width: 100%;
		display: flex;
		justify-content:space-around;
}
</style>
