const chaiasPromised = require('chai-as-promised');
const { expect } = require('chai').use(chaiasPromised);
const { TimesByTwo } = require('../component/stream-transformer');


describe('Stream Transformer Unit Test', function () {
    describe('Transform and File Saving', function () {
        it('should return \'Stream Transform Successful\'', function () {
            return TimesByTwo(10, null)
                .then((res) => {
                    expect(res).to.be.eq("Stream Transform Successful");
                })
        })
    })
})