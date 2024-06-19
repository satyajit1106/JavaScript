const myNum=[1,2,3]

// here 0 is the initial value that is passed into the accumulator 
// after the first value the accumulator automatically store the total i.e; accumulator+currentValue and stores the total till end of array

// can be used in system like shopping cart like add the values 

// const myTotal = myNum.reduce( function ( accumulator, currentValue ){
//     console.log(` accumulator Value : ${accumulator}`);
//     console.log(` current Value : ${currentValue}`)
//     return accumulator + currentValue
// }, 0)   

const myTotal = myNum.reduce( ( accumulator, currentValue )=>{ 
    return accumulator + currentValue
},0)

// console.log(myTotal);

const shoppingCart=[
    {
        courseName: "js",
        fees: 9999
    },
    {
        courseName: "py",
        fees: 7999  
    },
    {
        courseName: "dataScience",
        fees: 19999
    }
]

const totalPrice = shoppingCart.reduce( (accumulator, itemPrice)=>{
    return accumulator + itemPrice.fees
},0) 
// intial cart value is 0   
console.log(totalPrice);