const { expect } = require('chai');
const { stub } = require('sinon');
const { calculate, emitter } = require('./calculator');
const { output, doublingValue } = require('./stream')

describe('Calculator', function() {
    this.timeout(10000);
    this.slow(10000);
    it('should run the console log with message result of calculation', function() {
        let res;
        emitter.on('calculateFinish', function(result) {
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
    });

    it.only('should write result*2 to output.txt', function(){
        emitter.on('calculateFinish', function(result) {
            doublingValue.write(result.toString());
        });
        doublingValue.pipe(output);
        stub(console, 'log');
        calculate('plus', 5, 5);
        expect(console.log.calledWith(20)).to.be.true;
        calculate('minus', 5,5);
        expect(console.log.calledWith(0)).to.be.true;
        calculate('multiply', 5,5);
        expect(console.log.calledWith(50)).to.be.true;
        calculate('divide', 5,5);
        expect(console.log.calledWith(2)).to.be.true;
    });
})