const { expect } = require('chai');
const { calculate, emitter } = require('./index')

describe('Calculator', function() {
    describe('Plus', function() {
        it('should received "calculated" event with the result of calculation', function(done) {
            emitter.on('calPlus', function(result) {
              expect(result).to.equal(10);
            });
            calculate('plus', 5, 5);
            done();
        });
    })

    describe('Minus', function() {
        it('should received "calculated" event with the result of calculation', function(done) {
            emitter.on('calMinus', function(result) {
              expect(result).to.equal(0);
            });
            calculate('minus', 5, 5);
            done();
        });
    })

    describe('Multiply', function() {
        it('should received "calculated" event with the result of calculation', function(done) {
            emitter.on('calMulti', function(result) {
              expect(result).to.equal(25);
            });
            calculate('multi', 5, 5);
            done();
        });
    })

    describe('Divided By', function() {
        it('should received "calculated" event with the result of calculation', function(done) {
            emitter.on('calDiv', function(result) {
              expect(result).to.equal(1);
            });
            calculate('div', 5, 5);
            done();
        });
    })
})