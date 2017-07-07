log = console.log
expect = require('chai').expect;
should = require('chai').should();
_ = require('lodash');

const {alwaysTrue} = require("./index");

describe('#mocha bascis',()=>{
    it('true should be true',()=>{
        true.should.be.true;
    })
    it('I expect true to be true',()=>{
        expect(true).to.be.true;
    });
});

describe('#always true',()=>{
    it('should always return true',()=>{
        alwaysTrue().should.be.true;
    });

    it('I expect it to always be true',()=>{
        expect(alwaysTrue()).to.be.true;
    });
    
    it('should not be false',()=>{
        alwaysTrue().should.not.be.false;
    })
});



