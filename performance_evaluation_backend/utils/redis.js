let redis = require('ioredis');
let redisConfig = require('./../config/config').redis;
let client = new redis(redisConfig);
client.on('connect',() => {
    console.log('connect----> :', redisConfig);
});
module.exports = client;