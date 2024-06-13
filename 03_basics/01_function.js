function sum (a,b){
    console.log(a+b);
}
sum(1,2)

function sub (a,b){
    return a-b
}
const substraction = sub(2,1)
console.log(substraction);


function loginUser (userName="user"){       // here user is the default value of userName if in case userName is not given then js will automatically print the user as username    
    return `${userName} loggin Successful`
}
console.log(loginUser());
console.log(loginUser("satyajit"));

// _______________________________________ intermediate function _______________________________________

function calculateCartPrice(...num1){       // ... is the 
    return num1
}
console.log(calculateCartPrice(100,200,300,400,500));

// ________________________________________________________________________________________________________
// decleration of object 
// const user={
//     userName:"satyajit",
//     price:199
// }

// decleration of function
// function handleObject(anyObject){     
//     console.log(`Name of the user is ${anyObject.userName} and price is ${anyObject.price}`); 
// }
    
// handleObject(user)
// ________________________________________________________________________________________________________
// it is not manditory we need to declare the object to fetch it throught the function
function handleObject(anyObject){     
    console.log(`Name of the user is ${anyObject.userName} and price is ${anyObject.price}`); 
}
handleObject({
    userName:"satyajit",
    price:999
})