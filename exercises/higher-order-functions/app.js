/* A Higher Order Function/Method is a function that:
    1. Takes a function as a parameter
        // or
    2. Returns a function */

 //   Higher Order array methods follow that first criteria as they require a function as a parameter.  They do not return a function.

 function doMath(num1, num2, callBackPlaceholder) {
     return callBackPlaceholder(num1, num2)
 }

 function sum(num1, num2) {
     return num1 + num2
 }

 function sub(num1, num2) {
     return num1 - num2
 }

 function mult(num1, num2) {
     return num1 * num2
 }

 function div(num1, num2) {
     return num1 / num2
 }

 console.log (doMath(2, 3, mult), doMath(2, 3, div))



