const accountId=12345
let accountEmail="satyajit.patra@gmail.com"
var accountPassword="123"
accountCity="indore"
let accountState;

// accountId=123 not allowed
accountEmail="satyajit@gmail.com" //we can change 
accountPassword="1234"
accountCity="banglore"

console.log(accountPassword);
console.table([accountEmail,accountPassword,accountCity,accountState])

/* prefer not to use var because of issue in block and functional scope */