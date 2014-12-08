/*-------------------------------------------------------------------
  Tests
-------------------------------------------------------------------*/
'use strict';

var assert      = require('assert'),
    getCurrency = require('./get-currency');

it('should throw on invalid input', function () {
  assert.throws(function () { getCurrency('') });
  assert.throws(function () { getCurrency('1') });
  assert.throws(function () { getCurrency(NaN) });
  assert.throws(function () { getCurrency(true) });
});

it('should get matching symbol', function () {
  assert.equal(getCurrency('USD'), '$');
  assert.equal(getCurrency('SEK'), 'kr');
  assert.equal(getCurrency('MKD'), 'ден');
});
