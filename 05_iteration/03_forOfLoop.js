// for of loops are used in arrays

const arr=[1,2,3,4,5]

for (const iterator of arr) {        // here object refers to the array   
    console.log(iterator);           // (for of) loop automatically find the starting and ending,
}
// in forofloop it takes directly values

const greeting = "Be strong,things will get better,it may be stormy now but it never rainss forever"

for (const iterator of greeting) {
    if(iterator==" "){
        continue
    }
    console.log(iterator)
}

// Maps :- no duplicate values
// Maps are not iteratable

const map=new Map()
map.set('IN',"India")
map.set('USA',"United States Of America")
map.set('ENG',"England")
map.set('GER',"Germany")
map.set('IN',"India")

// we have entered 2 values of india but it takes only one entry of the india and the 
// console.log(map);

// for (const key of map) {
//     console.log(key);
// }
// ------------------->>> answer
// [ 'IN', 'India' ]
// [ 'USA', 'United States Of America' ]
// [ 'ENG', 'England' ]
// [ 'GER', 'Germany' ]

for (const [key,value] of map) {
    console.log(key ,":-", value);
}