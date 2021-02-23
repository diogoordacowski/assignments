const readline = require("readline-sync");
const name = readline.question("What is your name? ");
console.log(name + ", you are trapped in a room and you must escape")
const options = ["put hand in hole", "find the key", "open the door"]
let playerIsAlive = true
let hasKey = false

while (playerIsAlive) {
    
const choice = readline.keyInSelect(options, "What would you like to do next? ")  

    if (choice === 0) {
        playerIsAlive = false
        console.log("You died sir")
    }

    else if (choice === 1) {
        hasKey = true
        console.log("You have a key!")
    } 
    
    else if (choice === 2 ) {
        if (hasKey === true) {
            console.log("you escaped")
            break
        } else 
            console.log("you need a key to open the door") 
    } 
    
    else console.log("the game has ended and you have not escaped")
    break
        
}