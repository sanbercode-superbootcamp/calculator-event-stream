const { expect } = require('chai');
const { stub } = require('sinon');
const { calculate, emitter } = require('./calculator');

describe('Calculator', function() {
    it('should run the console log with message result of calculation', function() {
        let res;
        emitter.on('calculateFinish', function(result) {
            console.log(result);
            res = result;
        })
        calculate('plus', 5, 6);
        expect(res).to.be.eq(11);
        calculate('minus', 5, 4);
        expect(res).to.be.eq(1);
        calculate('multiply', 5, 4);
        expect(res).to.be.eq(20);
        calculate('divide', 4, 2);
        expect(res).to.be.eq(2);
    })
})