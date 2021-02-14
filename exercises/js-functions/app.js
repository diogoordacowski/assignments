// FUNCTIONS | example of a simple function

function addNumbers() {
    console.log(2+2)
}

addNumbers()

// FUNCTION EXPRESSION | example below demonstrate a function that is expressed through a variable

var mySumFunction = function () {
    console.log(2 + 2)
}

mySumFunction()

// FUNCTION PARAMETERS | giving the function the data that it should work with (arguments) through placeholders (parameters). In example below, sum() function is called with arguments 8 & 87 that will be passed into the parameters of the sum() function

function sum(num1, num2) {
    return num1 + num2
}

var result = sum(8, 87)
console.log (result)

// FUNCTION EXAMPLE taking all forms of data types from arguments passed into the function's parameters

function myFunc (data) {
    console.log(data)
}

myFunc(1)
myFunc("hello")
myFunc([1,2,3,4,5])
myFunc({name: "joe"})

// FUNCTION EXAMPLE passing in an array as an argument into the parameters of the function and then letting the function evaluate it with a for loop

function loopingArray (array) {
    for (var i = 0; i < array.length; i++) {
        console.log("Logging the number " + array[i])
    }
}

loopingArray([1,2,3,4,5,6,7,8])