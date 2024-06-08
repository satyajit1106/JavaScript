const score=100
const balance= new Number(200)

// console.log(typeof balance);
// console.log(balance.toString().length); balance converted to the stiring
// console.log(typeof (balance));
// console.log(balance.toFixed(5)); we get decimal till 5-digit

const otherNumber=23.86969
// console.log(otherNumber.toPrecision(4)); 3 precise value and the 4th one is rounded of

const hundred=1000000
// console.log(hundred.toLocaleString('en-IN'));

// ___________________ MATHS  ______________________

// console.log(Math.abs(-4))
// console.log(Math.round(4.5)); round off the number
// console.log(Math.ceil(4.3)); takes the upper value 
// console.log(Math.floor(4.9)); floor is used to take lower value

// floor and ceil are mostly used to control the round value , like 1.5 etc

// console.log(Math.random()); value is always in between the 0-1

// creating the numbers from 1-9
// let num=Math.random()*10; // values from 0-10

// console.log(num.toPrecision(1)); // here i have used precision to get the single digit number
// console.log(Math.round(num)); // now here i have rounded it up to get the single digit number


// ***SUPER IMPORTANT FORMULA to get values in certain range
const min=10
const max=20

console.log( Math.floor( (Math.random() *(max-min+1)) + min) );