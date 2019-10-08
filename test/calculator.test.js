const { expect } = require('chai')
const { calculate, emitter } = require('../src/calculator')
const { transformToNote } = require('../transform')

describe('Calculator', function (){
    describe('Plus', function(){
        it('should return 11', function(){
            emitter.once('calculateFinish', function (result){
                expect(result).to.be.eq(11)
                transformToNote(result)
            })
            calculate('plus', 5, 6)
        })
        it('should return 21', function(){
            emitter.once('calculateFinish', function (result){
                expect(result).to.be.eq(21)
                transformToNote(result)
            })
            calculate('plus', 15, 6)
        })
    })
    describe('Minus', function(){
        it('should return 9', function(){
            emitter.once('calculateFinish', function (result){
                expect(result).to.be.eq(9)
                transformToNote(result)
            })
            calculate('minus', 15, 6)
        })
        it('should return 11', function(){
            emitter.once('calculateFinish', function (result){
                expect(result).to.be.eq(11)
                transformToNote(result)
            })
            calculate('minus', 15, 4)
        })
    })
    describe('Kali', function(){
        it('should return 9', function(){
            emitter.once('calculateFinish', function (result){
                expect(result).to.be.eq(9)
                transformToNote(result)
            })
            calculate('kali', 3, 3)
        })
        it('should return 12', function(){
            emitter.once('calculateFinish', function (result){
                expect(result).to.be.eq(12)
                transformToNote(result)
            })
            calculate('kali', 3, 4)
        })
    })
    describe('Bagi', function(){
        it('should return 9', function(){
            emitter.once('calculateFinish', function (result){
                expect(result).to.be.eq(9)
                transformToNote(result)
            })
            calculate('bagi', 81, 9)
        })
        it('should return 6', function(){
            emitter.once('calculateFinish', function (result){
                expect(result).to.be.eq(6)
                transformToNote(result)
            })
            calculate('bagi', 18, 3)
        })
    })
})