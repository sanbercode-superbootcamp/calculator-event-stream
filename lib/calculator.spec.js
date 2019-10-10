const { expect } = require('chai');
const { stub } = require('sinon');
const { calculate, emitter } =  require('./calculator');

let res;

describe('Calculator', function() {
    it('dapat melakukan proses penjumlahan', function() {
        //stub(console, 'log'); // stub hanya sekali
        //let res;
        emitter.on('calculateFinish', (result) => res = result);
        calculate('add', 6, 6);
        expect(res).to.be.eq(12);
    })
    it('dapat melakukan proses pengurangan', function() {
        //stub(console, 'log'); // stub hanya sekali
        //let res;
        emitter.on('calculateFinish', (result) => res = result);
        calculate('sub', 6, 6);
        expect(res).to.be.eq(0);
    })
    it('dapat melakukan proses perkalian', function() {
        //stub(console, 'log'); // stub hanya sekali
        //let res;
        emitter.on('calculateFinish', (result) => res = result);
        calculate('mul', 6, 6);
        expect(res).to.be.eq(36);
    })
    it('dapat melakukan proses pembagian', function() {
        //stub(console, 'log'); // stub hanya sekali
        //let res;
        emitter.on('calculateFinish', (result) => res = result);
        calculate('div', 6, 6);
        expect(res).to.be.eq(1);
    })
});
