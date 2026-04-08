'use strict';
//Higher-Order Function
const transformer = function (text, fn) {
  console.log('-----------------------');
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

//4.Camel Case
const camelCase = function (str) {
  const [firstWord, ...otherWords] = str.toLowerCase().split(' ');
  const firstLetterUpper = [];
  for (const words of otherWords) {
    firstLetterUpper.push(words.replace(words[0], words[0].toUpperCase()));
  }
  return [firstWord, ...firstLetterUpper].join('');
};

transformer('javascript is fun', allWordUpper);
transformer('javascript is fun', oneWord);
transformer('javascript is fun', firstWordUpper);
transformer('Javascript iS fUn', camelCase);
transformer('iffat ash iZaM mOhD ZaIdi', camelCase);
transformer('iffat ash iZaM mOhD ZaIdi', oneWord);
transformer('iffat ash iZaM mOhD ZaIdi', allWordUpper);

//Function Returning Function
const greeting = function (greet) {
  return function (name) {
    return `${greet} ${name}`;
  };
};

const greeter = greeting('Yahuw');

transformer(greeter('iffat'), firstWordUpper);
