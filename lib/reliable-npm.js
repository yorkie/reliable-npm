/* ================================================================
 * reliable-npm by xdf(xudafeng[at]126.com)
 *
 * first created at : Tue Aug 25 2015 10:45:01 GMT+0800 (CST)
 *
 * ================================================================
 * Copyright  xdf
 *
 * Licensed under the MIT License
 * You may not use this file except in compliance with the License.
 *
 * ================================================================ */

'use strict';

var path = require('path');
var _ = require('./helper');
var EOL = require('os').EOL;
var exec = require('child_process').exec;

var defaultOpt = {
  registry: 'https://registry.npmjs.org',
  onlyDev: false
};

// options {
//  reposity
// }

function NPM(options) {
  this.options = _.merge(defaultOpt, options || {});
}

NPM.prototype.install = function(options, callback) {

  var _install = new Promise(function(resolve, reject) {
    var args = ['npm', 'install'];
    args.push('--registry=' + (options.registry || this.options.registry));

    if (options.onlyDev || this.options.onlyDev) {
      args.push('--only=dev');
    }

    var command = args.join(' ');

    var npmInstall = exec(command, {
      cwd: path.resolve(options.cwd),
      timeout: options.timeout || 0,
      maxBuffer: 1024 * 1024 // 1M Buffer
    }, function(error, stdout, stderr) {
      if (error) {
        return reject(error);
      }
      resolve(stdout);
    });
  }.bind(this));

  var _installWithCallback = function() {
    _install
      .then(function(result) {
        callback(null, result);
      })
      .catch(function(e) {
        callback(e);
      });
  };

  return callback ? _installWithCallback() : _install;
};

module.exports = new NPM();

module.exports.NPM = NPM;
