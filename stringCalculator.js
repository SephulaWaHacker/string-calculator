class StringCalculator {
  constructor() {
    this.add = string => {
      let arr;
      console.log(`string = ${string}`);
      let normalise = string.replace(/(\;|\]|\%|\*|\/|\[|\r\n|\n|\r)/gm, ",");
      if (string.includes("-")) throw new Error("negatives not allowed");
      if (normalise == "") return 0;
      else if (normalise.length === 1) return parseInt(normalise, 10);
      else arr = normalise.split(",");
      let sum = 0;
      // arr.map((element,index) => {
      //   if (element == "" || element >= 1001) {
      //     arr.splice(index, 1)
      //     console.log(index);
      //   }
      //   console.log(arr);
      // })

      for (let j = 0; j < arr.length; j++)
        if (arr[j] >= 1001 || arr[j] == "") {
          arr.splice(j, 1);
          j--;
        }

      for (let i = 0; i < arr.length; i++) sum += parseInt(arr[i]);
      return sum;
    };
  }
}
let string = new StringCalculator();
