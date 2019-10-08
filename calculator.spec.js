const { expect } = require('chai');
const { stub } = require('sinon');
const { calculate } = require('./calculator');;

describe('Calculator', function() {
    it('should run the console log with message result of calculation', function() {
        stub(console, 'log');
        calculate('plus', 5, 6);
        expect(console.log.calledWith(11)).to.be.true;
        calculate('minus', 5, 4);
        expect(console.log.calledWith(1)).to.be.true;
        calculate('multiply', 5, 4);
        expect(console.log.calledWith(20)).to.be.true;
        calculate('divide', 4, 2);
        expect(console.log.calledWith(2)).to.be.true;
    })
})