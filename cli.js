#!/usr/bin/env node
'use strict';
var stdin       = require('get-stdin');
    getCurrency = require('./get-currency'),
    pkg         = require('./package.json'),
    argv        = process.argv.slice(2),
    input       = argv[0];

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
  console.log(getCurrency(data));
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
