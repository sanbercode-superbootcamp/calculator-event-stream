const EventEmitter = require("events");
const emitter = new EventEmitter();

const { Transform } = require("stream");
const fs = require("fs");
const outStream = fs.createWriteStream("output.txt");

//Transformer?/////////////////////////////////////////////////////
const times2Tambah = new Transform({
    transform(chunk, encoding, callback){
        this.push((chunk * 2+"\r").toString());
        //callback();
    }
});

const times2Kurang = new Transform({
    transform(chunk, encoding, callback){
        this.push((chunk * 2+"\r").toString());
        //callback();
    }
});

const times2Kali = new Transform({
    transform(chunk, encoding, callback){
        this.push((chunk * 2+"\r").toString());
        //callback();
    }
});

const times2Bagi = new Transform({
    transform(chunk, encoding, callback){
        this.push((chunk * 2+"\r").toString());
        //callback();
    }
});


//Event Listener//////////////////////////////////////////////////
emitter.on("tambah", function(a, b){
    let result = a + b;
    console.log(result);
    
    times2Tambah.write(result.toString());
    times2Tambah.pipe(outStream);
    //outStream.write(a+" + "+b+" = "+result);
    /*return result;*/ //ga guna (krn yg dipanggil function)
});

emitter.on("kurang", function(a, b){
    let result = a - b;
    console.log(result);
    
    times2Kurang.write(result.toString());
    times2Kurang.pipe(outStream);
    /*return result;*/ //ga guna (krn yg dipanggil function)
});
emitter.on("kali", function(a, b){
    let result = a * b;
    console.log(result);
    
    times2Kali.write(result.toString());
    times2Kali.pipe(outStream);
    /*return result;*/ //ga guna (krn yg dipanggil function)
});
emitter.on("bagi", function(a, b){
    let result = a / b;
    console.log(result);
    
    times2Bagi.write(result.toString());
    times2Bagi.pipe(outStream);
    /*return result;*/ //ga guna (krn yg dipanggil function)
});


//Function Calculate///////////////////////////////////////////
function calc(operation, a, b){
    emitter.emit(operation, a, b);
}

exports.calc = calc;