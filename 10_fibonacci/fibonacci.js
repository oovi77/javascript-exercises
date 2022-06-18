const fibonacci = function(fibN) {

    n0 = 1;
    n1 = 1;
    fibArray = [n0, n1];
    num = Number(fibN); //converts fibN if a str into a number

    if (num <= 0) {
        return 'OOPS';
    }

    if (num === 2 || num === 1) {
        return 1;
    }

    //number = 3

    for (let i = 2; i< num; i++) {
        fibArray.push(n0 + n1);
        n0 = fibArray[i-1];
        n1 = fibArray[i]
        //console.log(`n0: ${n0} and n1: ${n1}`);
        //console.log(`Fib Array is now: ${fibArray}`);
    }

    return n1;


};

console.log(fibonacci(4));

//fibonacci number - sum of two preceding numbers
// series is:    1, 1, 2, 3, 5, 8...


// Do not edit below this line
module.exports = fibonacci;
