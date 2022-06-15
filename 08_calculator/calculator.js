const add = function(...args) {
  let sum = 0;

  for (let x in args) {
    //console.log(' x is : ' + x);
    sum += args[x];
  }
  return sum;
	
};

const subtract = function(...args) {
  return args[0] - args[1];
	
};

const sum = function(args) {

  let sum = 0;

  
  for (let x in args) {
    //console.log(` x is : ${x}`);
    //console.log(` args is : ${args[x]}`);
    sum += args[x];
  }
  
  return sum;
	
};

const multiply = function(args) {
  let multiply = 1;

  
  for (let x in args) {
    //console.log(` x is : ${x}`);
    //console.log(` args is : ${args[x]}`);
    multiply *= args[x];
  }
  
  return multiply;


};

const power = function(a,b) {
  return (a ** b);
	
};

const factorial = function(num) {
  let total = 1;

  for (let i = 1; i <= num; i++) {
    total = total * i;
  }

  return total;
	
};

//console.log("test 12re");
const temp = factorial(5);
console.log(temp);
console.log(typeof(temp));

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
