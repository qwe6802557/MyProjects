const mongoose=require('mongoose');
const schema=mongoose.Schema;
let objectID=schema.Types.ObjectID;
const bcrypt=require('bcrypt');
const SALT_WORK_FACTOR=10;//定义密码的加盐强度
const userSchema=new schema({
  userId:objectID,
  userName:{
    unique:true,  //表示不重复
    type:String
  },
  passWord:String,
  createAt:{
    type:Date,
    default:Date.now()
  },
  lastLoginAt:{
    type:Date,
    default:Date.now()
  }
});
userSchema.pre('save',function(next){
  bcrypt.genSalt(SALT_WORK_FACTOR,(err,salt)=>{
   if (err){
     return next(err);
   }
   bcrypt.hash(this.passWord,salt,(err,hash)=>{
     if (err){
       return next(err)
     }
     this.passWord=hash;
     next();
   });
  })
})
userSchema.methods={
  comparePassword:(_passWord,passWord)=>{
    return new Promise((resolve,reject)=>{
      bcrypt.compare(_passWord,passWord,(err,isMatch)=>{
        if (!err) resolve(isMatch)
        else reject(err)
      })
    })
  }
}
mongoose.model('User',userSchema);
