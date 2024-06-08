// There are two types of memory in javascript 
// stack(Primitive datatypes) and heap(Non-Primitive datatypes) memory
// in primitive datatype we get the value or copy and in case of nonPrimitive datatype we get the value as reference

let name="Satyajit"
anotherName="Ritik"
// console.log(anotherName);

anotherName=name
// console.log(anotherName)

let userOne={
    userName:"Aman",   
    USN:"AIT"
}
let objectAcess=userOne.USN
console.log(objectAcess);

let userTwo=userOne
userTwo.USN="VIT"
console.log(userTwo.USN)