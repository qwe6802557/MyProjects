const request = require('request');
const fs = require('fs');
const fse = require('fs-extra');
const paths = require('./paths');
const path = require('path');
let {iconFontCDNUrl, proIconFontDirectory, iconfontFileName} = require('./config.custom.js');
// const stream = require('stream');
// const util = require('util');

if(!iconFontCDNUrl)return;
if(!proIconFontDirectory)return console.log('proIconFontDirectory is undefined');
if(!iconfontFileName)return console.log('iconfontFileName is undefined');


let getKeyWordsReg = /\/\/at\.alicdn\.com\/t\/[A-Za-z\_\d]+(?=\.)/;
let replaceKeyWordsReg = new RegExp(getKeyWordsReg, 'g');
let fileType = ['svg', 'ttf', 'woff', 'eot'];
let stamp = new Date().getTime();


proIconFontDirectory = path.join(paths.appPublic, proIconFontDirectory);
console.log('iconfont资源下载中...');

request.get(`http:${iconFontCDNUrl}`, function(err, res, body){

    if (err) {
        console.log('iconfont资源下载失败！');
        throw err;
    }

    let keyWords = body.match(getKeyWordsReg);

    let filePromise = fileType.map((type, index)=>downloadFile(`http:${keyWords[0]}.${type}?${stamp}`, type));

    body = body.replace(replaceKeyWordsReg, iconfontFileName);

    filePromise.push(writeFileCss(body));

    Promise.all(filePromise)
        .then(()=>{
            console.log('iconfont资源下载完毕！');
        })
        .catch((e)=>{
            console.log('iconfont资源下载失败！');
            throw e;
        });

});


//下载图标文件
function downloadFile(url, type){
    return new Promise(async function(resolve, reject){
        // request.get(url,function(err,res,body){

        //     fs.writeFile(`${proIconFontDirectory}/${iconfontFileName}.${type}`, body, (err) => {
        //         if (err) {
        //             reject()
        //             throw err;
        //         }
        //         resolve()
        //     });

        // });
        try{

            await fse.ensureDir(`${proIconFontDirectory}`);

            let res = request.get(url);
            let cws = fs.createWriteStream(`${proIconFontDirectory}/${iconfontFileName}.${type}`);

            res.on('data', function (data) {
                cws.write(data);
            });
            res.on('end', function () {
                resolve();
                cws.end();
            });
            res.on('error', function(err){
                console.log(err);
            });

        }catch(e){
            reject();
        }

    });
}

//保存css文件
function writeFileCss(body){
    return new Promise(async function(resolve, reject){

        await fse.ensureDir(`${proIconFontDirectory}`);

        fs.writeFile(`${proIconFontDirectory}/${iconfontFileName}.css`, body, (err) => {
            if (err) {
                reject();
                throw err;
            }
            resolve();
        });
    });
}








