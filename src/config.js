'use strict';

module.exports = {
  connectionOptions: {
    host: process.env.HOST,
    port: process.env.PORT,
    username: process.env.USERNAME,
    password: process.env.PASSWORD
  },
  remotePath: process.env.REMOTE_PATH,
  dstFile: './loud-text.txt'
};