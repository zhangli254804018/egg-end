'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  //查询数据
  router.get('/api/lottery', controller.controllerLottery.lotteryList);
  //录入数据
  router.post('/api/lottery', controller.controllerLottery.lottery);
};
