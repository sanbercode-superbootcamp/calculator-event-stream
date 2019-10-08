const { expect } = require('chai');
const { calculate, calcEmitter, ERR_MSG } = require('./calculator');
const fs = require('fs');

let res;
calcEmitter.on('calculate', (result) => res = result);

const outStream = fs.createWriteStream('test_log.txt');
const multiplyByTwo = () => {
  outStream.write((res).toString() + " * 2 = ");
  outStream.write((res * 2).toString() + "\r\n");
}

describe('Calculator', function() {
  it('Addition', function() {
    calculate('add', 4, 1);
    expect(res).to.be.eq(5);
    multiplyByTwo();
  });

  it('Substraction', function() {
    calculate('substract', 5, 6);
    expect(res).to.be.eq(-1);
    multiplyByTwo();
  });

  it('Multiplication', function() {
    calculate('multiply', 7, 4);
    expect(res).to.be.eq(28);
    multiplyByTwo();
  });

  it('Division', function() {
    calculate('divide', 8, 2);
    expect(res).to.be.eq(4);
    multiplyByTwo();
  });
});

context('Invalid input', function() {
  it('NULL params', function() {
    calculate('add', 7, null);
    expect(res).to.be.an('error');
    expect(res.message).to.be.a('string').and.eq(ERR_MSG[0]);
  });

  it('Parameters include non-integer', function() {
    calculate('substract', 6, 'nine');
    expect(res).to.be.an('error');
    expect(res.message).to.be.a('string').and.eq(ERR_MSG[1]);
  });

  it('Division by 0', function() {
    calculate('divide', 14, 0);
    expect(res).to.be.an('error');
    expect(res.message).to.be.a('string').and.eq(ERR_MSG[2]);
  });
});