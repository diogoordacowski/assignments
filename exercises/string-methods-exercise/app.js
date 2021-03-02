// Write a function that takes a string as a parameter and returns the same string in all capital letters followed by all lowercase letters.

const inputName = "BiGlEbOwSkI"

wordTransform(inputName)

function wordTransform (inputWord) {
    const nameUpper = inputWord.toUpperCase()
    const nameLower = inputWord.toLowerCase()
    const finalName = nameUpper.concat(nameLower)
        
    console.log(finalName)
}

// Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down.

const inputName2 = "My name is Diogo F Ordacowski"

stringNumber(inputName2)

function stringNumber (inputWord2) {
    const halfOfLength = Math.floor(inputWord2.length / 2)

    console.log (halfOfLength)
}


// Write a function that uses slice() and the other functions you've written to return the first half of the given string.

const inputString = "Croods 2 is a surprisingly funny movie to watch with the kids"

sliceReturnHalf(inputString)

function sliceReturnHalf (input) {
    //get the length
    //divide by 2 with math.floor()
    // use this number as the end index parameter value of the slice method

    const stringTransformed = input.slice(0,Math.floor(input.length / 2))

    console.log(input.length,stringTransformed.length, stringTransformed)
}

// Write a function that takes a string as a parameter and returns that string where the first half is capitalized, and the second half is lowercase.

const inputString2 = "Why do I keep sneezing so much?"

stringCapLower(inputString2)

function stringCapLower (input) {
    const firstHalf = input.slice(0,Math.floor(input.length / 2))
    const secondHalf = input.slice(Math.floor(input.length / 2))
     
    const fullPhrase = firstHalf.toUpperCase() + secondHalf.toLowerCase()

    console.log(fullPhrase)
}

// Write a function that takes a string as a parameter and capitalizes any character that follows a space.

const inputString3 = "i am so sick of me sneezing so much"

let finalStringArr = []

capitalizeFirstLetters(inputString3)

function capitalizeFirstLetters  (input) {
    const splitInput = input.split(" ")

    for (var i = 0; i < splitInput.length; i++) {
        const firstLetterBig = splitInput[i].charAt().toUpperCase()
        const originalFirstOff = splitInput[i].substring(1)
        const allTogether = firstLetterBig + originalFirstOff

        finalStringArr[i] = allTogether
    }
    
    const finalString = finalStringArr.join(" ")

    console.log(finalString)

}

