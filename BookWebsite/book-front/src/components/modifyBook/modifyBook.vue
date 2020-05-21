<template>
    <div class="background" v-bind:style="{height:windowsHeight}">
       <!-- tittle -->
        <div class="tittle">
            <span>
                个人中心
            </span>
        </div>
        <!-- center -->
        <div class="center">
			<div class="formDW">
			    <el-form label-position="right" label-width="80px" :model="registerData" :rules="rules" ref="registerData">
			        <el-form-item label="用户头像" prop="userName">
			            <el-upload
			              class="avatar-uploader"
			              action="https://jsonplaceholder.typicode.com/posts/"
			              :show-file-list="false"
			              :on-success="handleAvatarSuccess"
			              :before-upload="beforeAvatarUpload">
			              <img v-if="imageUrl" :src="imageUrl" class="avatar">
			              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
			            </el-upload>
			        </el-form-item>
					<el-form-item label="用户名" prop="userName">
			            <el-input placeholder="请输入用户名" v-model="registerData.userName"></el-input>
			        </el-form-item>
			        <el-form-item label="密码" prop="password">
			            <el-input placeholder="请输入密码" v-model="registerData.password"></el-input>
			        </el-form-item>
			        <el-form-item label="确认密码" prop="passwoRe">
			            <el-input placeholder="请再次密码" v-model="registerData.passwoRe" autocomplete="off"></el-input>
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
			        <el-form-item >
			            <el-button type="primary" @click="submitForm('registerData')" style="margin: 0 0 0 35%">提交</el-button>
			        </el-form-item>
			    </el-form>
			</div>
        </div>
	</div>
</template>
<script>
import globalData from '../../utils/global_val'
export default {
			data() {
			    //密码验证
			    var validatePass = (rule, value, callback) => {
			        console.log('值:'+value)
			        if (value === '') {
			        callback(new Error('请再次输入密码'));
			        } else if (value !== this.registerData.password) {
			        callback(new Error('两次输入密码不一致!'));
			        } else {
			        callback();
			        }
			    };
				return {
			        windowsHeight:'',
					imageUrl: '',
			        registerData:{
			            userName:'',
			            password:'',
			            passwordRe:'',
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
			            passwoRe:[
			                {validator: validatePass, trigger: 'blur'}
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
  },
  methods: {
    getHeight(){
        this.windowsHeight=globalData.windowsHeight*0.9
        this.windowsHeight=this.windowsHeight+'px'
        console.log(this.windowsHeight)
    },
     handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
          },
          beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/jpeg';
            const isLt2M = file.size / 1024 / 1024 < 2;
    
            if (!isJPG) {
              this.$message.error('上传头像图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
              this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
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
