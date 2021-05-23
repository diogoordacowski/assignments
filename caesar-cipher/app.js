var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));
    //needs a constraint here to not allow any more than 26 or less than 0

let allLetters = input.split("")
let codeMsgArr = []

for (let i = 0; i < allLetters.length; i++) {
    let moveCount
    let singleLetter = allLetters[i].charCodeAt() - 97
    
    if (singleLetter === -65) {
        moveCount = singleLetter + 97
    } else {

        if (singleLetter + shift > 25) {
            //console.log("overflow")
            moveCount = (shift - (26 - singleLetter)) + 97
        } else {
            //console.log("normalflow")
            moveCount = (singleLetter + shift) + 97
        }

    }

    codeMsgArr.push(String.fromCharCode(moveCount))

}

console.log(codeMsgArr.join(""))

