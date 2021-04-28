//trial logic

//a map from int to word strings
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
    "0" : "Zero"
}
var arr = [3,25,209]

//helper method for each number
const convertStringToNumString = (number) =>{
    number = number.toString()
    var retString = "";
    for(var i =0; i<number.length;i++){
        //console.log(number[i])
        retString += stringNumbers[number[i]]
    }
    return retString;

}

console.log(convertStringToNumString(101))

//converts the given array
const convertToNumbers = (arr) =>{
    //return arrray that stores the final arrays of converted numbers
    var retArray = []
    for(var i =0;i<arr.length;i++){
        var num = arr[i];
        //console.log(num , typeof num)
        retArray.push(convertStringToNumString(num))
    }

    return retArray;
}

var ans = convertToNumbers(arr)

console.log(ans)