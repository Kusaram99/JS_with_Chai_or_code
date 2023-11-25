const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length); // => 3
// console.log(balance.toFixed(1)); // => 100.0


const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4)); // => 123.9

const hundreds = 1000000
// console.log(hundreds.toLocaleString()); // in US => 1,000,000
// console.log(hundreds.toLocaleString('en-IN')); // in India => 10,00,000

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math); // => {...}
// console.log(Math.abs(-4)); // => 4
// console.log(Math.round(4.5)); // => 5
// console.log(Math.ceil(4.02)); // => 5
// console.log(Math.floor(4.9)); // => 4
// console.log(Math.min(4, 3, 6, 8)); // => 3
// console.log(Math.max(4, 3, 6, 8)); // => 8

// console.log(Math.random()); // => a number from 0 to <1

// console.log((Math.random()*10) + 1); // => value between 1 to 10
// console.log(Math.floor(Math.random()*10) + 1); // => value between 1 to 10

const min = 10
const max = 20

// If we want value between the min and max
console.log(Math.floor(Math.random() * (max - min + 1)) + min) // => value will be between the min and max; 
