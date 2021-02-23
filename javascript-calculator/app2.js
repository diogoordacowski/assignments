const readline = require("readline-sync")

console.log("You are running app2.js")

var num1 = Number(readline.question("Please enter your first number: "))
var num2 = Number(readline.question("Please enter your second number: "))
var operation = readline.question("Please enter the operation to perform: add, sub, mul, div ")
//readline key in select
//get your options set variable to equal array with add sub mul div
//create 4 different functions one for add sub div mul
//if ele statemnet for you options variable 


var pass = true
var result = calculator(num1,num2)

if (pass === true) {
    console.log("The result is " + result)
} else {
    console.log("You entered an incorrect operation to perform. Pay more attention next time!")
}

function calculator (a,b) {
    if (operation === "add") {
        return a + b
    } else if (operation === "sub") {
        return a - b
    } else if (operation === "mul") {
        return a * b
    } else if (operation === "div") {
        return a / b
    } else {
        return pass = false
    }

}
