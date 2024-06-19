const myNum=[1,2,3,4,5,6,7,8,9,10]

// The map() method is an array method that creates a new array with the results of calling a provided function on every element in the calling array.
// const number = myNum.map( (value)=>{
//     return value+10
// } )


// chaining :- it is the process of adding one or more methods into a single array or datastructure
// next map or other method will take the value returned from the above method
const number = myNum
        .map( (val) => val*10 )

                    // |    the result of the first method is passed 
                    // |    into the second method and then to third
                    // V    [10,20,30,40,50,60,70,80,90,100]
        .map( (val) => val+1 )
                    // |    
                    // |    
                    // V    [11,21,31,41,51,61,71,81,91,101]

        .filter( (val) => val<50 )    //[11,21,31,41]

console.log(number);
