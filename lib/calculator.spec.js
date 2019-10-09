const {
    calculate,
    Emitter
} = require('./calculator');
const {
    expect
} = require('chai');
const {
    multipleBy2,
    readStream
} = require('./stream-transform');


describe('Calculator', function () {

    it('should return 13 in additionEvent and return 26 in output.txt', function () {
        Emitter.once('calculateFinish', function (result) {
            multipleBy2(result)
            expect(result).to.be.eq(13);
        });
        calculate('add', 7, 6);

        readStream.on('data', function (chunk) {
            let num = parseInt(chunk.toString());
            expect(num).to.be.eq(26);
        })
    })

    it('should return 1 in subtractionEvent and return 2 in output.txt', function () {
        Emitter.once('calculateFinish', function (result) {
            multipleBy2(result)
            expect(result).to.be.eq(1);
        });
        calculate('min', 7, 6);

        readStream.on('data', function (chunk) {
            let num = parseInt(chunk.toString());
            expect(num).to.be.eq(2);
        })
    })

    it('should return 12 in multiplicationEven and return 24 in output.txt', function () {
        Emitter.once('calculateFinish', function (result) {
            multipleBy2(result)
            expect(result).to.be.eq(12);
        });
        calculate('multi', 2, 6);

        readStream.on('data', function (chunk) {
            let num = parseInt(chunk.toString());
            expect(num).to.be.eq(24);
        })
    })

    it('should return 2 in divisionEvent and return 4 in output.txt', function () {
        Emitter.once('calculateFinish', function (result) {
            multipleBy2(result)
            expect(result).to.be.eq(2);
        });
        calculate('div', 10, 5);

        readStream.on('data', function (chunk) {
            let num = parseInt(chunk.toString());
            expect(num).to.be.eq(4);
        })
    })
})