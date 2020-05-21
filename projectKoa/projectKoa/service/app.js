const koa=require('koa');
const server=new koa();
const user=require('./appApi/user');
const goods=require('./appApi/goods');
const {connect,initSchema}=require('./database/init');
const mongoose=require('mongoose');
const Router=require('koa-router');
const router=new Router();
const bodyParser=require('koa-bodyparser');
const koaCors=require('koa2-cors');
(async()=>{
await connect();
initSchema();
/*  let oneUser=new User({
    userName: 'qwer',
    passWord: '12312qwe'
  })
  oneUser.save().then((data)=>{
    console.log('插入成功！')
  })*/
})();
server.use(bodyParser());
server.use(koaCors());
//配置user路由
router.use('/user',user.routes());
router.use('/goods',goods.routes());
//挂载路由
server.use(router.routes()).use(router.allowedMethods())
server.use(async(ctx)=>{
  ctx.body='helloWorld';
});
server.listen(3000,()=>{
  console.log('the server is running!')
});
