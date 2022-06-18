
//how to ignore punctuation?
//use .trim() to remove whitespace

const palindromes = function (word) {

    fixedWord = removePunctuation(word);
    reversedWord = reverseString(fixedWord);

    if (fixedWord === reversedWord) {
        return true;
    } else {
        return false;
    }

};

function removePunctuation (word) {
    let fixedWord = word.toLowerCase();
    //console.log(`fixedWord is : ${fixedWord}`);

    let newWord = '';


    for(let i = 0; i <= (fixedWord.length-1); i++) {

        let check = fixedWord[i].charCodeAt(0); 
        
        //console.log(check); 
        if(check >= 97 && check <= 122) {
            newWord +=fixedWord[i];
        }

        //97 to 122 is lowercase a to lowercase z
        
        /*
        console.log(`check is: ${check}`);
        console.log(`type of is: ${typeof(check)}`);
        */
    }
    //console.log(`Fixed punctuation is: ${newWord}`);
    return newWord;

}

function reverseString (word) {

    let reversedWord = '';

    for (let i = word.length-1; i >= 0; i--) {
        reversedWord += word[i];

    }

    //console.log(`reversed word is:${newWord}`);
    return reversedWord;
}


/*
let sentence = '  Test !  more. punctu ation!! ';
let temp = removePunctuation(sentence);
console.log(`Removed punctuation:${temp}`);
console.log(reverseString(temp));
*/
console.log(palindromes('car'));



charA = 'A';
chara = 'a';
charZ = 'Z';
charz = 'z';

/*
console.log(charA.charCodeAt(0)); //65
console.log(chara.charCodeAt(0)); //97
console.log(charZ.charCodeAt(0)); //90
console.log(charz.charCodeAt(0)); //122
*/

//65 to 90 is capital A to capital Z
//97 to 122 is lowercase a to lowercase z





// Do not edit below this line
module.exports = palindromes;
