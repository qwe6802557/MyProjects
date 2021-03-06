/**
 * 密码工具类(加密解密)
 */
const bcrypt = require('bcryptjs');

module.exports = {
    encryptPw(STENTH, password) {
        return new Promise((resolve, reject) => {
            bcrypt.genSalt(STENTH, (err, salt) => {
                if (err)reject(err);
                else {
                    bcrypt.hash(password, salt, (err, hash) => {
                        if (err) reject(err);
                        else {
                            resolve(hash);
                        }
                    });
                }
            });
        });
    },
    decryptPw(password, _password) {
        return new Promise((resolve, reject) => {
            bcrypt.compare(password, _password, (err, isMatch) => {
                if (err)reject(err);
                else resolve(isMatch);
            });
        });
    },
    // 随机生成验证码
    randomNum () {
        let code = "";
        for(let i = 0; i<6; i++){
            const random = Math.floor(Math.random()*10);
            code += random;
        }

        return code;
    }
};