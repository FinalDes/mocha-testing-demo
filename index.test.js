const { expect, should } = require('chai');

should();

const {
    alwaysTrue,
    legitString,
} = require('./index');

describe('#mocha bascis', () => {
  it('true should be true', () => {
    true.should.be.true;
  });
  it('I expect true to be true', () => {
    expect(true).to.be.true;
  });
});

describe('#alwaysTrue', () => {
  it('should always return true', () => {
    alwaysTrue().should.be.true;
  });

  it('I expect it to always be true', () => {
    expect(alwaysTrue()).to.be.true;
  });

  it('should not be false', () => {
    alwaysTrue().should.not.be.false;
  });
});

describe('#legitString', () => {
  it("should detect 'cow' as legit string", () => {
    legitString('cow').should.be.true;
  });

  it("empty string is not legit string", () => {
    legitString('').should.be.true;
  });

  it('7 is not legit string', () => {
    legitString(7).should.be.false;
  });

  it("'7' is legit string", () => {
    legitString('7').should.be.true;
  });

  it('undefined is not legit string', () => {
    legitString(undefined).should.be.false;
  });

  it("'undefined' is a legit string",()=>{
    legitString('undefined').should.be.true;
  })

  it('null is not legit string', () => {
    legitString(null).should.be.false;
  });

    it("'null' is a legit string",()=>{
    legitString('null').should.be.true;
  })

  it("true is not legit string",() => {
    legitString(true).should.be.false;
  });

  it("'true' is legit string",() => {
    legitString("true").should.be.true;
  });

  it("false is not legit string",() => {
    legitString(false).should.be.false;
  });

  it("'false' is legit string",() => {
    legitString("false").should.be.true;
  });

  it("empty object is not legit string",() => {
    legitString({}).should.be.false;
  });

  it("'{}' is not legit string",() => {
    legitString('{}').should.be.true;
  });

});

