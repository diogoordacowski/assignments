var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

var alphabetArr = alphabet.split("")

var outputArr = []

forceptionArr(people, alphabetArr)

function forceptionArr (firstArr, secondArr) {
    for (var i = 0; i < firstArr.length; i++) {
        outputArr.push(firstArr[i] + ":")

        for (var s = 0; s < secondArr.length; s++){
            outputArr.push(secondArr[s])
        }

    }
}

console.log(outputArr)
