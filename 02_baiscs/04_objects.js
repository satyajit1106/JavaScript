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

const finalObj = {...obj1,...obj2,...obj3}
console.log(finalObj);

console.log(Object.keys(appUser)); // full name and uid are the keys 
console.log(Object.values(appUser)); // firstName and lastName are  values
console.log(Object.entries(appUser));
console.log(appUser.hasOwnProperty('uid'));