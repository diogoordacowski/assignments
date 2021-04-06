// const : doesn't change and if you try to change it, the program will break. Generally speaking, lead with 'const' when creating variables and if you must, update them to 'let' if the program breaks. You cannot declare a 'const' without giving it a value. 

const name = "joe"

console.log(name)

// this 'const' tries to change value and thus you'll notice in the console that this is rejected with an error. (uncomment for viewing error in console)
                   
                 /* name = "mike"
                    console.log (name) */

// let : changing the value is fine 

let age = 23

age = 24

console.log(age)

// spread: can be used on objects and arrays. It copies the contents and puts them into a new array 

const colors1 = ["red", "blue"]
const colors2 = ["green", "purple"]

const allColors = [...colors1, ...colors2]

console.log(allColors)

const person = {
    firstName: "Joe",
    lastName: "Ingles",
    age: 33
}

const personCopy = { ...person} // here, spread '...' makes a copy of the person object with its own values. It is not two instances referring to the same object. To prove, we will add a new hairColor property to the original 'person' object and then we will console.log both person and copy to observe its different values. 

person.hairColor = "brown"

console.log(personCopy)
console.log(person)



// rest: it looks for any amount of arguments and puts them into an array. Syntax is '...arrayname'. It is nice to dynamically ingest however many arguments I need to with this. Anytime a ... is within a function parameter, it is being used as rest

function maxNumber (...nums) {
    console.log(nums)
}

maxNumber(0, 4, 5, 9, 0, 2, 3)

// template literals : used to make strings with ` ` which makes it cleaner

const myName = "Jordan"

console.log(myName + " would like to use quotes but sucks with this method \"\" \" \"\"\" \" \' \'\'\' \' \" ")

console.log(`${myName} would like to use double quotes "" " ' ' and can without issues here`)

// arrow functions : rules {if only 1 argument is used, no need for parentheses | if 0 or 2+ arguments, then parantheses are required | has an implicit return so if only one thing must be returned, no need for the {} and make it into one line (see example below)}

const functionWord = "function"

declarationFunction(functionWord)

function declarationFunction(word) {
    console.log("This is a " + word + " declaration")
}

//----------------------------------------------------------------------------------------

const expressionFunction = function (word) {
    console.log("This is a " + word + " expression")
}

expressionFunction(functionWord)

//----------------------------------------------------------------------------------------

//note: when {} are used in the arrow function, the return is no longer implicit and then you must state return 

const arrowFunction = (word) => {
    console.log(`This is an arrow ${word} using template literals for string concatenation`)
}

arrowFunction(functionWord)

//----------------------------------------------------------------------------------------

const arrowFunction2 = word => console.log(`This is an arrow ${word} using template literals for string concatenation and returning only one thing and using only one argument`)

arrowFunction2(functionWord)

// object literals : allows us to give it simply a variable, and it will then create the key: value for you efficiently

const color1 = "blue"
const color2 = "green"
const color3 = "pink"

const allMyColors = {color1, color2, color3 }

console.log(allMyColors)

// object destructuring : allows for retrieving properties in objects or items in arrays efficiently. See examples below

const user = {
    username: "joel123",
    userAge: 25,
    _id: "asdf654asdf"
}

console.log(`Welcome ${user.username}`)

const {_id, username, userAge} = user // this is the instance of object destructuring and alllows to efficiently refer to properties within the object. 

console.log(username, _id)

const names = ["Diogo", "John", "Mike"]

const [n1, n2, n3] = names // this is the instance of array destructuring and allows to efficiently refer to items within the object. Because arrays have order, they will be retrieved in this deconstructor by the order it exists

console.log(n1)

// default parameters : when arguments to a function aren't fully provided, but the function parameters expect all arguments to properly run, default parameters allows it to run by giving default parameter values

function sumNumbers (a,b) {
    return a + b
}
console.log(sumNumbers(7,5)) // this works
console.log(sumNumbers(7)) // this doesn't work, it is NaN, because the function expects 2 arguments

function sumNumbersAgain (a = 0, b = 0){
    return a + b
}

console.log(sumNumbersAgain(7)) // this works because the first argument is given, and the second argument defaults to the value of 0 given in the parameter of the function