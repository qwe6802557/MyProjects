/**
 * jwt工具类
 * @type {{JsonWebTokenError: function(*=, *=): void, TokenExpiredError: function(*=, *): void, sign: function(*=, *=, *=, *=): (undefined|undefined), verify: function(*=, *=, *=, *=): (*), decode: function(*=, *=): (null|{payload: *, signature: *, header: *}), NotBeforeError: function(*=, *): void}}
 */
const jwt = require('jsonwebtoken');


const jwtValidate = (token) => {
    return  jwt.verify(token, '12345Aa', function(err, decoded) {
        if(err) {
            return false;
        } else {
            return true;
        }
    });
};
//生成token
exports.jwtBorn = (userInfo) => {
    const token = jwt.sign({
        userInfo
    }, '12345Aa', {
        expiresIn: '1h' // 1小时 https://github.com/zeit/ms
    });
    return token;
};

exports.authorityValidate = (ctx, next) => {
    if(ctx.request.headers.authorization) {
        const result = jwtValidate(ctx.request.headers['authorization'].split(' ')[1]);
        if (result){
            next();
        } else {
            ctx.body = { code: 8, message: '登录信息已过期，请重新登录!', messageBody: null};
        }
    } else {
        ctx.body = { code: 8, message: '无有效token，请重新登录!', messageBody: null};
    }
};