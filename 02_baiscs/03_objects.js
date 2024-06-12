// Singleton:- In JavaScript, a singleton is a design pattern that ensures only one instance of a class is created and provides a global point of access to that instance. This is achieved by implementing a private constructor and a public static method to access the instance.
// Object.create this is the way of creating the singleton object
// -------------------------------------------------------------

// creating the symbol and then accessing them
const mySymb = Symbol("key1")

// object Literals
const JsUser={
    name:"satyajit",
    age:18,
    location:"Banglore",
    email:"satyajit@google.com",
    isLoggedIn:false,
    [mySymb]:"myKey1"
} 
// bts these values of object are used as the strings, while accessing these we need to access them as the strings

console.log(JsUser.email);
console.log(JsUser["email"]); // should use this

console.log(JsUser[mySymb]); // now it is used as the symbol

JsUser.email="satyajit@microsoft.com" // overwriting the values
console.log(JsUser["email"]);

Object.freeze(JsUser) // freezing the changes 
// now the changes won't get reflected
// JsUser.email="satyajit@microsoft.com"
// console.log(JsUser["email"]);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

// error 
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());