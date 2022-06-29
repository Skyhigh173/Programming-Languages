export class Math {
  
  static log(M) {
    let Precision = 100;
    let result = "";
    let first = Math.floor(M).length - 1;
    let last = first;
    if (M < 1) first = -(Math.floor(1/M).length-1);
    for (let i = 0; i < Precision; i++) {
      last = Math.floor((M / 10 ** last) ** 10).length - 1;
      result += last.toString();
    }
    return result;
  }
  
  static plus
