// new keyword is use as the instance

// creating the promises
const promiseOne = new Promise(function(resolve,reject){
    // Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        // console.log("Async task completed");
        resolve() // it will always work after the async task is completed 
    },1000)
})

// .then is directly connected to resolve argument in function through "" resolve() ""
promiseOne.then(function(){
    // console.log("Promise consumed");
})

// creating and consuming together
// unlike Httprequest we dont need to make function for each process like first make request then execute the request , here we make the promise then call resolve when our task is completed

new Promise(function(resolve,reject){
    setTimeout(function(){
        // console.log("Async task 2 completed");
        resolve()
    }, 1000);
}).then(function(){
    // console.log("promise for task 2 consumed");
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(() => {
        resolve({userName: "satyajit", email: "satyajit.discord@gmail.com"})    // we can send object, array, etc
    }, 1000);
})
promiseThree.then(function(user){
    // console.log(user);
})


const promiseFour = new Promise(function(resolve,reject){
    let error = false;
    if(!error){
        resolve({userName: "Satyajit", password: 1234})
    }else{
        reject("ERROR, Something went wrong!")
    }
})

promiseFour
.then(function(user){
    // here we cant directly print the userName so we use chaining
    return user.userName
})
.then(function(username){
    // console.log(username);
})
.catch(function(error){
    // console.log(error);
})
.finally(()=>{
    // console.log("finally our problem is either resolved or rejected ");
})

// this is called chaining in the js as it is used to get the data from its above function and widely used in the database for getting data

// _____________________________________________________________________


const promiseFive = new Promise(function(resolve,reject){
    let error = true;
    if(!error){
        resolve({userName: "javaScript", password: 1234})
    }else{
        reject("ERROR, JS went wrong!")
    }
})
// we can user async-await to handle the promise but we need to gracefully handle the error condition using try catch block

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        // console.log(error);
    }
}

consumePromiseFive()


// here async and await is used to fetch the data from the given api

// async function getUserData(){
//     try {
//         const response = await fetch('https://api.github.com/users/satyajit1106')

//         // response.json() also takes time to generate response so we need to put it in await 
//         const data = await response.json() 
//         console.log(data);
//     } catch (error) {
//         console.log('E:', error);
//     }
// }
// getUserData()


// we can directly fetch the data from the api using the then and catch chaining 
fetch('https://api.github.com/users/satyajit1106')
.then(function(response){
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})

