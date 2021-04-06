//https://coursework.vschool.io/es6-practice-let-const-fat-arrow-functions-default-arguments-template-literals/

// 1) let and const: Replace all the vars with let and const. Alter the code however necessary to make sure this continues to work (so the pet's name isn't "John", but instead "spot" is returned). You only need to delete var and insert let and const. John is the pet owner, and his name should be stored differently than the other names.
    /*
    var name = "John"
    var age = 101

    function runForLoop(pets) {
        var petObjects = []
        for (var i = 0; i < pets.length; i++) {
            var pet = { type: pets[i] }
            var name;
            if (pets[i] === "cat") {
                name = "fluffy"
            } else {
                name = "spot"
            }
            console.log("pet name: ", name)
            pet.name = name
            petObjects.push(pet)
        }
        console.log("man name: ", name)
        return petObjects
    }

    runForLoop(["cat", "dog"]) */

// 1) ANSWER:

const name = "John"
const age = 101

function runForLoop(pets) {
    let petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])

// 2) Arrow functions: Make the following into an arrow function

    /* const carrots = ["bright orange", "ripe", "rotten"]

    function mapVegetables(arr) {
        return arr.map(function(carrot) {
            return { type: "carrot", name: carrot }
        })
    } 
    
    console.log (mapVegetables(carrots))
    */
// 2) ANSWER: notice that we had to surround the object declaration in parentheses. This is because if an arrow function sees the { right after the =>, it will think we're trying to start a function, and not an object. 

const carrots = ["bright orange", "ripe", "rotten"]

const carrotProfiles = carrots.map(carrot => ({type:"carrot", name:carrot}))

console.log(carrotProfiles)

// 3) Re-write this .filter() using an arrow function:

     const people = [
        {
            name: "Princess Peach",
            friendly: false
        },
        {
            name: "Luigi",
            friendly: true
        },
        {
            name: "Mario",
            friendly: true
        },
        {
            name: "Bowser",
            friendly: false
        }
    ]
     
    /* function filterForFriendly(arr) {
        return arr.filter(function(person) {
            return person.friendly
        })
    } 
    console.log(filterForFriendly(people))  */
   

// 3) ANSWER: 
const friendlyPeople = people.filter(person => person.friendly)

console.log(friendlyPeople)

// 4) Re-write the following functions to be arrow functions:

    /* function doMathSum(a, b) {
        return a + b
    }

    var produceProduct = function(a, b) {
        return a * b
    } */

// 4) ANSWER:

let sum = (a,b) => a + b

let product = (a,b) => a * b

console.log (sum(1,2), ",", product(3,3))

// 5) Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following:

    //Hi Kat Stark, how does it feel to be 40?

    /* firstName should default to "Jane"
    lastName should default to "Doe"
    age should default to 100 */


// 5) ANSWER
function printString(first = "Jane", last = "Doe", age= 100) {
    return `Hi ${first} ${last}, how does it feel to be ${age}?`
}

console.log("5) ANSWER: with normal Function - ",printString())

let greeting = (firstName = "Jane", lastName = "Doe", age = 100) =>  `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`

console.log("5) ANSWER: with Arrow Function - ", greeting("Bob", "Michael", 33))

// 6) Use the shorthand syntax to make the following filter take up one line. Copy and paste the array to test it.

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
/*  function filterForDogs(arr) {
     return arr.filter(animal => {
         if (animal.type === "dog") {
             return true
         } else {
             return false
         }
     })
 } 
  console.log(filterForDogs(animals)) */

// 6) ANSWER:

 const dogs = animals.filter(({type}) => type === "dog")

 console.log(dogs) 

// 7) Template Literals: Using template literals, write a function that takes location and name parameters and outputs a message formatted like this:

    /* Hi Janice!

    Welcome to Hawaii. 

    I hope you enjoy your stay. Please ask the president of Hawaii if you need anything. */

// 7) ANSWER: 

const message = (lugar, nome) => `Hi ${nome}!\nWelcome to ${lugar}.\nI hope you enjoy your stay. Please ask the president of ${lugar} if you need anything.`

console.log(message("Salvador", "Carlinhos Brown"))