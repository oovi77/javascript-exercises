const reverseString = function(strToReverse) {

    let strToReturn = '';
    let strLength = strToReverse.length-1;
    let char = '';


    for (let i = strLength; i >= 0; i--){
        char = strToReverse.charAt(i);
        strToReturn += char;

    }

    return strToReturn;

};

console.log(reverseString('hello world'));

// Do not edit below this line
module.exports = reverseString;
