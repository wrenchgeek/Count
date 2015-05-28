describe("count", function() {
  it("count by incriments of 1 to the number 5", function() {
    expect(count(1, 5)).to.eql([1 ,2 , 3, 4 , 5]);
  });

  it("counts by increments of 5 to the number 30", function() {
    expect(count(5, 30)).to.eql([5,10,15,20,25,30])
  })
});
