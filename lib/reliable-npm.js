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

var co = require('co');
var path = require('path');
var _ = require('./helper');
var EOL = require('os').EOL;
var spawn = require('child_process').spawn;

var defaultOpt = {
  registry: 'https://registry.npmjs.org'
};

// options {
//  reposity
// }

function NPM(options) {
  this.options = _.merge(defaultOpt, options || {});
}

NPM.prototype.install = function(options, callback) {
  var that = this;
  return co(function *() {
    var args = ['install'];
    args.push('--registry=' + (options.registry || that.options.registry));
    var npmInstall = spawn('npm', args, {
      cwd: path.resolve(options.cwd)
    });
    var result = [];
    var error = [];
    npmInstall.stdout.on('data', function(data) {
      result.push(_.trim(data.toString()));
    });
    npmInstall.stderr.on('data', function(data) {
      error.push(_.trim(data.toString()));
    });
    npmInstall.stdout.on('close', function() {
      if (error.length) {
        callback(error);
      } else {
        callback(null, result.join(EOL));
      }
    });
  }).catch(function(e) {
    callback(e.stack);
  });
};

module.exports = new NPM();

module.exports.NPM = NPM;
