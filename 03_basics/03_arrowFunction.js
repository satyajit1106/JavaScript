const user = {
    userName : "satyajit",
    price:999,

    greetings : function(){
        console.log(`Hello, ${this.userName}`);
    }
}
user.greetings()
user.userName="sachin"
user.greetings()

console.log(this);  // in this the result is empty string and in case of console the o/p comes out to be window object that are important to execute the function of the chrome

function satyajitJS(){
    // console.log(this);  // if we are using,this inside the function then it gives us multiple global macros and other function
}
satyajitJS()

function check(){
    username:"satyajit",
    console.log(this.username);
}
check()

// explicit return,where we are writing the return statement explicitely
const arrow= (num1,num2) => {        // no need of writing the function keyword here 
    return num1+num2
}
console.log(arrow(1,2));

//implicit return
const arrowFunction = (num1,num2) => num1+num2
console.log(arrowFunction(12,34));

// if we are wrapping the function with the curley brackets then we have to write the return statement and if you are wrapping it with the round brackets then we don't need to write the return statement
const arrowOneFunction = (num1,num2) => (num1+num2)
console.log(arrowOneFunction(12,42));