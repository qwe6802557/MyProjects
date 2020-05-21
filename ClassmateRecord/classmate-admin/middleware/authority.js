const { authorityValidate } = require('../untils/jwt');

module.exports = app => {
  app.get('/user/userInfo', ( req, res, next ) => {
      authorityValidate(req, res, next);
  });
  app.use('/news', ( req, res, next ) => {
      authorityValidate(req, res, next);
  });
};
