/*
Modular implementation in this file.
For ES6 simple implementation, please check main2.js
*/

//importing convert function from services.js module 
const convert = require("./services")

//storing  CommandLine args in inputArgs array
const inputArgs = process.argv.slice(2)

if (inputArgs.length < 1) {
    console.error("No numbers found, Enter some numbers...")
    process.exit(1)
}

//console.log(inputArgs)
//converting inputArgs and logging output
const convertedNums = convert(inputArgs);
console.log(convertedNums.join(', '))