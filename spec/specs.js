describe('coinCombo', function() {

  it("returns the least amount of change for one quarter", function() {
    expect(coinCombo(25)).to.eql([0,0,0,1]);
  });

  it("returns the least amount of change for one dime", function() {
    expect(coinCombo(10)).to.eql([0,0,1,0]);
  });

  it("returns the least amount of change for one nickel", function() {
    expect(coinCombo(5)).to.eql([0,1,0,0]);
  });

  it("returns the least amount of change for one penny", function() {
    expect(coinCombo(1)).to.eql([1,0,0,0]);
  });

  it("returns the least amount of change for 41 cents", function() {
    expect(coinCombo(41)).to.eql([1,1,1,1]);
  });
  
});
