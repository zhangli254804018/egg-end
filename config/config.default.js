// /* eslint valid-jsdoc: "off" */

// 'use strict';

// /**
//  * @param {Egg.EggAppInfo} appInfo app info
//  */
// module.exports = appInfo => {
//   /**
//    * built-in config
//    * @type {Egg.EggAppConfig}
//    **/
//   const config = exports = {};

//   // use for cookie sign key, should change to your own and keep security
//   config.keys = appInfo.name + '_1557978733702_6444';

//   // add your middleware config here
//   config.middleware = [];

//   // add your user config here
//   const userConfig = {
//     // myAppName: 'egg',
//   };

//   const mysqlConfig = {
//     // 单数据库信息配置
//     client: {
//       // host
//       host: 'localhost',
//       // 端口号
//       port: '3306',
//       // 用户名
//       user: 'root',
//       // 密码
//       password: 'chenyanqin1992',
//       // 数据库名
//       database: 'test',
//     },
//     // 是否加载到 app 上，默认开启
//     app: true,
//     // 是否加载到 agent 上，默认关闭
//     agent: false,
//   }

//   const view = {
//     defaultViewEngine: '.ejs',
//     mapping: {
//       '.html': 'ejs',
//     },
//   };

//   return {
//     ...config,
//     ...userConfig,
//     ...mysqlConfig,
//     ...view
//   };
// };
//判断是否是正式环境
const isProduction = process.env.NODE_ENV == 'production' ? true : false;
console.log('process-->', process.env.NODE_ENV);
module.exports = (appInfo) => {
    const config = (exports = {});
    config.keys = appInfo.name + ' ';
    config.mysql = {
        client: {
            // host
            host: 'localhost',
            // 端口号
            port: '3306',
            // 用户名
            user: 'test',
            // 密码
            password: 'Aa123!',
            // 数据库名
            database: 'test'
        }
    };
    config.view = {
        defaultViewEngine: '.ejs',
        mapping: {
            '.html': 'ejs'
        }
    };
    config.security = {
        csrf: {
            headerName: 'x-csrf-token', // 自定义请求头
            enable: false //关闭跨域post方法
        }
    };
    config.swaggerdoc = {
        dirScanner: '/app/controller',
        apiInfo: {
            title: 'egg-swagger',
            description: 'swagger-ui for egg',
            version: '1.0.0'
        },
        schemes: ['http', 'https'],
        consumes: ['application/json'],
        produces: ['application/json'],
        securityDefinitions: {
            // apikey: {
            //   type: 'apiKey',
            //   name: 'clientkey',
            //   in: 'header',
            // },
            // oauth2: {
            //   type: 'oauth2',
            //   tokenUrl: 'http://petstore.swagger.io/oauth/dialog',
            //   flow: 'password',
            //   scopes: {
            //     'write:access_token': 'write access_token',
            //     'read:access_token': 'read access_token',
            //   },
            // },
        },
        enableSecurity: false,
        // enableValidate: true,
        routerMap: true,
        enable: true
    };
    config.jwt = {
        secret: '123456' //自己设置的值
    };
    /**
     * 微信公众平台的相关配置
     * @member Config Egg配置
     * @property {String}  appId - 应用号
     * @property {number}  appSecret  - 应用密钥
     * @property {number}  mchId  - 商户平台商家编号
     * @property {number}  apiKey  - 商户支付接口密钥
     * @property {number}  notifyUrl  - 支付结果回调地址
     */    
    exports.mp = {
        appId: 'wx3b352c220cd6730b',
        appSecret: '11f3cef056b3aea2e3367f7d1b5ca0b2',
        mchId: '',
        apiKey: '',
        notifyUrl: ''
    };
    return {
        ...config
    };
};
