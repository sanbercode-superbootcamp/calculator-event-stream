module.exports = require('./component/calculator');

const { calculate, emitter } = require('./component/calculator');
const { TimesByTwo } = require('./component/stream-transformer');

emitter.on('add:response', function (res) {
    TimesByTwo(res.data, './outFile-add.txt')
        .then((res) => {
            console.log(res);
        });
})
calculate('add', 3, 10);

emitter.on('substract:response', function (res) {
    TimesByTwo(res.data, './outFile-substract.txt')
        .then((res) => {
            console.log(res);
        });
})
calculate('substract', 10, 3);

emitter.on('divide:response', function (res) {
    TimesByTwo(res.data, './outFile-divide.txt')
        .then((res) => {
            console.log(res);
        });
})
calculate('divide', 60, 6);

emitter.on('multiple:response', function (res) {
    TimesByTwo(res.data, './outFile-multiple.txt')
        .then((res) => {
            console.log(res);
        });
})
calculate('multiple', 12, 12);