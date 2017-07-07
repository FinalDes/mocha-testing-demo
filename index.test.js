log = console.log
expect = require('chai').expect;
should = require('chai').should();
_ = require('lodash');

const {
    alwaysTrue,
    legitString
} = require("./index");

describe('#mocha bascis',()=>{
    it('true should be true',()=>{
        true.should.be.true;
    })
    it('I expect true to be true',()=>{
        expect(true).to.be.true;
    });
});

describe('#alwaysTrue',()=>{
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

describe('#legitString',()=>{
    it("should detect 'cow' as legit string",()=>{
        legitString('cow').should.be.true;
    });

    it('4 is not legitString',()=>{
        legitString(4).should.be.false;
    });

    it("undefined should be false",()=>{
        legitString(undefined).should.be.false;
    })
})

