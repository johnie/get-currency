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

function getCurrency( currencyCode ) {

  if ( currencySymbols.hasOwnProperty( currencyCode ) ) {

    return currencySymbols[currencyCode];

  } else {

    return '?';

  }

}
