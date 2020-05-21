const basicURL='http://localhost:8080/'
const LOCALURL='http://localhost:3000/'
const URL={
  getMainInfo:basicURL+'static/jsonDatas.json',
  getGoodsInfo:LOCALURL+'goods/getGoodsInfo',
  getCatoryList:LOCALURL+'goods/getCatoryList',
  getCatorySubList:LOCALURL+"goods/getCatorySubList",
  getCatorySubGoods:LOCALURL+'goods/getCatorySubGoods',
  registerUser:LOCALURL+'user/register',
  loginUser:LOCALURL+'user/login',
}
module.exports=URL
