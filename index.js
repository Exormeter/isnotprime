'use strict';

var isprime = require('isprime')
/**
 *	Find is num is not prime
 *	@param {Number} num
 */
module.exports = function(num) {
  return !isprime(num)
};
