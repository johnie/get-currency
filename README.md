# get-currency [![Build Status](https://travis-ci.org/johnie/get-currency.svg?branch=master)](https://travis-ci.org/johnie/get-currency)

> Get currency symbol for a given currency code

Useful for when displaying $ instead of USD

-

## Install

```sh
$ npm install --save get-currency
```

```sh
$ bower install --save get-currency
```

## Usage

```js
getCurrency('USD');
//=> '$'

getCurrency('SEK');
//=> 'kr'
```


## CLI

```sh
$ npm install --global get-currency
```

```sh
$ get-currency --help

  Usage
    get-currency <abbreviation>
    echo <abbreviation> | get-currency

  Example
    get-currency USD
    $
```


## License

MIT © [Johnie Hjelm](http://johnie.se)
