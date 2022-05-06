const removeFromArray = function(anArray, ...numsRemoved) {

    let inner = anArray.length;
    let outer = numsRemoved.length;
    let arrayToReturn = [];

    for (let i = 0; i<=outer; i++) {

        //inner = anArray.length;

        for (let j = 0; j<=inner; j++){
            
            if(numsRemoved[i] === anArray[j]) {
                anArray.splice(j,1);
            }

        }
    }
  
    

    return anArray;



};

console.log(removeFromArray([1, 2, 3, 4, 5, 6, 7, 8], 1, 2, 8));


// Do not edit below this line
module.exports = removeFromArray;
