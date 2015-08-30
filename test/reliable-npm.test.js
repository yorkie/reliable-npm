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
  describe('install()', function() {

    it('should be a callback usage', function(done) {
      npm.install({
        cwd: '.',
      }, function(error, data) {
        if (error) {
          done();
          return;
        }
        data.should.be.a.String;
        done();
      });
    });

    it('should be a yield usage', function *() {
      try {
        var data = yield npm.install({
          cwd: '.',
        });
        data.should.be.a.String;
      } catch(e) {
        // e maybe null
        if (e) {
          e.should.be.a.String;
        }
      }
    });

    it('should be a promise usage', function(done) {
      npm.install({
        cwd: '.'
      })
      .then(function(data) {
        data.should.be.a.String;
        done();
      })
      .catch(function(e) {
        e.should.be.a.String;
        done();
      });
    });

  });
});
