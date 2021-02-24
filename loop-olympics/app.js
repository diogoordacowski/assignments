//PRELIMINARIES

//Write a for loop that prints to the console the numbers 0 through 9.

for (var i = 0; i < 10; i++) {
    console.log(i)
}

//Write a for loop that prints to the console 9 through 0.

for (var i = 9; i >= 0; i--) {
    console.log(i)
}

//Write a for loop that prints these fruits to the console.

var fruit = ["banana", "orange", "apple", "kiwi"]

for (var i = 0; i < fruit.length; i++){
    console.log(fruit[i])
}

//BRONZE MEDAL

//Write a for loop that will push the numbers 0 through 9 to an array.

var arrayOfNumbers = []

for (var i = 0; i < 10; i++){
    arrayOfNumbers.push(i)
}

console.log(arrayOfNumbers)

//Write a for loop that prints to the console only even numbers 0 through 100.

for (var i = 0; i <= 100; i++){
    if (i % 2 === 0) {
        console.log(i)
    } 
}

// rite a for loop that will push every other fruit to an array.

var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

var fruitArray = []
var count = true

for (var i = 0; i < fruit.length; i = i + 2) {
           fruitArray.push(fruit[i])
}

console.log(fruitArray)

// SILVER MEDAL

//Write a loop that will print out all the names of the people of the people array
var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

  for (var i = 0; i < peopleArray.length; i++) {
      console.log(peopleArray[i].name)
  }

    //Write a loop that pushes the names into a names array, and the occupations into an occupations array.

    const names = []
    const occupations = []

    for (var i = 0; i < peopleArray.length; i++) {
        names.push(peopleArray[i].name)
        occupations.push(peopleArray[i].occupation)
    }

    console.log(names)
    console.log(occupations)

    //Write a loop that pushes every other name to an array starting with the first person, in this case "Harrison Ford", and every other occupation to another array starting with, in this case, "Singer"

    const otherNames = []
    const otherOccupations = []

    for (var i = 0; i < peopleArray.length; i = i + 2) {
        otherNames.push(peopleArray[i].name)
    }

    for (var i = 1; i < peopleArray.length; i = i + 2) {
        otherOccupations.push(peopleArray[i].occupation)
    }

    console.log(otherNames)
    console.log(otherOccupations)

// GOLD MEDAL

/* create an array that looks like this
const matrixArray = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

*/ 

const matrixArray = []

for (var i = 0; i < 3; i++){
    matrixArray[i] = []
    for (var s = 0; s < 3; s++) {
        matrixArray[i][s] = 0
    }
}

console.log(matrixArray)

// 2.Create an array that mimics a grid like the following using nested for loops:

/*
[[0, 0, 0], 
[1, 1, 1], 
[2, 2, 2]]

*/

const matrixArray2 = []

for (var i = 0; i < 3; i++) {
    matrixArray2[i] = [] 
    for (var j = 0; j < 3; j++) {
        matrixArray2[i][j] = i
    }
}

console.log(matrixArray2)

// 3.Create an array that mimics a grid like the following using nested for loops:

/*
[[0, 1, 2], 
[0, 1, 2], 
[0, 1, 2]]

*/

const matrixArray3 = []

for (var i = 0; i < 3; i++) {
    matrixArray3[i] = [] 
    for (var f = 0; f < 3; f++) {
        matrixArray3[i][f] = f
    }
}

console.log(matrixArray3)

//Given a grid like the previous ones, write a nested for loop that would change every number to an x.

/*
var grid = [["x", ...], 
            ["x", ...], 
            ["x",...], ...] 

*/

const matrixArray4 = []

for (var i = 0; i < 3; i ++) {
    matrixArray4[i] = []

    for (var t = 0; t < 3; t++) {
        matrixArray4[i][t] = "x"
    }
}

console.log(matrixArray4)