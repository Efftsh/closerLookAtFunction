'use strict';
/* //Higher-Order Function
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

transformer(greeter('iffat'), firstWordUpper); */

//Call,Apply, and Bind Function Method
const person1 = {
  name: 'John Doe',
  birthYear: 2002,
  otherDetail: [],
};
const person2 = {
  name: 'John Smiht',
  birthYear: 2001,
  otherDetail: [],
};
const person3 = {
  name: 'Marter Cooper',
  birthYear: 1999,
  otherDetail: [],
};
const details = function (location, city) {
  const age = 2026 - this.birthYear;
  console.log(`${this.name} live in ${location}, ${city} and ${age} years old`);
  this.otherDetail.push({ location, city, age });
};

//Call Method
details.call(person1, 'Sabah', 'Papar');
details.call(person2, 'Sabah', 'Kota Kinabalu');
details.call(person3, 'Sabah', 'Tawau');

//Apply Method
const detail1 = ['Sabah', 'Kinarut'];
const detail2 = ['Sabah', 'Beaufort'];
const detail3 = ['Sabah', 'Inanam'];

// details.apply(person1, detail1);
// details.apply(person2, detail2);
// details.apply(person3, detail3);

//Call Method (Spread Operator)
details.call(person1, ...detail1);
details.call(person2, ...detail2);
details.call(person3, ...detail3);

//Bind Method
const detailp1 = details.bind(person1, 'Sabah');
detailp1('Keningau');
detailp1('Menggatal');
detailp1('Tawau');

//Parital Application
const sum = function (a, b) {
  return a + b;
};

const sumA = sum.bind(null, 10);
console.log(sumA(40));
console.log(sumA(20));
console.log(sumA(55));

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
*/
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const input = Number(
      prompt(
        ` ${this.question}\n${this.options.join('\n')}\n(Write option number)`,
      ),
    );
    if (Number.isNaN(input)) {
      alert('We Only Accept Numbers');
    } else if (input >= 0 && input < this.options.length) {
      this.answers[input]++;
      this.displayResult(
        prompt("choose between 'Array' or 'String' to display the poll result"),
      );
    } else {
      alert('We Only Accept Number From 0-3');
    }
  },
  displayResult(type = 'array') {
    const lowCase = type.toLowerCase();
    const answer = this.answers.join(' ');
    if (lowCase === 'array') {
      console.log(this.answers);
    } else if (lowCase === 'string') {
      console.log(`Poll results are ${answer} `);
    }
  },
};

const bonus1 = {
  answers: [5, 2, 3],
};
const bonus2 = {
  answers: [1, 5, 3, 9, 6, 1],
};

poll.displayResult.call(bonus1, 'array');
poll.displayResult.call(bonus1, 'StRing');
poll.displayResult.call(bonus2, 'array');
poll.displayResult.call(bonus2, 'sTrIng');
const pollBtn = document.querySelector('.poll');
pollBtn.addEventListener('click', poll.registerNewAnswer.bind(poll));
