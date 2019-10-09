const { calc } = require("./calculator");
const chai = require("chai");
const sinon = require("sinon");

describe("Calculator", function(){
    it("Fungsi dasar calculator", function(){
        sinon.stub(console, "log"); //stub (object, objectfunction) //fungsi stub dipanggil hanya 1x untuk semua test. Ibaratnya dia session_start()
        calc("tambah", 1, 2);
        chai.expect(console.log.calledWith(3)).to.be.true;
        
        calc("kurang", 1, 2);
        chai.expect(console.log.calledWith(-1)).to.be.true;
        
        calc("kali", 1, 2);
        chai.expect(console.log.calledWith(2)).to.be.true;
        
        calc("bagi", 1, 2);
        chai.expect(console.log.calledWith(0.5)).to.be.true;
    });
    
    it("Fungsi error string calculator", function(){
        calc("tambah", "word", 2);
        chai.expect(console.log.calledWith("word2")).to.be.true;
        
        calc("kurang", "word", 2);
        chai.expect(console.log.calledWith(NaN)).to.be.true;
        
        calc("kali", "word", 2);
        chai.expect(console.log.calledWith(NaN)).to.be.true;
        
        calc("bagi", "word", 2);
        chai.expect(console.log.calledWith(NaN)).to.be.true;
    });
    
    it("Fungsi error null calculator", function(){
        calc("tambah", null, 2);
        chai.expect(console.log.calledWith("word2")).to.be.true;
        
        calc("kurang", null, 2);
        chai.expect(console.log.calledWith(NaN)).to.be.true;
        
        calc("kali", null, 2);
        chai.expect(console.log.calledWith(NaN)).to.be.true;
        
        calc("bagi", null, 2);
        chai.expect(console.log.calledWith(NaN)).to.be.true;
    });
});