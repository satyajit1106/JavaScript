// scope in vs code and the scope in console is different 
let a=100
if(true){
    let a=10
    let b=20
    console.log(a);
}
console.log(a); 

function addOne(num){
    return num+1
}
addOne(5)
const addTwo = function (num1){
    return num1+1
}
addTwo(5)