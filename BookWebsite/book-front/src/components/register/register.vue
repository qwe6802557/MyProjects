<template>
    <div class="background" v-bind:style="{height:windowsHeight}">
        <div class="formDW">
            <el-form label-position="right" label-width="80px" :model="registerData" :rules="rules" ref="registerData">
				<el-form-item label="头像" >
				    <el-upload
				      class="avatar-uploader"
				      :action="uploadUrl"
				      :show-file-list="false"
				      :on-success="handleAvatarSuccess"
					  :auto-upload='true'
					  name="file"
				      >
				      <img v-if="imageUrl" :src="imageUrl" class="avatar">
				      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
				    </el-upload>
				</el-form-item>
                <el-form-item label="用户名" prop="userName">
                    <el-input placeholder="请输入用户名" v-model="registerData.userName"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input placeholder="请输入密码" v-model="registerData.password" type="password"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="passwoRe">
                    <el-input placeholder="请再次密码" v-model="registerData.passwoRe" autocomplete="off" type="password"></el-input>
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
</template>
<script>
import globalData from '../../utils/global_val'
import { register } from '../../api/index.js'
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
				uploadUrl:globalData.sever_url+'user/upload',
				logo:'',
				imageUrl: '',
                windowsHeight:'',
                registerData:{
                    userName:'',
                    password:'',
                    passwordRe:'',
                    email:'',
                    age:'',
                    sex:'',
                    address:''
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
     this.productAge()
     console.log(this.ageList)
  },
  methods: {
    getHeight(){
        this.windowsHeight=globalData.windowsHeight
        //console.log(this.windowsHeight)
    },
    register(){
        
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
    //提交
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
            if (valid) {
				//alert('submit!');
				console.log(this.registerData)
				var data={
					username:this.registerData.userName,
					password:this.registerData.password,
					email:this.registerData.email,
					sex:this.registerData.sex,
					avatar:this.logo,
					age:this.registerData.age,
					address:this.registerData.address
				}
				console.log(data)
				register(data).then(response => {
					console.log(response)
					if (response.code==0){
						this.$store.state.userInfo=response.messageBody.userInfo
						console.log(this.$store.state.userInfo)
						this.$router.push({
						    path: `/`
						})
					}
				})
            } else {
            console.log('error submit!!');
            return false;
            }
        })
    },
	handleAvatarSuccess(res,file) {
		console.log(file)
		console.log(res)
		this.logo=res.messageBody
		this.imageUrl = URL.createObjectURL(file.raw);
	 },
  }
}
</script>

<style scoped>
.background{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
	background-position: center center;
	background-image: url(../../assets/background.jpg);
	background-size: 100% 100%;
}
.top{
    width: 100%;
    height: 10%;
    background: #778899;
    display: flex;
    align-items: center;
    font-size: 1.5rem;
}
.formDW{
    margin: 10% 0 0 0;
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
