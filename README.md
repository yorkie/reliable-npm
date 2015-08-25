reliable-npm
============

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/reliable-npm.svg?style=flat-square
[npm-url]: https://npmjs.org/package/reliable-npm
[travis-image]: https://img.shields.io/travis/xudafeng/reliable-npm.svg?style=flat-square
[travis-url]: https://travis-ci.org/xudafeng/reliable-npm
[coveralls-image]: https://img.shields.io/coveralls/xudafeng/reliable-npm.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/xudafeng/reliable-npm?branch=master
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/reliable-npm.svg?style=flat-square
[download-url]: https://npmjs.org/package/reliable-npm

> reliable npm

## Installment

```bash
$ npm i reliable-npm -g
```

## Usage

```javascript

// normal usage

var npm = require('reliable-npm');

npm.install({
  cwd: '.',
}, function(error, data) {
  if (error) {
    console.log(error);
    return;
  }
  console.log(data);
});

// use in co, for a yield syntax instead of callback function implement

try {
  var data = yield npm.install({
    cwd: '.',
  });
  console.log(data);
} catch(e) {
  // e maybe `null`
  console.log(e);
}

// use as a promise

npm.install({
  cwd: '.'
})
.then(function(data) {
  console.log(data);
})
.catch(function(e) {
  console.log(e);
});

// for a custom config

var NPM = require('reliable-npm').NPM;
var npm = new NPM({
  registry: 'https://other.npmjs.org'
});
```

## License

The MIT License (MIT)
