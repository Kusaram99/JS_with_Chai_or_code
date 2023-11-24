"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 + 3); // code readability should be high

console.log("Ram");

let name = "Ram";
let age = 18;
let isLoggedIn = false;
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => undefined
// symbol => unique

// object

// console.log(typeof undefined); // undefined
// console.log(typeof name); // object
console.table([
  typeof name,
  typeof isLoggedIn,
  typeof age,
  typeof state,
  typeof null,
]);
