'use strict';

module.exports = {
  createUser: {
    id: { type: 'integer', required: false },
    username: { type: 'string', required: true },
    password: { type: 'string', required: true },
    gender: { type: 'string', enum: ['1', '2'] },
  },
  loginUser: {
    username: { type: 'string', required: true },
    password: { type: 'string', required: true },
  }
};