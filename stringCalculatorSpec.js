describe("String string", function() {
  it("should return zero when '' is passed", function() {
    expect(string.add("")).toEqual(0);
  });

  it("should return the number itself when a single number is passed", function() {
    expect(string.add("1")).toEqual(1);
  });

  it("should return the sum of the numbers if two are given", function() {
    expect(string.add("1,2")).toEqual(3);
  });

  it("should return the sum of an unknown amount of numbers", function() {
    randomArr = (length, max) => [...new Array(length)].map(() => Math.round(Math.random() * max));
    randonGen = Math.floor(Math.random() * 100 + 1);
    res = randomArr(randonGen, randonGen);
    sum = res.reduce((pv, cv) => pv + cv, 0);
    arg = res.join();
    expect(string.add(arg)).toEqual(sum);
  });

  it("should allow \\n in between the input number string", function() {
    expect(string.add("1\n2,3")).toEqual(6);
  });

  it("should not allow negative numbers", function() {
    expect(function() {
      string.add("-1,2,3");
    }).toThrow(new Error("negatives not allowed"));
  });
});
