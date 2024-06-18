const myArray=["js","py","ruby","swift","satyajit"]

// since it is a callback function it dont have any name , these are so powerful function that these dont req any external mention of the starting and the ending of the array

// iterator ko hi print karna hai
myArray.forEach( function (key){    
    // console.log(key);
} )

// can do the similar task using the arrow function also
myArray.forEach( (key)=>{
    // console.log(key);
} )

// if you have made the function somewhere else and you want to add it to your forEach function then use these
function printItself(item){
    // console.log(item);
}

myArray.forEach(printItself)

// callbackfn(value: string, index: number, array: string[])
myArray.forEach((item,key,arr)=>{
    console.log(item,key,arr);
})

// to take the access of the elements inside the array
const myCoding=[
    {
        language:"javascript",
        acronym:"js"
    },
    {
        language:"typescript",
        acronym:"ts"
    },
    {
        language:"cpp",
        acronym:"C++"  
    }
]
myCoding.forEach( (item)=>{
    console.log(item.language);
    console.log(item.acronym);
} )
