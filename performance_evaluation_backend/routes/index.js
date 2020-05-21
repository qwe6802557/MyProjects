module.exports = {
  //用户信息
  'POST /user/add':'UserController.add',//添加用户信息
  'POST /user/login': 'UserController.login',//登录
  'POST /user/logout':'UserController.logout',//退出登录
  'GET /user/getAll': 'UserController.getAll',//获取所有用户
  'GET /user/getInfo': 'UserController.getInfo',//获取用户个人信息
  'PUT /user/update': 'UserController.update',//修改用户信息接口
  'DELETE /user/delete': 'UserController.delete',//删除用户信息
  //级别
  'POST /level/add': 'LevelController.add',//添加级别
  'GET /level/getAll': 'LevelController.getAll',//获取所有级别
  'POST /level/update': 'LevelController.update',//修改级别
  'DELETE /level/delete': 'LevelController.delete',//删除级别
  //教学教研考评模块相关接口
  //教学教研子模块
  // 'POST /teachRes/add': 'TeachResController.add',//添加教学教研模块
  // 'GET /teachRes/getOwn': 'TeachResController.getOwnTeachRes',//用户获取自己的教学教研数据清单
  // 'DELETE /teachRes/delete':'TeachResController.delete',//删除某一条教学教研模块
  // 'PUT /teachRes/update': 'TeachResController.update',//修改某条数据
  // 'GET /teachRes/getAll': 'TeachResController.getAll',//获取所有教学教研数据清单
  //工作量模块
  'POST /teachWorkload/add': 'TeachWorkloadController.add',//添加工作量模块数据
  'GET /teachWorkload/getOwn': 'TeachWorkloadController.getOwnTeachWorkload',//用户获取自己的工作量数据清单
  'PUT /teachWorkload/update': 'TeachWorkloadController.update',//修改某条工作量清单数据
  'DELETE /teachWorkload/delete': 'TeachWorkloadController.delete',//删除某条工作量清单数据
  'GET /teachWorkload/getAll': 'TeachWorkloadController.getAll',//获取所有工作量数据清单
  'GET /teachWorkload/getBase': 'TeachWorkloadController.getBase',//获取某一条数据的form
  // //教学工程和其他模块
  // 'POST /teachPro/add': 'TeachProController.add',//添加教学工程和其他模块数据
  // 'GET /teachPro/getOwn': 'TeachProController.getOwnTeachPro',//用户获取自己的教学工程和其他模块
  // 'PUT /teachPro/update': 'TeachProController.update',//修改某条数据
  // 'DELETE /teachPro/delete': 'TeachProController.delete',//删除某条数据
  // 'GET /teachPro/getAll': 'TeachProController.getAll',//获取所有数据
  'POST /Xkjs/add': 'XkjsController.add',//添加工作量模块数据
  'GET /Xkjs/getOwn': 'XkjsController.getOwnXkjs',//用户获取自己的工作量数据清单
  'PUT /Xkjs/update': 'XkjsController.update',//修改某条工作量清单数据
  'DELETE /Xkjs/delete': 'XkjsController.delete',//删除某条工作量清单数据
  'GET /Xkjs/getAll': 'XkjsController.getAll',//获取所有工作量数据清单
  'GET /Xkjs/getBase': 'XkjsController.getBase',//获取某一条数据的form
}

