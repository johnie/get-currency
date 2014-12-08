/*-------------------------------------------------------------------
  Tests
-------------------------------------------------------------------*/
'use strict';

var assert      = require('assert'),
    getCurrency = require('./get-currency');

it('should throw on invalid input', function () {
  assert.equal('?', getCurrency('') );
  assert.equal('?', getCurrency(1) );
  assert.equal('?', getCurrency(false) );
  assert.equal('?', getCurrency(NaN) );
  });

it('should get matching symbol', function () {
  assert.equal(getCurrency('USD'), '$');
  assert.equal(getCurrency('SEK'), 'kr');
  assert.equal(getCurrency('MKD'), 'ден');
});
