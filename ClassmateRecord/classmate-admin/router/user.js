const express = require('express');
const router = express.Router();
const UserController = require('../controller/user.js');

router.get('/verifyCode', (req, res) => {
    UserController.getVerifyCode(req, res);
});

router.get('/userInfo', (req, res) => {
    res.send({ code: 0, message: '验证通过', messageBody: req.session.payload });
});

router.post('/login',(req, res) => {
    UserController.login(req, res);
});

router.post('/register',(req, res) => {
    UserController.register(req, res);
});

module.exports = router;
