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
        expiresIn: '0.15h' // 1天 https://github.com/zeit/ms
    });
    return token;
};

exports.authorityValidate = (req, res, next) => {
    if(req.headers.authorization) {
        const result = jwtValidate(req.headers['authorization'].split(' ')[1]);
        if (result){
            next();
        } else {
            res.send( { code: 8, message: '登录信息已过期，请重新登录!', messageBody: null});
        }
    } else {
        res.send( { code: 8, message: '无有效token，请重新登录!', messageBody: null});
    }
};