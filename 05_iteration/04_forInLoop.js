// forInLoop are generally used in objects

const ProgrammingLang={
    cpp:"c++",
    js:"javascript",
    ruby:"ruby",
    py:"python"
}

// for (const key in ProgrammingLang) {
//     console.log(key);
// } ---------->
// cpp
// js
// ruby
// py

for (const key in ProgrammingLang) {
    // console.log(`${key} shortcut is for ${ProgrammingLang[key]}`)
}

// in case of forin loop in case of array it dont take values directly if we pass the key it just prints the number unlike the forOfLoop

const myArray=["js","py","ruby","swift"]
// for (const key in myArray) {
//     console.log(key)
// }--------------------->
// 0
// 1
// 2
// 3

for (const key in myArray) {
    console.log(myArray[key])
}