<template>
    <div class="background" v-bind:style="{height:windowsHeight}">
       <!-- tittle -->
        <div class="tittle">
            <span>
                个人中心
            </span>
        </div>
		<el-tabs v-model="activeName" @tab-click="handleClick" style="margin: 0 0 0 1%;">
		    <el-tab-pane label="个人信息" name="first">
				<div class="center">
					<div class="formDW">
					    <el-form label-position="right" label-width="80px" :model="registerData" :rules="rules" ref="registerData">
					        <el-form-item label="用户头像" prop="userName">
					            <el-upload
					              class="avatar-uploader"
					              :action="uploadUrl"
					              :show-file-list="false"
					              :on-success="handleAvatarSuccess"
					              :auto-upload='true'
					              name="file">
					              <img v-if="imageUrl" :src="imageUrl" class="avatar">
					              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
					            </el-upload>
					        </el-form-item>
							<el-form-item label="用户名" prop="userName">
					            <el-input placeholder="请输入用户名" v-model="registerData.username"></el-input>
					        </el-form-item>
					        <el-form-item label="密码" prop="password">
					            <el-input placeholder="请输入要修改的密码" v-model="registerData.Rpassword" type="password"></el-input>
					        </el-form-item>
					        <el-form-item label="邮箱" prop="email">
					            <el-input placeholder="请输入邮箱" v-model="registerData.email"></el-input>
					        </el-form-item>
					        <el-form-item label="年龄" prop="age">
					            <el-select v-model="registerData.age" placeholder="请选择年龄" style="width:100%">
					                <el-option
					                v-for="item in ageList"
					                :key="item.value"
					                :label="item.label"
					                :value="item.value">
					                </el-option>
					            </el-select>
					        </el-form-item>
					        <el-form-item label="性别"  prop="sex">
					            <el-select v-model="registerData.sex" placeholder="请选择性别" style="width:100%">
					                <el-option label="女" value="0"></el-option>
					                <el-option label="男" value="1"></el-option>
					            </el-select>
					        </el-form-item>
					        <el-form-item label="地址" prop="address">
					            <el-input  placeholder="请输入地址" v-model="registerData.address"></el-input>
					        </el-form-item>
					        <el-form-item  label="">
					            <el-button type="primary" style="margin: 0 0 0 35%" @click="subform">提交</el-button>
					        </el-form-item>
					    </el-form>
					</div>
				</div>
			</el-tab-pane>
		    <el-tab-pane label="图书管理" name="second" v-if="xrBook">
				
			</el-tab-pane>
			<router-view v-if="xr"></router-view>
		</el-tabs>
        <!-- center -->
	</div>
</template>
<script>
import globalData from '../../utils/global_val'
import { personalUpdate } from '../../api/index.js'
export default {
			data() {
				return {
					xrBook:false,
					xr:false,
					activeName: 'first',
					uploadUrl:globalData.sever_url+'user/upload',
			        windowsHeight:'',
					imageUrl: '',
					logo:this.$store.state.userInfo.avatar,
			        registerData:{
			            username:'',
			            password:'',
						Rpassword:'',
			            email:'',
			            age:'',
			            sex:'',
			            address:'',
			        },
			        ageList:[],
			        rules: {
			            userName: [
			                { required: true, message: '请输入用户名', trigger: 'blur' },
			                { min: 2, max: 8, message: '长度在 2 到 8 个字符', trigger: 'blur' }
			            ],
			            password:[
			                {required: true, message: '请输入密码', trigger: 'blur'}
			            ],
			            email:[
			                { required: true, message: '请输入邮箱', trigger: 'blur' }
			            ],
			            age:[
			                { required: true, message: '请选择年龄', trigger: 'change' }
			            ],
			            sex:[
			                {required: true, message: '请选择性别', trigger: 'change'}
			            ],
			            address:[
			                 {required: true, message: '请输入地址', trigger: 'blur'}
			            ]
			        }
				}
		},
  created: function() {
     this.getHeight()
	 this.index()
	 this.productAge()
  },
  methods: {
    getHeight(){
        this.windowsHeight=globalData.windowsHeight*0.9
        this.windowsHeight=this.windowsHeight+'px'
        console.log(this.windowsHeight)
    },
	//初始化
	index(){
		this.registerData=this.$store.state.userInfo
		this.imageUrl=this.$store.state.serverUrl+this.$store.state.userInfo.avatar
		if(this.$store.state.userInfo.identity=="1"){
			this.xrBook=false
		}else{
			this.xrBook=true
		}
	},
	productAge(){
	    for(var i=1;i<100;i++){
	        var data={
	            value:i,
	            label:i
	        }
	        this.ageList.push(data);
	    }
	},
     handleAvatarSuccess(res, file) {
		console.log(res)
		this.imageUrl = URL.createObjectURL(file.raw);
		this.logo=res.messageBody
	},
	subform(){
		if(this.registerData.Rpassword!=''&&this.registerData.Rpassword!=null){
			var data={
				username:this.registerData.username,
				password:this.registerData.Rpassword,
				email:this.registerData.email,
				sex:this.registerData.sex,
				avatar:this.logo,
				age:this.registerData.age,
				address:this.registerData.address,
				id:this.$store.state.userInfo.id
			}
		}else{
			var data={
				username:this.registerData.username,
				email:this.registerData.email,
				sex:this.registerData.sex,
				avatar:this.logo,
				age:this.registerData.age,
				address:this.registerData.address,
				id:this.$store.state.userInfo.id
			}
		}
		
		console.log(data)
		personalUpdate(data).then(response => {
			console.log(response)
			if(response.code==0){
				this.$message({
				  message: '修改成功',
				  type: 'success',
				});
			this.$store.state.userInfo=response.messageBody
			this.$store.state.logo=globalData.sever_url+response.messageBody.avatar
				//this.index()
			}		
		})
	},
	handleClick(tab) {
		console.log(tab);
		if(tab.index==0){
			this.xr=false
			this.$router.push({
			    path: `/personal`,
			})
		}else if(tab.index==1){
			this.xr=true
			this.$router.push({
			    path: `/personalBook`,
			})
		}
	}
  },
	
}
</script>

<style scoped>
.background{
    width: 100%;
    display: flex;
    flex-direction: column;
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
}
.tongzhi{
    border-bottom: 1px solid #cdcdcd;
    width: 95%;
    display: flex;
    align-items: flex-end;
	padding: 0 0 1% 0;
	margin: 0 0 0.5% 0;
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
.formDW{
    margin: 2% 0 0 0;
    width: 20%;
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
</style>
