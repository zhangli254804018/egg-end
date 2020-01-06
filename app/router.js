'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  //首页页面
  router.get('/', controller.home.index);
  //注册
  router.post('/api/commit', controller.controllerRegister.register);
  //登录
  router.post('/api/login', controller.controllerLogin.login);
  //录入数据
  router.post('/api/lottery', controller.controllerLottery.lottery);
  //录入数据
  router.get('/api/lottery', controller.controllerLottery.lotteryList);
};
