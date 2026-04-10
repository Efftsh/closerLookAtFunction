'use strict';
/*//Default Parameter
//////////////////////
const bookings = [];
const createBooking = function (
  flightNumber = 'A302',
  passengerNumber = 1,
  price = 200 * passengerNumber,
) {
  const booking = {
    flightNumber,
    passengerNumber,
    price,
  };
  bookings.push(booking);
};

createBooking('LH123', 12, 400);
createBooking(undefined, 10);
createBooking(undefined, undefined, 500);
createBooking();
console.log(bookings);
 */

/* //How Passing Argument Works: Value vs Reference
//////////////////////
const flight = 'LH234';
const iffat = {
  name: 'Iffat Ashizam',
  passport: 2348439832,
};

const checkIn = function (flightNumber, passenger) {
  flightNumber = 'LH999';
  passenger.name = 'Mr ' + passenger.name;

  if (passenger.passport === 2348439832) {
    alert('Check in');
  } else {
    alert('Wrong Passport');
  }
};

// checkIn(flight, iffat);
// console.log(flight);
// console.log(iffat);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};
newPassport(iffat);
checkIn(flight, iffat); */

/* //Function Accepting Callback Functions
//////////////////////
//generic function
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};
const upperFirstWord = function (str) {
  const [firstWord, ...otherWord] = str.split(' ');
  return [firstWord.toUpperCase(), ...otherWord].join(' ');
};

//transformer
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('Javascript is the best', upperFirstWord);
transformer('Javascript is the best', oneWord);

const high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5);
['iffat', 'ash', 'izam'].forEach(high5); */

/* //Function Returning Functions
//////////////////////
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('iffat');
greeterHey('Ash');
greeterHey('Izam');

const greetArrow = greeting => name => console.log(`${greeting} ${name}`);
greetArrow('YO')('Farra');
const result = greetArrow('Yo');
result('Farra');
 */

/* //The Call, Apply, and Bind Method
//////////////////////
const airAsia = {
  name: 'Air Asia',
  iaitaCode: 'AA',
  bookings: [],
  book(flightNumber, name) {
    console.log(
      `${name} booked a seat on ${this.name} flight ${this.iaitaCode}${flightNumber}`,
    );
    this.bookings.push({ flight: `${this.iaitaCode}${flightNumber}`, name });
  },
};
airAsia.book(123, 'Iffat');

const MalaysiaAirlines = {
  name: 'Malaysia Airlines',
  iaitaCode: 'MAS',
  bookings: [],
};

const swiss = {
  name: 'Swiss Airlines',
  iaitaCode: 'LX',
  bookings: [],
};

//Call Method(Function Method)
const book = airAsia.book;
book.call(MalaysiaAirlines, 332, 'Ashizam');
console.log(MalaysiaAirlines);
book.call(swiss, 553, 'Izam');
console.log(swiss);
book.call(airAsia, 312, 'AshIffat');
console.log(airAsia);

//Apply Method(Function Method)
const flightData = [889, 'Pyro'];
book.apply(airAsia, flightData);
book.call(MalaysiaAirlines, ...flightData);

//Bind Mehtod(Function Method)
const bookMas = book.bind(MalaysiaAirlines);
const bookSw = airAsia.book.bind(swiss);
const bookAa = book.bind(airAsia);

bookMas(577, 'Thosiro');

const bookMas23 = book.bind(MalaysiaAirlines, 23);
bookMas23('Zaira');
bookMas23('Zaidi');

//With EventListerner
airAsia.planes = 300;
airAsia.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

const buyPlanebtn = document.querySelector('.buy');
buyPlanebtn.addEventListener('click', airAsia.buyPlane.bind(airAsia));

//Partial Application
const addTax = (rate, value) => console.log(value + value * rate);

const addVAT = addTax.bind(null, 0.23);

addVAT(400);

const addTax2 = rate => value => console.log(value + value * rate);
const addVAT2 = addTax2(0.23);
addVAT2(400);
 */

/* //Immediately Invoking Function Expression(IIFE)
//////////////////////
//Normal Function Expressin
const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

//Only run once function Expression
(function () {
  console.log('This function Expression will never run again');
})();

(() => {
  console.log('This Arrow function will never run again');
})();
{
  var privateNum = 20;
}
console.log(privateNum);
 */

/* //Closure
//////////////////////
const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passenger`);
  };
};
const booker = secureBooking();
booker();
booker();
booker() 
*/

/* //Moren Closure Example
//////////////////////
let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};
g();
f();
console.dir(f);
h();
f();
console.dir(f);

const boardPassenger = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`We are now boarding all ${n} passenger`);
    console.log(`There are 3 groups, each with ${perGroup} passenger`);
  }, wait * 1000);

  console.log(`Will start bording in ${wait} seconds`);
};

boardPassenger(180, 3);
 */
