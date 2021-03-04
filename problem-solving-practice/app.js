//Write a function that takes an array of numbers and returns the largest (without using Math.max())

let numbers = [3, 5, 2, 8, 1]

let largest

function evaluateLargest(nums) {
    // evaluate each number in the array and return the biggest
    //loop starts at first index number, 
    //loop then looks at second number, 
    // if index 0 > index 1 , largest = index 0
    // else if index 0 < index 1 , largest = index 1

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[i + 1]) {
            largest = nums[i]
        } else if (nums[i] < nums[i + 1]) {
            largest = nums[i +1]
        }
    }
    console.log(largest)
}

evaluateLargest(numbers)

// - - - - - - - -  - - - - -  - - - - - - - - - -  - - - - - - - - -  - - - - - - - - -  - - - - - - - -  - - - - - - - - - - - -  - -

//Write a function that takes an array of words and a character and returns each word that has that character present.

let wordsArr = ["#3", "$$$", "C%4!", "Hey!"]
let character = "!"
let matchesArr = []

//loop to evaluate each array item

// if item inclues the character, push this item into the matchesArr array

function filterWordsThatMatch(arr, matchCharacter) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes(matchCharacter)) {
            matchesArr.push(arr[i])
        }
    }
    console.log(matchesArr)
}

filterWordsThatMatch(wordsArr, character)

// - - - - - - - -  - - - - -  - - - - - - - - - -  - - - - - - - - -  - - - - - - - - -  - - - - - - - -  - - - - - - - - - - - -  - -

// Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.

/*
isDivisible(4, 2) // => true
isDivisible(9, 3) // => true
isDivisible(15, 4) // => false

*/

const number1 = 16
const number2 = 4

function isDivisible (num1, num2) {
    if (num1 % num2 === 0) {
        console.log("it is divisible")
    } else console.log ("it is NOT divisible")
}

isDivisible(number1, number2)

// - - - - - - - -  - - - - -  - - - - - - - - - -  - - - - - - - - -  - - - - - - - - -  - - - - - - - -  - - - - - - - - - - - -  - -

