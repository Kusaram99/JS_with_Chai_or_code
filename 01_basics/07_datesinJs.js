// Dates

let myDate = new Date()
// console.log(myDate.toString()); // => Sat Nov 25 2023 11:19:04 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()); // => Sat Nov 25 2023
// console.log(myDate.toLocaleString()); // => 11/25/2023, 11:19:04 AM
// console.log(typeof myDate); // => object

// month start from 0 
// let myCreatedDate = new Date(2023, 0, 23) // => 1/23/2023, 12:00:00 AM
// let myCreatedDate = new Date(2023, 0, 23, 5, 3) // => 1/23/2023, 5:03:00 AM
// let myCreatedDate = new Date("2023-01-14") // => 1/14/2023, 12:00:00 AM
// let myCreatedDate = new Date("01-14-2023") // => 1/14/2023, 12:00:00 AM
// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now() // it will return time in milisecond

// // return current time stamp in miliscond
// console.log(myTimeStamp); //1700911577563
// console.log(myCreatedDate.getTime()); //1673654400000
// console.log(Math.floor(Date.now()/1000)); // second => 1700911630

let newDate = new Date()
console.log(newDate); // => 2023-11-25T12:01:15.136Z
console.log(newDate.getMonth() + 1); // => 11
console.log(newDate.getDay()); // => Saturday, 12 PM

// `${newDate.getDay()} and the time `

console.log(newDate.toLocaleString('default', {
    weekday: "long",
    hour:"numeric"
}))


