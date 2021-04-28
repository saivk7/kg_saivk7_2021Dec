
const convert = require("./services")
//a map from int to word strings

var arr = [3,25,209]

var inputArgs = process.argv.slice(2)

if(inputArgs.length<1){
    console.error("No numbers found, Enter some numbers...")
    process.exit(1)
}

//console.log(inputArgs)


console.log(...convert(inputArgs))