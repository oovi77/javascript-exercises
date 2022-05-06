const repeatString = function(strToRepeat, num) {

    let stringToReturn = '';

    if (num < 0) {
        stringToReturn = 'ERROR';
        return stringToReturn;
    }

    for (let i = 0; i < num; i++){
        stringToReturn += strToRepeat;

    }
    return stringToReturn;



};

/*console.log(repeatString('hey',3));*/


// Do not edit below this line
module.exports = repeatString;
