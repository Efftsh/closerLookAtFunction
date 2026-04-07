'use strict';
//Higher-Order Function
const transformer = function (text, fn) {
  console.log(`Original Text: ${text}`);
  console.log(`Transformed Text: ${fn(text)}`);
  console.log(`Transformed by: ${fn.name}`);
};

//CallBack Function
//1. Make everything uppercase
const allWordUpper = function (str) {
  return str.toUpperCase();
};

//2. Remove spaces
const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

//3. Capitalize first word only
const firstWordUpper = function (str) {
  const [firstWord, ...otherWord] = str.split(' ');
  return [firstWord.toUpperCase(), ...otherWord].join(' ');
};

transformer('javascript is fun', allWordUpper);
transformer('javascript is fun', oneWord);
transformer('javascript is fun', firstWordUpper);
