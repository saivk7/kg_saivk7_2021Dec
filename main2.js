//using the javascript ES6 functionality
//map that is used to convert int numbers to string representation
const stringNumbers = {
    "1" : "One",
    "2" : "Two",
    "3" : "Three",
    "4" : "Four",
    "5" : "Five",
    "6" : "Six",
    "7" : "Seven",
    "8" : "Eight",
    "9" : "Nine" ,
    "0" : "Zero",
    "." : "Point"
}

var inputArgs = process.argv.slice(2)
if(inputArgs.length<1){
    console.error("No numbers found, Enter some numbers...")
    process.exit(1)
}


var resultArray = []
inputArgs.forEach(number => {
    var stringNumber = "";
    [...number].forEach(c=>{
        stringNumber += stringNumbers[c];
    })
    resultArray.push(stringNumber);
});

console.log(...resultArray);