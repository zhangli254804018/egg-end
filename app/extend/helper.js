// app/extend/helper.js
const moment = require('moment');
exports.relativeTime = time => moment(new Date(time * 1000)).fromNow();

exports.reponse = {
    success: function (params = {}) {
        const { message, status, data } = params
        return {
            message: message || 'sucess',
            status: status || '200',
            data: data || {}
        }
    },
    error: function (params = {}) {
        const { message, status, data } = params
        return {
            message: message || 'error',
            status: status || '400'
        }
    },
}

