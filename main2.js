//using the javascript ES6 functionality
//map that is used to convert int numbers to string representation
const stringNumbers = {
    "1": "One",
    "2": "Two",
    "3": "Three",
    "4": "Four",
    "5": "Five",
    "6": "Six",
    "7": "Seven",
    "8": "Eight",
    "9": "Nine",
    "0": "Zero",
    ".": "Point",
    "-": "Negative",
}

var inputArgs = process.argv.slice(2)
if (inputArgs.length < 1) {
    console.error("No numbers found, Enter some numbers...")
    process.exit(1)
}

//using for each on array inputArg, storing the converted in resultArray
var resultArray = []
inputArgs.forEach(number => {
    var stringNumber = "";
    var leadingZero = true; //for leading zero check
    var negativeNumber = true; //flag for checking negative integers
    var lenOfNumber = number.length; //stores the length of number string
    [...number].forEach(c => {
        /*
        Handling negative integer:
        If the leading c = '-' and negativeNumber flag is set to true, we add 
        negative to the stringNumber and change flag to false
        */
        if (negativeNumber && c === '-') {
            stringNumber += stringNumbers[c];
            lenOfNumber--;
            negativeNumber = false;
            return;
        }
        /*
        Handling leading zeroes:
        If the leading zero is true and the character c is '0'
        and lenOfNumber !=1, we skip the number 
        
        else, no leading zeros.
        
        (lenofNumber handles all zeros '0000' case)
        */
        while (c === '0' && leadingZero && lenOfNumber != 1) {
            lenOfNumber--;
            return;
        }

        leadingZero = false;
        stringNumber += stringNumbers[c];
    })
    resultArray.push(stringNumber);
});

console.log(resultArray.join(', '))