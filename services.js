//this file stores the auxilary functions and numMap that the main requires

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
    "-": "Negative"
}

//helper method for converting each number
const convertNumToNumString = (number) => {

    var retString = "";     //retString stores the converted string number
    var leadingZero = true; //flag for checking leading zeros
    var negativeNumber = true; //flag for checking negative int

    for (var i = 0; i < number.length; i++) {
        /*
        Handling negative integer:
        If the given int is negative  (negativeNumber flag is set to true by default), we add 
        negative to the stringNumber and change flag to false
        */
        if (negativeNumber && number[i] === '-') {
            retString += stringNumbers[number[i]];
            negativeNumber = false;
            continue;
        }
        /*
        Handling leading zeroes:
        If the leading zero is true and the character at i is '0'
        and if it is not the last character, we skip the character 
        
        else, no leading zeros.
        
        */
        while (number[i] === '0' && i < number.length - 1 && leadingZero) {
            i++;
        }

        leadingZero = false; //once while loop is exited, no leading zeros to check anymore.
        retString += stringNumbers[number[i]]
    }
    return retString;
}


/*
converts the given array into string number array.
 Uses helper convertNumToNumString helper
*/
const convertToNumbers = (arr) => {
    //return arrray that stores the final arrays of converted numbers
    var retArray = []
    for (var i = 0; i < arr.length; i++) {
        var num = arr[i];
        //console.log(num , typeof num)
        retArray.push(convertNumToNumString(num))
    }

    return retArray;
}

module.exports = convertToNumbers;