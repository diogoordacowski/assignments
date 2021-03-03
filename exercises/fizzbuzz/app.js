/*Write a short program that prints each number from 1 to 100 on a new line.

For each multiple of 3, print "Fizz" instead of the number.

For each multiple of 5, print "Buzz" instead of the number.

For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

*/



const list = document.getElementById("mylist")
const newLi = document.createElement("li")


// loop that prints 1-100 on a new line

let number = 1
let counter = {
    fizzbuzz: 0,
    fizz: 0,
    buzz: 0,
 }

for (let i = 0; i < 100; i++){
    if (number % 5 === 0 && number % 3 === 0) {
        console.log("fizz buzz")
        counter.fizzbuzz = counter.fizzbuzz + 1
    } else if (number % 5 === 0) {
        console.log("buzz")
        counter.buzz = counter.buzz + 1
    } else if (number % 3 === 0 ) {
        console.log("fizz")
        counter.fizz = counter.fizz + 1
    } else console.log(number)
    number = number + 1
}

console.log (counter)
// if statement: 
    //if multiple of 3, print fizz
    //if multiple of 5, print buzz
    //if multiple of 3 && 5, print fizzbuzz

    

