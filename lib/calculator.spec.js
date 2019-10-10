const { expect } = require('chai');
const { calculate, emitter } = require('./calculator');

describe('Calculator', function() {
  describe('Plus', function() {
    it('should received "calculated" event with the result of calculation', function(done) {
      emitter.on('calculated', function(result) {
        expect(result).to.equal(11);
      });
      calculate('plus', 5, 6);
      done();
    });
  });
});
