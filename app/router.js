'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
    const { router, controller } = app;
    //首页页面
    router.get('/', controller.home.index);
    require('./router/lottery')(app);
    require('./router/user')(app);
};
