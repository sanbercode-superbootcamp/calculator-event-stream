const { Transform } = require('stream');
const fs = require('fs');

transformer = {
    transform(chunk, encoding, callback) {
        let result = chunk;
        result *= 2;
        this.push(result.toString());
        callback();
    }
}

exports.TimesByTwo = function (input, outFile) {
    return new Promise((resolve, reject) => {
        let newInstance = new Transform(transformer);
        newInstance.write(input.toString());
        newInstance.end();
        if (!outFile) {
            newInstance.pipe(process.stdout);
        } else {
            outFile = fs.createWriteStream(outFile);
            newInstance.pipe(outFile);
        }
        resolve("Stream Transform Successful");
    });

}