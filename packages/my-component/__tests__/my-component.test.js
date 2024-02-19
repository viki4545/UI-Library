'use strict';

const myComponent = require('..');
const assert = require('assert').strict;

assert.strictEqual(myComponent(), 'Hello from myComponent');
console.info('myComponent tests passed');
