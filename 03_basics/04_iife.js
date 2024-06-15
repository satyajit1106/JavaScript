// immediately invoked function expression (IIFE)
// why we use?
// to remove the global scope's or variable's pollution we use iife 

(function nameFunction(){
    //named IIFE
    userName="satyajit",
    console.log(`How are you`)
})();

// this iife dont know where to stop so we need to explicitely use the ; to give end line 

((name)=>{
    console.log(`${name} how are you?`);
})("satyajit")

// here we use the arrow function and in the parameter and to execute it we pass the value as the parameter