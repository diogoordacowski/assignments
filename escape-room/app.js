const readline = require("readline-sync");
const colors = require("colors");

gameIntro()

function gameIntro() {

    const name = readline.question("What is your name? ".green);

    console.log("Hi ".green + name.green + ",".green + " you are trapped in a room!".red)

    if (readline.keyInYN("Are you scared?".green)) {
        console.log("You should be scared!".red)
        console.log("Now let\'s get you out of this room.".green);
    } else {
        console.log("You will be scared soon enough!".red)
        console.log("Let\'s get you out of this room.".green);
    }
    console.log(name.yellow + ", you must choose your next move carefully:".yellow)
    gameBegins()
}



function gameBegins() {
    var
            options = ["Put hand in hole", "Find the key", "Open the door"],
            index = readline.keyInSelect(options, "Which option will you take?".green);

        var choice = options[index]

        switch (choice) {
            case "Put hand in hole":
                console.log("Your curiosity got you killed!".red)
                console.log("There is ".red + "no reason".green + " for you to be putting your hand in there. Why would you do that?".red)
                if (readline.keyInYN("Would you like to play again?".green)) {
                    gameIntro()
                } else {
                    console.log("See you later homie!".yellow);
                }
                break

            case "Find the key":
                console.log("This is a wise choice! You looked around and found a key!".yellow)
                console.log("Continue your escape now that you have your ".green + "key".red)
                foundKey()
            break

            case "Open the door":
                console.log("You cannot open a door without a ".green + "key ".red + "first.".green)
                gameBegins()
                break

            case undefined:
                console.log("You ".blue + "cannot ".red + "cancel your way out of an escape room!".blue)
                gameBegins()
            }

}

function foundKey() {

    var
            options = ["Put hand in hole", "Open the door"],
            index = readline.keyInSelect(options, "Which option will you take?".green);

        var choice = options[index]

        switch (choice) {
            case "Put hand in hole":
                console.log("Your curiosity got you killed!".red)
                console.log("There is ".red + "no reason".green + " for you to be putting your hand in there. Why would you do that?".red)
                if (readline.keyInYN("Would you like to play again?".green)) {
                    gameIntro()
                } else {
                    console.log("See you later homie!".yellow);
                }
                break

            case "Open the door":
                console.log("You escaped!".yellow +" You are a real Harry Houdini!".green)
                break

            case undefined:
                console.log("You ".blue + "cannot ".red + "cancel your way out of an escape room!".blue)
                foundKey()
            }

}

    

