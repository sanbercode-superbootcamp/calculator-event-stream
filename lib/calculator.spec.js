const { calculate, emitter } = require('./calculator');
const { stub } = require('sinon');
const chai = require('chai');
const { expect } = require('chai');
const { timesBy2 } = require('./transformMultiplier')

describe('Calculator', function(){
  
  it('harus menghasilkan operasi tambah biasa\nkemudian menulis di output.txt dg hasil 2 kalinya', function() {
    let hasil_tambah;
    emitter.once('operasiBeres', function(hasil) {
      timesBy2(hasil);
      hasil_tambah = hasil;
    });
    calculate('plus', 5, 6);
    expect(hasil_tambah).to.be.eq(11);
  });

  it('harus menghasilkan operasi kurang biasa\nkemudian menulis di output.txt dg hasil 2 kalinya', function() {
    let hasil_kurang;
    emitter.once('operasiBeres', function(hasil) {
      timesBy2(hasil);
      hasil_kurang = hasil;
    });
    calculate('minus', 10, 5);
    expect(hasil_kurang).to.be.eq(5);
  });

  it('harus menghasilkan operasi kali biasa\nkemudian menulis di output.txt dg hasil 2 kalinya', function() {
    let  hasil_kali;
    emitter.once('operasiBeres', function(hasil) {
      timesBy2(hasil);
      hasil_kali = hasil;
    });
    calculate('times', 5, 6);
    expect(hasil_kali).to.be.eq(30);
  });

  it('harus menghasilkan operasi bagi biasa\nkemudian menulis di output.txt dg hasil 2 kalinya', function() {
    let hasil_bagi;
    emitter.once('operasiBeres', function(hasil) {
      timesBy2(hasil);
      hasil_bagi = hasil;
    });
    calculate('divide', 12, 4);
    expect(hasil_bagi).to.be.eq(3);
  });

})
