const Router=require('koa-router');
const router=new Router();
const mongoose=require('mongoose');
router.get('/',async (ctx,next)=>{
  ctx.body='<h1>这是用户首页！</h1>'
})
router.get('/register',async (ctx,next)=>{
  ctx.body='<h1>这是用户注册！</h1>'
})
router.post('/register',async (ctx,next)=>{
  const User=mongoose.model('User');
  let newUser=new User(ctx.request.body)
  await newUser.save().then(data=>{
    ctx.body={
      code:200,
      message:'注册成功!'
    }
  }).catch(err=>{
    ctx.body={
      code: 500,
      message: err
    }
  })
})
router.post('/login',async (ctx,next)=>{
     let loginUser=ctx.request.body;
     let userName=loginUser.userName;
     let passWord=loginUser.passWord;
     const User=mongoose.model('User');
     await User.findOne({
       userName
     }).then(async res=>{
      if (res){
           let newUser=new User();
           await newUser.comparePassword(passWord,res.passWord).then(isMatch=>{
             ctx.body={code:200,message:'登录成功！'}
           }).catch(err=>{
             ctx.body={code:500,message:err}
           })
      }else{
        ctx.body={
          code:201,
          message:'用户不存在!'
        }              }
     }).catch(err=>{
       console.log(err);
       ctx.body={code:500,message:err};
     })

})
module.exports=router;

