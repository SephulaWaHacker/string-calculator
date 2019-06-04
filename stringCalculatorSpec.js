describe("String Calculator", () => {
  it("should return zero when '' is passed", () => {
    expect(string.add("")).toEqual(0);
  });

  it("should return the number itself when a single number is passed", () => {
    expect(string.add("1")).toEqual(1);
  });

  it("should return the sum of the numbers if two are given", () => {
    expect(string.add("1,2")).toEqual(3);
  });

  it("should return the sum of an unknown amount of numbers", () => {
    randomArr = (length, max) => [...new Array(length)].map(() => Math.round(Math.random() * max));
    randonGen = Math.floor(Math.random() * 100 + 1);
    res = randomArr(randonGen, randonGen);
    sum = res.reduce((pv, cv) => pv + cv, 0);
    arg = res.join();
    expect(string.add(arg)).toEqual(sum);
  });

  it("should allow the Add method to handle new lines between numbers (instead of commas)", () => {
    expect(string.add("1\n2,3")).toEqual(6);
  });

  it("should not allow negative numbers", function() {
    expect(() => {
      string.add("-1,2,3");
    }).toThrow(new Error("negatives not allowed"));
  });
  
  it("should ignore all numbers greater than 1000", () => {
    expect(string.add("2,1001")).toEqual(2);
  })

  it("should support different delimeters", () => {
    expect(string.add("//;\n1;2")).toEqual(3);
  });

  it("should handle delimeters of any length", () => {
    expect(string.add("//[***]\n1***2***3")).toEqual(6);
  });

  it("should handle multiple delimeters", () => {
    expect(string.add("//[*][%]\n1*2%3")).toEqual(6);
  });

  it("should handle multiple delimiters with length longer than one char", () => {
    expect(string.add("//[*][%%%%%%%%%%]]]]]]\n1*2%3")).toEqual(6);
  });

});