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
  console.log(booking);
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
