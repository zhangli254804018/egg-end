'use strict';

module.exports = {
    lottery: {
        creat_time: { type: 'string' },
        update_time: { type: 'string' },
        name: { type: 'string' },
        number: { type: 'string', required: true },
        uid: { type: 'integer' }
    },
    lotteryPage: {
        creat_time: { type: 'string' },
        update_time: { type: 'string' },
        page: {
            type: 'integer'
        },
        page_size: {
            type: 'integer'
        },
    }
};