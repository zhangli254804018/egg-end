'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller } = app;
    //注册
    router.post('/api/register', controller.controllerRegister.register);
    //登录
    router.post('/api/login', controller.controllerLogin.login);
};
