// 1) Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:

; 
// ["dog", "cat", "mouse", "jackolope", "platypus"]

/* function collectAnimals("code goes here") {  
    "code goes here as well"
} */

// 1) ANSWER: 

function collectAnimals(...animals) {
    return animals
}
console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"))

// 2) Write a function that returns a food object with the array names as properties using Object Literals:

function combineFruit(fruits, sweets, vegetables){
    

   let food = {
        fruits: fruits,
        sweets: sweets,
        vegetables: vegetables
    }
    
    return food

}

console.log(combineFruit(["apple", "pear"],["cake", "pie"],["carrot"]), `\n`)


// 3) Use destructuring to use the property names as variables. Desructure the object in the parameter:

const vacation = {  
    location: "Burly Idaho",
    duration: "2 weeks"
};
  
function parseSentence({location, duration}){
return `We're going to have a good time in ${location} for ${duration}`
}

console.log(parseSentence(vacation), `\n`)

// 4) Use destructuring to make this code ES6:

/* function returnFirst(items){
    const firstItem = items[0]; // change this line to be es6
    return firstItem
} */

function returnFirst(items){
    let [first] = items 
    return first
}


const boards = ["surfboard", "skimboard", "skateboard"]

console.log(returnFirst(boards), `\n`)

// 5) Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:

const favoriteActivities = ["coding", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    let [firstFav, secondFav, thirdFav] = favoriteActivities
    return `My top three favorite activities are, ${firstFav}, ${secondFav}, and  ${thirdFav}`
}

console.log(returnFavorites(favoriteActivities), `\n`)

// 6) Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays are passed in. You may write it assuming you will always recieve three arrays if you would like to.

function combineAnimals(...animals) {  
    let [first, second, third] = animals
    return [...first, ...second, ...third]
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals), `\n`) 

// 7) Try to make the following function more ES6xy:

    /* function product(a, b, c, d, e) {  
        var numbers = [a,b,c,d,e];
    
        return numbers.reduce(function(acc, number) {
        return acc * number;
        }, 1)
    } */

function product(...nums) {  
     
    return nums.reduce(function(acc, number) {
      return acc * number;
    }, 1)
  }

console.log(product(1, 2, 3, 4, 5, 6, 7, 8, 9, 10), `\n`)

// 8) Make the following function more ES6xy. Use at least both the rest and spread operators:
    /* function unshift(array, a, b, c, d, e) {  
        return [a, b, c, d, e].concat(array);
    } */

function unshift(array, ...otherThings) {  
    return [...array, ...otherThings]
  }

console.log(unshift(["bob", "marley", "dreads"], "house", "garage", "floor", "ceiling", "window"))

// 9) Write some destructuring code to help this function out. Use object literals to simplify it:

function populatePeople(names){
    return names.map(function(name){
        name = name.split(" ");
        let [firstName, lastName] = name
        return {
            firstName: firstName,
            lastName: lastName
        }
    })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))



