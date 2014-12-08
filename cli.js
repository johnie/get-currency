#!/usr/bin/env node
'use strict';
var stdin       = require('get-stdin');
var getCurrency = require('./get-currency');
var pkg         = require('./package.json');
var argv        = process.argv.slice(2);
var input       = argv[0];

function help() {
  console.log([
    '',
    '  ' + pkg.description,
    '',
    '  Usage',
    '    get-currency <abbreviation>',
    '    echo <abbreviation> | get-currency',
    '',
    '  Example',
    '    get-currency USD',
    '    $'
  ].join('\n'));
}

function init(data) {
  console.log(getCurrency(String(data)));
}

if (argv.indexOf('--help') !== -1) {
  help();
  return;
}

if (argv.indexOf('--version') !== -1) {
  console.log(pkg.version);
  return;
}

if (process.stdin.isTTY) {
  if (!input) {
    help();
    return;
  }

  init(input);
} else {
  stdin(init);
}
