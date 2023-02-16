'use strict';
const maxFrequentChar = (str) => {
  if (typeof str !== 'string') {
    return 'The string is valid';
  }

  if (!str.length) {
    return 'The string is emply';
  }

  const obj = {};
  
  str.split('').forEach(char =>
    obj[char] ? obj[char]++ : obj[char] = 1);

  const sortCharArray = Object.keys(obj)
    .sort((prevChar, currentChar) => obj[currentChar] - obj[prevChar])
  
  const maxCharArray = sortCharArray.filter(char =>
    obj[char] === obj[sortCharArray[0]]);
  
  if (maxCharArray.length > 1) {
    return maxCharArray;
  }

  return maxCharArray[0];
};

console.log(maxFrequentChar(''));
console.log(maxFrequentChar(123));
console.log(maxFrequentChar('qqFFDDSSAAee11'));
console.log(maxFrequentChar('aaaaaaaaaaaaaadddsddfdffdsgf'));
console.log(maxFrequentChar('12234748454'));
console.log(maxFrequentChar([1, 'ffg']));
console.log(maxFrequentChar({a: 12}));
