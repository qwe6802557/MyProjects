<template>
    <div class="background" v-bind:style="{height:windowsHeight}">
       <!-- tittle -->
        <div class="tittle">
            <span>
                欢迎光临本系统
            </span>
        </div>
        <!-- center -->
        <div class="center">
            <!-- 公告 -->
            <div class="announcement">
                <div class="tongzhi">
                    <div class="tongzhiIcon">

                    </div>
                    <span>
                        重要通知
                    </span>
                </div>
				<div class="content" v-for="(item,index) in important" :key="item.index" @click="XRimportant(item)">
					<img src="../../assets/annoincement/zhongyaoIcon.png" style="width: 32px;height: 32px;margin: 0 1% 0 1%;">
					<span>{{item.announceTitle}}</span>
					<span class="time">{{item.createAt}}</span>
				</div>
            </div>
            <!-- 注意事项 -->
            <div class="zhuyi">
				<div class="tongzhi">
				    <div class="tongzhiIcon1">
				
				    </div>
				    <span>
				        注意事项
				    </span>
				</div>
				<div class="content" v-for="(item,index) in attention" :key="item.index" @click="XRattention(item)">
					<img src="../../assets/annoincement/zhongyaoIcon.png" style="width: 32px;height: 32px;margin: 0 1% 0 1%;">
					<span>{{item.announceTitle}}</span>
					<span class="time">{{item.createAt}}</span>
				</div>
            </div>
        </div>
		<div class="bottom">
			<div class="book" v-for="(item,index) in recommend" :key="item.index">
				<div class="bookIcon">
					<img style="width: 100%;height: 100%;" :src="$store.state.serverUrl+item.bookPic"/>
				</div>
				<span style="margin: 2% 0 0 0;border-bottom:1px solid #000000;">书名:{{item.id}}</span>
				<span style="border-bottom:1px solid #000000">作者:{{item.bookAuthor}}</span>
			</div>
		</div>
		<el-dialog :title="dialogTittle" :visible.sync="dialogFormVisible">
		  <el-form >
			<el-form-item label="公告内容" >
			  <div>
				  {{content}}
			  </div>
			</el-form-item>
		  </el-form>
		  <div slot="footer" class="dialog-footer">
		    <el-button type="primary" @click="close">关闭</el-button>
		  </div>
		</el-dialog>
	</div>
</template>
<script>
import globalData from '../../utils/global_val'
import { announcementIndex } from '../../api/index.js'
export default {
		data() {
			return {
				dialogFormVisible:false,
				important:[
					
				],
				content:'',
				recommend:[
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
			
		}
		console.log(data)
		announcementIndex(data).then(response => {
			console.log(response)
			this.important=response.messageBody.important
			this.attention=response.messageBody.attention
			this.recommend=response.messageBody.commentBook
		})
	},
    XRimportant(item){
		this.dialogFormVisible=true,
		this.content=item.announceContent	
	},
	XRattention(item){
		this.dialogFormVisible=true,
		this.content=item.announceContent	
	},
	close(){
		this.dialogFormVisible=false
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
}
.tittle{
    margin: 0.5% 0 1% 0;
    height: 4%;
    width: 97%;
    border-bottom: 2px solid #cdcdcd;;
}
.center{
    width: 97%;
    height: 55%;
    display: flex;
    justify-content: space-between;
}
.announcement{
    width: 61%;
    height: 98%;
    background: forestgreen;
    padding: 0.5% 0 0 1%;
	background: #FFFFFF;
}
.zhuyi{
    width: 36%;
    height: 98%;
	padding: 0.5% 0 0 1%;
	background: #FFFFFF;
	overflow-y:auto;
}
.tongzhi{
    border-bottom: 1px solid #cdcdcd;
    width: 95%;
    display: flex;
    align-items: flex-end;
	padding: 0 0 1% 0;
	margin: 0 0 0.5% 0;
	overflow-y:auto;
}
.tongzhiIcon{
    height: 40px;
    width: 40px;
	background-image: url(../../assets/annoincement/tongzhiIcon.png);
    background-position: center center;
    background-size: 100% 100%;
    margin: 0 1% 0 0;
}
.tongzhiIcon1{
    height: 38px;
    width: 38px;
	background-image: url(../../assets/annoincement/zhuyi.png);
    background-position: center center;
    background-size: 100% 100%;
    margin: 0 1% 0 0;
}
.content{
	width: 95%;
	height: 9%;
	background: #FFFFFF;
	padding: 0.5% 0 0.5% 0;
	display: flex;
	align-items: center;
	position: relative;
	border-bottom: 1px solid #CDCDCD;
}
.content1{
	width: 95%;
	height: 9%;
	background: #FFFFFF;
	padding: 0.5% 0 0.5% 0;
	display: flex;
	align-items: center;
	position: relative;
	border-bottom: 1px solid #CDCDCD;
	margin: 1% 0 0 0;
}
.time{
	position: absolute;
	right: 3%;
}
.bottom{
	width: 97%;
	height: 30%;
	margin: 1% 0 0 0;
	background: #FFFFFF;
	display: flex;
}
.book{
	width: 10%;
	height: 100%;
	display: flex;
	flex-direction: column;
	margin: 0 1% 0 0;
	align-items: center;
}
.bookIcon{
	width: 100%;
	height: 75%;
	background:darkcyan;
}
</style>
