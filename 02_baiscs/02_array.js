const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);
// concatination allows to append the element in the end of the array without the square brackets for another array

// const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros);
// ... is called the SPREAD operator that allows you to spread the elements in the array like concatination do

// const arr1=[1,2,[3,4,[5,6,10],22,45],12,56]
// const arr2=arr1.flat(Infinity)
// console.log(arr2)

console.log(Array.isArray("satyajit")); // Array.isArray() checks if the passed value is an Array. It does not check the value's prototype chain, nor does it rely on the Array constructor it is attached to.

console.log(Array.from("satyajit")); // To convert an ordinary object that's not iterable or array-like to an array

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3)); // it helps to create the list of the elements in the 