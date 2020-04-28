'use strict';

require('dotenv').config()
const config = require('./config');
const Client = require('ssh2-sftp-client');
const fs = require('fs');
const through = require('through2');

const sftp = new Client();

function toupper() {
  return through(function(buf, enc, next) {
    next(null, buf.toString().toUpperCase());
  });
}

sftp
  .connect(config.connectionOptions)
  .then(() => {
    let upperWtr = toupper();
    let fileWtr = fs.createWriteStream(config.dstFile);
    upperWtr.pipe(fileWtr);
    return sftp.get(config.remotePath, upperWtr);
  })
  .then(() => {
    return sftp.end();
  })
  .catch(err => {
    console.error(err.message);
  });