const fs=require('fs');
fs.readFile('./goods.json','utf-8',function (err,data) {
  if (err){
    console.log(err);
  } else{
    let newData=JSON.parse(data);
    let pushData=[];
    newData.RECORDS.map(function (item,index) {
      if (item.IMAGE1!=null){
        pushData.push(item);
      }
    })
    fs.writeFile('./newGoods.json',JSON.stringify(pushData),function (err) {
      if (err){
        console.log(err)
      }else{
        console.log('写入文件成功！');
      }
    })
  }
});
