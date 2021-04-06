//The folowing will be used for all functions in questions 1 through 7 below. You will have to uncomment certain functions to be able to run the examples with each question. 

const person = { name: "Andrea", age: 27 }
person.ageRange = getAgeRange(person)
console.log("The " + person.ageRange + ", " + person.name + ", is " + person.age + " years old.")

// 1) Why is ageRange not defined? ANSWER: because it is scoped to the nearest curly brace
//uncomment the function below to see ageRange not defined error
    /* function getAgeRange(person){
        if(person.age < 18){
            let ageRange = "Child"
        } else if(person.age >= 18 && person.age < 80){
            let ageRange = "Adult"
        } else {
            let ageRange = "Elderly Person"
        }

        return ageRange
    } */

// 2) How can we fix this function with var? 
//uncomment the function below to see ageRange not defined error
    /* function getAgeRange(person){
        var ageRange

        if(person.age < 18){
            ageRange = "Child"
        } else if(person.age >= 18 && person.age < 80){
            ageRange = "Adult"
        } else {
            ageRange = "Elderly Person"
        }

        return ageRange
    } */

// 3) How can we fix this function avoiding the use of var?
//uncomment the function below to see ageRange not defined error
    /* function getAgeRange(person){
        let ageRange

        if(person.age < 18){
            ageRange = "Child"
        } else if(person.age >= 18 && person.age < 80){
            ageRange = "Adult"
        } else {
            ageRange = "Elderly Person"
        }

        return ageRange
    } */

// 4) Why would you use const vs let? ANSWER: because you cannot declare an undefined const and you must assign it a value. Notice how using const below will give you an error. In this function, we need to declare a variable that we don't know the value for it yet. It will hold some value that will be assigned after the if (conditionals).
//uncomment the function below to see ageRange not defined error
    /* function getAgeRange(person){
        const ageRange

        if(person.age < 18){
            ageRange = "Child"
        } else if(person.age >= 18 && person.age < 80){
            ageRange = "Adult"
        } else {
            ageRange = "Elderly Person"
        }

        return ageRange
    } */ 


// 5) What would the function potentially look like if we destructured the person parameter?
//uncomment the function below to see ageRange not defined error
    function getAgeRange({age}){
        let ageRange

        if(age < 18){
            ageRange = "Child"
        } else if(age >= 18 && age < 80){
            ageRange = "Adult"
        } else {
            ageRange = "Elderly Person"
        }

        return ageRange
    }

    
// 6) Why can we add .ageRange to person when we used const to define person? ANSWER: because person is an object, which is mutable. This means it can be modified. 


// 7) Change the console.log concatented string into a template literal
console.log (`7)ANSWER: The ${person.ageRange}, ${person.name}, is ${person.age} years old.`)

// The folowing will be used for the last question below.

const springMonths = ["March", "April", "May"]
const fallMonths = ["September", "October", "November"]
// 8) Replace this line with one that uses a spread oporator to do the same thing as concat
const fringeMonths = springMonths.concat(fallMonths)

console.log(springMonths, fallMonths, fringeMonths)
const fringeMonths2 = [...springMonths, ...fallMonths]

console.log("Answer 8)", springMonths, fallMonths, fringeMonths2)
