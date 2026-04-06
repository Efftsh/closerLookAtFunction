'use strict';
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
