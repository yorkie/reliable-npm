/* ================================================================
 * reliable-npm by xdf(xudafeng[at]126.com)
 *
 * first created at : Tue Aug 25 2015 10:45:01 GMT+0800 (CST)
 *
 * ================================================================
 * Copyright 2013 xdf
 *
 * Licensed under the MIT License
 * You may not use this file except in compliance with the License.
 *
 * ================================================================ */

'use strict';

var npm = require('..');

describe('lib/reliable-npm.js', function() {
  describe('install', function() {
    it('should be a function', function(done) {
      npm.install({
        cwd: '.'
      }, function(error, data) {
        if (error) {
          done();
          return;
        }
        data.should.be.Object;
        done();
      });
    });
    it('should be', function *() {
      var data = yield npm.install({
        cwd: '.'
      });
      console.log(data);
    });
  });
});
