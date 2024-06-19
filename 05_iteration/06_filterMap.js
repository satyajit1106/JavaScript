const myArray=["js","py","ruby","swift","satyajit"]

const value = myArray.forEach( (item)=>{
    // console.log(item)
    // return item
} )
// console.log(value); ------> undefined


const myNum=[1,2,3,4,5,6,7,8,9,10]

//acts same as the call back function as we need to pass the condition 
const number=myNum.filter( (value)=> value>4 )
// console.log(number);

//if we pass any condition in scope then we need to write the return statement as it dont automatically return like in case of ()
const number1=myNum.filter( (value)=> {
    return value>4
})
// console.log(number1);

// to do the same task using the forEach function 
newArr=[]
myNum.forEach( (value)=>{
    if(value>8){
        newArr.push(value)
    }
} )
console.log(newArr);