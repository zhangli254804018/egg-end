'use strict';

/** @type Egg.EggPlugin */
module.exports = {
    // had enabled by egg
    mysql: {
        enable: true,
        package: 'egg-mysql'
    },
    ejs: {
        enable: true,
        package: 'egg-view-ejs'
    },
    swaggerdoc: {
        enable: true,
        package: 'egg-swagger-doc'
    },
    jwt: {
        enable: true,
        package: 'egg-jwt'
    },
    mp: {
        enable: true,
        package: 'egg-mp'
    }
};
