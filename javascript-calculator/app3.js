const readline = require("readline-sync")

const options = ["add", "sub", "mul", "div"]

const choice = readline.keyInSelect(options, "What operation would you like to conduct? ")

const input1 = Number(readline.question("What is the first number? "))

const input2 = Number(readline.question("What is the second number? "))

let result

performOperation(choice)

function performOperation () {
    if (choice === 0) {
       
        addNumbers(input1,input2)

        
    } else if (choice === 1) {
        
        subtractNumbers(input1,input2)


    } else if (choice === 2) {
        
        multiplyNumbers(input1,input2)


    } else  divideNumbers(input1,input2)
}


function addNumbers (num1, num2) {
    result = num1 + num2
    console.log(result)
}

function subtractNumbers (num1, num2) {
    result = num1 - num2
    console.log(result)
}

function multiplyNumbers (num1, num2) {
    result = num1 * num2
    console.log(result)
}

function divideNumbers (num1, num2) {
    result = num1 / num2
    console.log(result)
}


