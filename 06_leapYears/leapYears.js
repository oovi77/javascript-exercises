const leapYears = function(year) {

    //determines whether or ot a given year is a leap year
    //leap years are divisible by four (1984 and 2004)
    //years divisible by 100 are not leap years (1800 and 1900)
    //unless they are divisible by 400 (like 1600 and 2000)

    let isYear = false;

    if (year % 4 === 0){
        isYear = true;
    }

    if (year % 100 === 0) {
        isYear = false;
    }

    if (year % 400 === 0){
        isYear = true;
    }

    return isYear;

};

// Do not edit below this line
module.exports = leapYears;
