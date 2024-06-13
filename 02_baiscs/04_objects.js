// const tinderUser = new Object() ,this is singleton Object
// const tinderUser = {} ,this is non singleton Object

const appUser = {
    fullName:{
        firstname:"satyajit",
        lastName:"Patra"
    },
    uid:"abc123"
}

console.log(appUser.fullName.lastName);

const obj1= {1:'a' , 2:'b'}
const obj2= {3:'a' , 4:'b'}
const obj3= {5:'a' , 6:'b'}

// const finalObj = Object.assign({},obj1,obj2,obj3) // {} empty string allows to store the objects

const finalObj = {...obj1,...obj2,...obj3}  //spread operator is used to store all the elements of array in the same array and then console out
console.log(finalObj);

console.log(Object.keys(appUser)); // full name and uid are the keys 
console.log(Object.values(appUser)); // firstName and lastName are  values
console.log(Object.entries(appUser));
console.log(appUser.hasOwnProperty('uid'));

// // __________________________ object deStructuring __________________________

// const course={
//     instructorName:"satyajit",
//     courseName:"JS in Hindi",
//     price:999
// }
// const {instructorName} =course // it is used to deStructure the instructorName and we wont write course.insturctorName every-where where we need the course instructorName
// console.log(instructorName);

const {instructorName:inst} =course // it is used to deStructure the instructorName into inst
console.log(inst);

// __________________________ Concept Of API's ________________________________
// api's are present in the form of json earlier it used to be in form of XML

// it is json and it has key and value and both are present in strings formate although it is showing error but it's syntactically correct
// {
//     "name":"satyajit",
//     "courseName":"js hindi"
// }

// it is not the thumb rule of getting api's in form of objects it can be in form of the arrays
