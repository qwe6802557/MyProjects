const Router=require('koa-router');
const router=new Router();
const mongoose=require('mongoose');
const fs=require('fs');
router.get('/insert',async (ctx)=>{
  fs.readFile('./newGoods.json','utf-8',function (err,data) {
    if (err){
      console.log(err)
    } else {
      let newData=JSON.parse(data);
      const Goods=mongoose.model('Goods');
      let count=1;
      newData.map((item,value)=>{
        let newGoods=new Goods(item);
        newGoods.save().then(()=>{
          count++;
          console.log(count);
        }).catch(err=>{
          console.log(err);
        })
      })
    }

  })
})
router.get('/insertC',async (ctx)=>{
  fs.readFile('./category.json','utf-8',function (err,data) {
    if (err){
      console.log(err)
    } else {
      let newData=JSON.parse(data);
      const Category=mongoose.model('Category');
      let count=1;
      newData.RECORDS.map((item,value)=>{
        let newCategory=new Category(item);
        newCategory.save().then(()=>{
          count++;
          console.log(count);
        }).catch(err=>{
          console.log(err);
        })
      })
    }

  })
})
router.get('/insertCs',async (ctx)=>{
  fs.readFile('./category_sub.json','utf-8',function (err,data) {
    if (err){
      console.log(err)
    } else {
      let newData=JSON.parse(data);
      const CategoryS=mongoose.model('CategorySub');
      let count=1;
      newData.RECORDS.map((item,value)=>{
        let newCategory=new CategoryS(item);
        newCategory.save().then(()=>{
          count++;
          console.log(count);
        }).catch(err=>{
          console.log(err);
        })
      })
    }

  })
})
router.post('/getGoodsInfo',async (ctx)=>{
     try {const goodsId=ctx.request.body.goodsId;
          const Goods=mongoose.model('Goods');
          let result=await Goods.findOne({ID:goodsId})
          ctx.body={code:200,message:result}
     }catch(err){
       ctx.body={code:200,message:err}
     }
})
router.get('/getCatoryList',async (ctx)=>{
  try {
    const Category=mongoose.model('Category');
    let result=await Category.find();
    ctx.body={
      code:200,
      message:result
    };
  }catch{
    ctx.body={
      code:500,
      message:'Error'
    };
  }
})
router.post('/getCatorySubList',async (ctx)=>{
  try {
    let categoryId=ctx.request.body.categoryId;
    const CategorySub=mongoose.model('CategorySub');
    let result=await CategorySub.find({
      MALL_CATEGORY_ID:categoryId
    });
    ctx.body={
      code:200,
      message:result
    };
  }catch{
    ctx.body={
      code:500,
      message:'Error'
    };
  }
})
router.post('/getCatorySubGoods',async (ctx)=>{
  try {
    let categorySubId=ctx.request.body.catorySubId;
    let page=ctx.request.body.page;//当前页数
    let num=10;//每页显示的条数
    let start=(page-1)*num; //从多少条开始
    let goods=mongoose.model('Goods');
    let result=await goods.find({SUB_ID: categorySubId}).skip(start).limit(num);
    ctx.body={
      code:200,
      message:result
    }
  }catch{
    ctx.body={
      code:500,
      message:'Error'
    }
  }
})
module.exports=router;
