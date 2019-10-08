const chaiEventEmitter = require('chai-eventemitter');
const { expect } = require('chai').use(chaiEventEmitter);
// const sinon = require('sinon');
// var spy = sinon.spy();
const { calculate, emitter, INVALID_PARAM, PARAM_NOT_A_NUMBER } = require('./calculator');

describe('Event-handling Calculator Unit Test', function () {
    describe('Addition', function () {
        let global_res;
        emitter.on('add:response', (res) => {
            global_res = res.data;
        });
        it('should output 6 for 3 + 3', function () {
            calculate('add', 3, 3);
            expect(global_res).to.be.eq(6);
        })

        it('should output 10 for 7 + 3', function () {
            calculate('add', 7, 3);
            expect(global_res).to.be.eq(10);
        })

        context('Invalid Input', function () {
            it('should return error of INVALID_PARAM for 3 + null', function () {
                calculate('add', 3, null);
                expect(global_res).to.be.eq(INVALID_PARAM);
            })
            it('should return error of PARAM_NOT_A_NUMBER for 4 + \'4\'', function () {
                calculate('add', 4, '4');
                expect(global_res).to.be.eq(PARAM_NOT_A_NUMBER);
            })
        })
    })

    describe('Substraction', function () {
        let global_res;
        emitter.on('substract:response', (res) => {
            global_res = res.data;
        });
        it('should output 6 for 12  - 6', function () {
            calculate('substract', 12, 6);
            expect(global_res).to.be.eq(6);
        })
    })

    describe('Division', function () {
        let global_res;
        emitter.on('divide:response', (res) => {
            global_res = res.data;
        });
        it('should output 12 for 60:5', function () {
            calculate('divide', 60, 5);
            expect(global_res).to.be.eq(12);
        })

        context('Invalid Input', function () {
            it('should return error of PARAM_NOT_A_NUMBER for 5:\'5\' ', async function () {
                calculate('divide', 5, '5');
                expect(global_res).to.be.eq(PARAM_NOT_A_NUMBER);
            })
        })
    })
    describe('Multiplication', function () {
        let global_res;
        emitter.on('multiple:response', (res) => {
            global_res = res.data;
        });
        it('should output 144 for 12x12', function () {
            calculate('multiple', 12, 12);
            expect(global_res).to.be.eq(144);
        })
    })
})