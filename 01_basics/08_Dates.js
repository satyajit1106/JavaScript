// dates

let myDate = new Date()
// console.log(myDate);

// console.log(myDate.toString()); 
// console.log(myDate.toISOString()); 
// console.log(myDate.toLocaleString()); 
// console.log(myDate.toTimeString()); 

// let myCreatedDate = new Date(2023,1,23) // here i have created the date as (yyyy,mm,dd) months start from 0 in javaScript

// let myCreatedDate = new Date(2023,1,23,5,3)
// let myCreatedDate = new Date("2023-01-23")
let myCreatedDate = new Date("11-30-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);

console.log(myCreatedDate.getTime()); // here we can compare the two times and it helps in creating the booking and travel app

console.log(Math.floor(myTimeStamp/1000)); // we get the time in seconds and Math.floor for removing the decimals

let newDate = new Date()
console.log(newDate.getDay());
console.log(newDate.getFullYear());
console.log(newDate.getHours());
console.log(newDate.getMonth());
console.log(newDate.getTime());

console.log(newDate.toLocaleString('default',{ weekday:'long',minute:'2-digit'}));