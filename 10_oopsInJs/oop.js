// in javaScript the basic unit is object and it is only the object Literal

const user = {
    userName : "satyajit",
    loginCount : 8,
    signedIn : true,

    getUserDetails : function(){
        console.log(`userName : ${this.userName}`);
    }
}

// console.log(user);
// console.log(user.getUserDetails());

// new is the constuructor function, which allows us to make many instances from the single objectLiteral, new keyword create new context
// const promiseOne = new Promise()

function User( username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        // console.log(`Welcome! ${this.username}`);
    }

    // return this
    // by default the function return the value
}

// const userOne = User("satyajit", 5, true);
// const userTwo = User("Patra", 2, false);

// when we pass the values of the function again it overwrite the value, just think if there are several programmers doint the same task on the function then will create the issue to resolve this issue we use the new keyword to create the new instance of the variable again


const userOne = new User("satyajit", 5, true);
const userTwo = new User("Patra", 2, false);

console.log(userOne.constructor);
// constructor property is the reference property, that reference itself i.e;function[user]

// console.log(userTwo);

// here it store the copy of each variable saperately ans can not be overwritten by other function call 


// when the new keyword is called it creates the empty object called as instance
// secondly the constructor function is called due to new keyword
// argument of this keyword is injected 


// userOne, userTwo helps to encapsulate the data, user is not knowing the implementaion of the function



// {--  Read instanceof from mdn  --}