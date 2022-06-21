const findTheOldest = function(people) {
    let oldest = 0;
    let oldestPerson = '';
    curDate = (new Date()).getFullYear();
    //console.log(`current date is: ${(curDate)}`);
    
    
    for(let i = 0; i < people.length; i++){
      
      let age = 0;
      
      if(people[i].yearOfDeath === undefined) {
        age = curDate - people[i].yearOfBirth;
        
        
      } else {
        age = people[i].yearOfDeath - people[i].yearOfBirth;
      }
      //console.log(`age is: ${age} , curDate is: ${curDate}`);
      
      if (age >= oldest) {
        oldest = age;
        oldestPerson = people[i];
        //console.log(`oldestPerson is: ${oldestPerson}`);
      }
      
      
    }
    return oldestPerson;

};

// Do not edit below this line
module.exports = findTheOldest;
