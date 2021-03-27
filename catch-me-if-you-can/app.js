// 1a) Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type number:
const number1 = 2
const number2 = 6
let result = sum(number1, number2)

function sum(num1,num2) {
    try {
        if (typeof(num1) === "number" && typeof(num2) === "number") {
            return num1 + num2
        } else {
            throw new Error ("1A) Cannot sum if the arguments are not numbers\n")
        }   
    }   
    catch(err) {
        console.log(err)
    }
}

if (result != undefined) {
    console.log(`1A) Answer: ${result}\n`)
}

// 1b) Call the sum function inside a try block using "1" and "2" as arguments. Use console.log within a catch block to inform the user of the error.
let numberA = 2
let numberB = "8"
let result2

function sum2(num1, num2) {
    if (typeof(num1) === "number" && typeof(num2) === "number") {
        result2 = num1 + num2
    } else {
        return "failed"
    }  
}

try {    
    if (sum2(numberA,numberB) === "failed") {
        throw new Error("1B) Cannot sum if the arguments are not numbers\n")
    } else {
        console.log(`1B) Answer: ${result2}`)
    }    
}
catch (err) {
    console.log(err)
}

//2a) Given a user object, write a function called login that takes a username and password as parameters. Throw an error if either of them don't match. Otherwise, log to the console a message saying "login successful!"

const inputName = "bob"
const inputPass = "123#@!BATmobile"
let user = {
    name: "DiCowski",
    password: "123#@!BATmobile"
}
const userName = user.name
const userPass = user.password
const loginAttempt = login(inputName, inputPass)

function login(uName, uPass){
    try {
        if (inputName === userName && inputPass === userPass) {
            console.log(`2A) Answer: Login Successful`)
        } else {
            throw new Error (`2A) Answer: Login Failed`)
        }
    }
    catch (err) {
        console.log (err)
    }
}

// 2b) Call the login function within a try block. In one instance use the correct credentials, and in another use incorrect ones. Make sure you see the appropriate message!

const inputName2 = "bob"
const inputPass2 = "123#@!BATmobile"
let user2 = {
    name: "DiCowski",
    password: "123#@!BATmobile"
}
const userName2 = user2.name
const userPass2 = user2.password

function login2(uName, uPass){
    if (uName === userName2 && uPass === userPass2) {
        console.log(`2B) Answer: Login successful`)
    } else {
        throw new Error (`2B) Answer: Login failed`)
    }
}

try {
    login2(inputName2, inputPass2)
} catch(err) {
    console.log(err)
}




