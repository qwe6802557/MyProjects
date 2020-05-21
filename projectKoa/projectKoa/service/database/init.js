const mongoose=require('mongoose');
const db='mongodb://localhost/test';
const glob=require('glob');
const {resolve}=require("path");
exports.initSchema=()=>{
  glob.sync(resolve(__dirname,'./schema','**/*.js')).forEach(require)
};
exports.connect=()=>{
mongoose.connect(db);
let time=0;
return new Promise((resolve,reject)=>{
  mongoose.connection.on('disconneted',()=>{
    console.log('****数据库断开连接!****');
    if (time<=3){
      time++;
      mongoose.connect(db);
    }else{
      reject();
      throw new Error('数据库出现问题，请人为修复....')
    }
  })
  mongoose.connection.on('error',(err)=>{
    console.log('****数据库连接错误!****');
    if (time<=3){
      time++;
      mongoose.connect(db);
    }else{
      reject(err);
      throw new Error('数据库出现问题，请人为修复....')
    }
  })
  mongoose.connection.once('open',()=>{
    console.log('****数据库连接成功!****');
    resolve();
  })
})

}
