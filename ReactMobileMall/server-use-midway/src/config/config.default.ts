import { EggAppInfo } from "midway";

import { DefaultConfig } from "./config.modal";

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + "_1583639171353_2548";
  config.cors = {
    origin: "*",
    credentials: true
  };
  config.security = {
    csrf: {
      enable: false
      // ignoreJSON: true,
    },
    domainWhiteList: []
  };
  config.sequelize = {
    host: "localhost",
    port: "3306",
    user: "root",
    password: "FSG851024125",
    database: "mall_db",
    dialect: "mysql"
  };
  config.redis = {
    client: {
      port: 6379,
      host: "127.0.0.1",
      password: "FSG851024125",
      db: 0
    }
  };
  config.jwtConf = {
    secret: "TEST_SECRET",
    expiresIn: 35000
  };
  config.multipart = {
    fileSize: "50mb",
    // mode: 'file',
    whitelist: [".jpg", ".jpeg", ".png", ".gif", ".bmp"]
  };
  config.oss = {
    client: {
      // accessKeyId: 'LTAI4G7RN8L52ofSQ8N1qRiK',
      // accessKeySecret: 'aMHMThcKeIxurso0eP1GuZ1ccDkO8P',
      // bucket: 'mall-upload-server',
      // endpoint: 'oss-cn-shenzhen.aliyuncs.com',
      // timeout: '60s',

      accessKeyId: "LTAImYw1P9qavGsM",
      accessKeySecret: "B8ueSfNLB2PRXMJTioUfL3aQ2cwa7Q",
      bucket: "mall-server-upload",
      endpoint: "oss-cn-shenzhen.aliyuncs.com",
      timeout: "60s"
    }
  };
  config.smsConf = {
    accessKeyId: "LTAImYw1P9qavGsM",
    secretAccessKey: "B8ueSfNLB2PRXMJTioUfL3aQ2cwa7Q",
    signName: "火烈鸟商家管理系统",
    templateCode: "SMS_150183914"
  };
  // add your config here
  config.middleware = [];

  config.welcomeMsg = "Hello midwayjs!";

  return config;
};
