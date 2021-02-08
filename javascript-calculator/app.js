const readline = require("readline-sync")

const num1 = parseFloat(readline.question("Please enter your first number: "))
const num2 = parseFloat(readline.question("Please enter your second number: "))
const operation = readline.question("Please enter the operation to perform: add, sub, mul, div ")

var result

if (operation === "add") {
    result = num1 + num2
    console.log("The result is " + result)
} else if (operation === "sub") {
    result = num1 - num2
    console.log("The result is " + result)
} else if (operation === mul) {
    result = num1 * num2
    console.log("The result is " + result)
} else if (operation === div) {
    result = num1 / num2
    console.log("The result is " + result)
} else {
    console.log("This failed because of a bad input")
}




