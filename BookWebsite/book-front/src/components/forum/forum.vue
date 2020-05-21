<template>
    <div class="background" v-bind:style="{height:windowsHeight}">
       <!-- tittle -->
        <div class="tittle">
            <span>
                留言中心
            </span>
        </div>
        <!-- center -->
        <div class="center">
			<div style="width: 100%">
				<el-form label-position="right" label-width="80px" class="liuyan">
				    <el-form-item label="留言分享">
						<el-input
						  type="textarea"
						  :rows="3"
						  placeholder="请输入内容"
						  v-model="liuyan">
						</el-input>
				    </el-form-item>
				</el-form>
				<el-form label-position="right" label-width="80px" class="liuyan">
				    <el-form-item label="留言类型"  prop="sex">
				        <el-select v-model="type" placeholder="请选择留言类型" style="width:20%">
				            <el-option label="求书" value="0"></el-option>
				            <el-option label="晒书" value="1"></el-option>
							<el-option label="推荐书" value="2"></el-option>
				        </el-select>
				    </el-form-item>
					<el-form-item label="">
						<el-button type="primary" style="width: 10%" @click="send">发布留言</el-button>
				    </el-form-item>
				</el-form>
			</div>
			<div class="list"  >
				<div style="border-bottom: 1px dashed #000000;padding: 0.5% 0 0.5% 0;" v-for="(item,index) in listData" :key="item.index">
					<div>
						<el-tag :type="item.wordsType==0?'':(item.wordsType==1?'success':'warning')"  style="margin: 0 1% 0 0;" size="mini">{{item.wordsType==0?'求书':(item.wordsType==1?'晒书':'推荐书')}}</el-tag>
						<span>{{item.words}}</span>
					</div>
					<div class="from">
						<span style="margin: 0 1% 0 0;">来自{{item['user.username']}}</span>
						<span>{{item.createAt}}</span>
						<el-tag type="danger" style="margin: 0 0 0 1%;" size="mini" v-if="item.isSelf==true?true:false" @click="delete1(item)">删除</el-tag>
					</div>
				</div>
			</div>
        </div>
	</div>
</template>
<script>
import globalData from '../../utils/global_val'
import { forumIndex,forumAdd,forumDelete } from '../../api/index.js'
export default {
			data() {		    
				return {
					type:'',
			        windowsHeight:'',
					listData:[
					],
					liuyan:''
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
			pageSize:9999
		}
		console.log(data)
		forumIndex(data).then(response => {
			console.log(response)
			this.listData=response.messageBody
		})
	},
	send(){
		var data={
			words:this.liuyan,
			wordsType:this.type,
			userId:this.$store.state.userInfo.id
		}
		console.log(data)
		forumAdd(data).then(response => {
			console.log(response)
			this.index()
		})
	},
	delete1(item){
		console.log(item)
		var data={
			id:item.id
		}
		console.log(data)
		forumDelete(data).then(response => {
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
	background: #F4F6F9;;
}
.tittle{
    margin: 0.5% 0 1% 0;
    height: 4%;
    width: 97%;
    border-bottom: 2px solid #cdcdcd;;
}
.center{
    width: 97%;
    height: 100%;
    display: flex;
	flex-direction: column;
}
.liuyan{
	width: 70%;
	height: 28%;
	margin: 1.5% 0 0 0;
}
.list{
	padding: 0.5% 1% 0.5% 1%;
	width:68%;
	height: 63%;
	background: #FFFFFF;
	position: relative;
	overflow-y:auto;
}
.from{
	display: flex;
	justify-content:flex-end;
	font-size: 15px;
}
</style>
