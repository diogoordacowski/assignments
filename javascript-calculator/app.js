const readline = require("readline-sync")

var num1 = Number(readline.question("Please enter your first number: "))
var num2 = Number(readline.question("Please enter your second number: "))
var operation = readline.question("Please enter the operation to perform: add, sub, mul, div ")

var result

if (operation === "add") {
    result = num1 + num2
    } else if (operation === "sub") {
        result = num1 - num2
    } else if (operation === "mul") {
        result = num1 * num2
    } else if (operation === "div") {
        result = num1 / num2
    } else {
        result = "not possible because I don't know what operation to use"
    }

console.log("The result is " + result)
