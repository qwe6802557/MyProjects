const mongoose = require('mongoose');
const schema = mongoose.Schema;
let objectID = schema.Types.ObjectID;
const bcrypt = require('bcryptjs');
const SALT_WORK_FACTOR = 10;//定义密码的加盐强度
const userSchema = new schema({
    userId:objectID,
    userName:{
        unique: true,  //表示不重复
        type: String
    },
    passWord: String,
    mobile: {
        unique: true,  //表示不重复
        type: String
    },
    eMail: {
        unique: true,  //表示不重复
        type: String
    },
    age: {//表示不重复
        type: Number
    },
    sex: {//表示不重复
        type: String
    },
    address: {//表示不重复
        type: String
    },
    createAt:{
        type: Date,
        default: Date.now
    },
    lastLoginAt:{
        type: Date,
        default: Date.now
    }
});
userSchema.pre('save',function( next ){ // 在保存之前进行加密的方法
    bcrypt.genSalt( SALT_WORK_FACTOR,(err,salt)=>{
        if (err){
            return next(err);
        }
        bcrypt.hash(this.passWord,salt,(err,hash)=>{
            if (err){
                return next(err);
            }
            this.passWord = hash;
            next();
        });
    })
});
userSchema.methods = { //给用户表原型对象绑定在保存之前进行密码解密的方法 调用即new实例对象
    comparePassword:(_passWord,passWord)=>{
        return new Promise((resolve,reject)=>{
            bcrypt.compare(_passWord,passWord,(err,isMatch)=>{
                if (!err) resolve(isMatch)
                else reject(err)
            })
        })
    }
};
mongoose.model('User',userSchema); //发布用户表
