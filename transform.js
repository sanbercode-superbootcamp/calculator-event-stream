const { Transform } = require('stream')
const fs = require('fs')

const output = fs.createWriteStream('output.txt')

const multipleBy2 =  new Transform({
    transform(chunk, encoding, callBack){
        let result = parseInt(chunk) * 2
        // this.push(result.toString() + '\n')
        output.write(result.toString() + '\n')
        callBack()
    }
})

function transformToNote(result){
    multipleBy2.write(result.toString())
}

module.exports.transformToNote = transformToNote
