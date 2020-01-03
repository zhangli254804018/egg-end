'use strict';

module.exports = {
  createUser: {
    id: { type: 'integer', required: true },
    username: { type: 'string', required: true },
    password: { type: 'string', required: true },
    gender: { type: 'string', enum: ['1', '2'] },
  },
  loginUser: {
    username: { type: 'string', required: true },
    password: { type: 'string', required: true },
  },
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