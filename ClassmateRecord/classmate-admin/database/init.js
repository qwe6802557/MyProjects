const mongoose=require('mongoose');
const db='mongodb://localhost/classmateRecord';
const glob=require('glob');
const {resolve}=require("path");

mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);//加上这三个解决mongoose更新警告

exports.initSchema=()=>{
    glob.sync(resolve(__dirname,'./model','**/*.js')).forEach(require)
};  //向外暴露一个初始化表方法

exports.connect = () => {  //向外暴露一个连接数据库方法
    mongoose.connect(db);
    let time = 0;
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
        });
        mongoose.connection.on('error',(err)=>{
            console.log('****数据库连接错误!****');
            if (time<=3){
                time++;
                mongoose.connect(db);
            }else{
                reject(err);
                throw new Error('数据库出现问题，请人为修复....')
            }
        });
        mongoose.connection.once('open',()=>{
            console.log('****数据库连接成功!****');
            resolve();
        })
    })
};