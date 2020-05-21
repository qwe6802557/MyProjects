<template>
    <div class="background" v-bind:style="{height:windowsHeight}">
		<span class="tittle">消息管理</span>
        <div class="center">
			<el-table
				:data="messageData"
				height="95%"
				header-cell-style="padding:0.5% 0.1% 0.5% 0.1%"
				style="width: 100%;font-size:0.8rem"
				cell-style="padding:0.5% 0.1% 0.5% 0.1%"
				>
				<el-table-column
				  label="图书名字"
				  align="center">
				  <template slot-scope="scope">
				  	<span>{{scope.row['book.bookName']}}</span>
				  </template>
				</el-table-column>
				<el-table-column
				  label="申请人"
				   align="center">
				   <template slot-scope="scope">
				   	<span>{{scope.row['user.userName']}}</span>
				   </template>
				</el-table-column>
				<el-table-column
				  prop="createdAt"
				  label="申请时间"
				  align="center">
				</el-table-column>
				<el-table-column
				  prop="messageTitle"
				  label="申请类型"
				  align="center">
				</el-table-column>
				<el-table-column
				  prop="messageContent"
				  label="申请内容"
				  align="center">
				  </el-table-column>
				  <el-table-column
				    label="电话号码"
				    align="center">
					<template slot-scope="scope">
						<span>{{scope.row.messagePhone==""?'无':scope.row.messagePhone}}</span>
				    </template>
					</el-table-column>
				<el-table-column
				  prop="caozuo"
				  label="操作"
				  align="center"
				  >
				  <template slot-scope="scope">
						<el-button size="small" type="success" @click="messageAgree(scope.row)" v-if="scope.row.messageType=='0'?true:false">同意</el-button>
						<el-button size="small" type="danger" @click="messageRefuse(scope.row)" v-if="scope.row.messageType=='0'?true:false">拒绝</el-button>
						<el-button size="small" type="primary" v-if="scope.row.messageType!='0'?true:false" @click="read(scope.row)">确定</el-button>
				  </template>
				</el-table-column>
			</el-table>
		</div>
		<el-dialog title="发送详情" :visible.sync="dialogFormVisible">
		  <el-form >
		    <el-form-item label="联系电话" >
		      <el-input  placeholder="请输入您的联系电话" v-model="phone"></el-input>
		    </el-form-item>
		  </el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button @click="dialogFormVisible = false">取 消</el-button>
		    <el-button type="primary" @click="checkSend">确 定</el-button>
		  </div>
		</el-dialog>
	</div>
</template>
<script>
import globalData from '../../utils/global_val'
import { messageIndex,handleMessage,readMessage } from '../../api/index.js'
export default {
			data() {
				return {
			        windowsHeight:'',
					dialogFormVisible:false,
					messageData:[
						
					],
					phone:'',
					sendData:''
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
			
		}
		console.log(data)
		messageIndex(data).then(response => {
			console.log(response)
			this.messageData=response.messageBody
		})
	},
	messageAgree(row){
		this.dialogFormVisible=true
		this.sendData={
			id:row.id,
			type:1,
			phone:row.messagePhone
		}
	},
	messageRefuse(row){
		this.sendData={
			id:row.id,
			type:2,
			phone:row.messagePhone
		}
		this.send(this.sendData)
	},
	send(data){
		handleMessage(data).then(response => {
			console.log(response)
			this.index()
		})
	},
	checkSend(){
		this.sendData.phone=this.phone
		console.log(this.sendData)
		this.dialogFormVisible=false
		this.send(this.sendData)
	},
	read(row){
		var data={
			id:row.id
		}
		console.log(data)
		readMessage(data).then(response => {
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
    height: 85%;
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
	width: 60%;
  }
</style>
