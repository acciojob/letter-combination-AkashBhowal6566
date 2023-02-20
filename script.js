function letterCombinations(input_digit) {
  //Complete the function
  if (!input_digit) return []; 
  let map = {
      '2': 'abc',
      '3': 'def',
      '4': 'ghi',
      '5': 'jkl',
      '6': 'mno',
      '7': 'pqrs',
      '8': 'tuv',
      '9': 'wxyz'
  };
  let result = ['']; 
  for (let i = 0; i < input_digit.length; i++) {
      let temp = [];
      for (let j = 0; j < result.length; j++) {
          for (let k = 0; k < map[input_digit[i]].length; k++) {
              temp.push(result[j] + map[input_digit[i]][k]);
          }
      }
      result = temp;
  }
  return result;
}
module.exports = letterCombinations;
