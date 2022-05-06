const sumAll = function(num1, num2) {

    let total = 0;

//for tomorrow - make it work when num1 is the larger number and use typeof for ERROR if
//the user doesn't input a number??
    if (num1 < 0 || num2 < 0) {
        return 'ERROR';
    } 

    if (typeof(num1) != 'number' || typeof(num2) != 'number') {
        return 'ERROR';
    }

    if (num1 < num2) {
        for (let i = num1; i<=num2; i++){
            total += i;
        }
    } else if (num1 > num2) {
        for (let j = num2; j<=num1; j++){
            total += j;
        }
    } else if (num1 === num2){
        total = num1;
    }


    return total;

};

console.log(sumAll(5, 3));

// Do not edit below this line
module.exports = sumAll;
