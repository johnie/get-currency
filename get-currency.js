/**
 * get-currency
 * Copyright (c) 2014 Johnie Hjelm
 */


/*-------------------------------------------------------------------
  Required modules
-------------------------------------------------------------------*/

var currencySymbols = require('./dist/symbols.json');


/*-------------------------------------------------------------------
  Get symbol
-------------------------------------------------------------------*/
(function () {
  'use strict';

  var getCurrency = function( currencyCode ) {

    if ( currencySymbols.hasOwnProperty( currencyCode ) ) {

      return currencySymbols[currencyCode];

    } else {

      return '?';

    }

  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = getCurrency;
  } else {
    window.getCurrency = getCurrency;
  }

})();
