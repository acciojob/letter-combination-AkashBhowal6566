function letterCombinations(input_digit) {
  //Complete the function
	if (digit == null || digit.length === 0) return [];

  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

  const res = [];
  const go = (i, s) => {
    if (i === digit.length) {
      res.push(s);
      return;
    }

    for (const c of map[digit[i]]) {
      go(i + 1, s + c);
    }
  };

  go(0, '');
  return res;

}

module.exports = letterCombinations;
