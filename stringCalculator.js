class StringCalculator{
  constructor(){
    this.add = (string) => {
      let split;
      console.log(`string = ${string}`);
      let normalise = string.replace(/(\[|\]|\*|\/|\r\n|\n|\r|[]|)/gm, ",");
      console.log(`normalise = ${normalise}`);

      if (string.includes("-"))
        throw new Error("negatives not allowed");

      if(normalise == "")
        return 0;
      else if(normalise.length === 1)
        return parseInt(normalise, 10);
      else
        split = normalise.split(",");
        console.log(`split = ${split}`);
        let sum = 0;
        let arrlength = split.length;
        console.log(`arrlength = ${arrlength}`);
        for (let i = 0; i < arrlength; i++)
          sum += parseInt(split[i]);
        return sum; 
    }  
  }
}
let string = new StringCalculator;
//console.log(string.add("-"));
// console.log(string.add("1\n2,3"));
// console.log(string.add("1,2"));
// randomArray = (length, max) => [...new Array(length)].map(() => Math.round(Math.random() * max));
// randy = Math.floor(Math.random() * 100 + 1);
// res = randomArray(randy, randy);
// sum = res.reduce((pv, cv) => pv + cv, 0);
// arg = res.join();
str = "//[***]\n1***2***3"
console.log(string.add(str));