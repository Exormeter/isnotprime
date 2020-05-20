'use strict';

var assert = require('assert');
var isnotprime = require('./');
var primes = require('thousandprimes');
var notprimes = [
  22, 10, 20, 40, 10000
];

primes.forEach(function(num){
  describe('isprime('+num+')', function(){
    it('finds that '+num+' is prime', function(){
      assert.notEqual(isnotprime(num), true);
    });
  });
});

notprimes.forEach(function(num){
  describe('isprime('+num+')', function(){
    it('finds that '+num+' is not prime', function(){
      assert.equal(isnotprime(num), true);
    });
  });
});
