const ftoc = function(temp) {

  let tempConverted = 0;

  tempConverted = (temp - 32) * 5 / 9;
  return Math.round(tempConverted * 10) / 10;

};

const ctof = function(temp) {

  let tempConverted = 0;

  tempConverted = (temp * 9 / 5) + 32;
  return Math.round(tempConverted * 10) / 10;


};

console.log(ftoc(100));
console.log(ctof(0));

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
