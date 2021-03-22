// 1) Sort an array from smallest number to largest:

const arr = [1, 3, 5, 2, 90, 20]

arr.sort((a,b) => a - b)

console.log (arr)

// 2) Sort an array from largest number to smallest.

const arr2 = [1, 3, 5, 2, 90, 20]

arr2.sort((c,d) => d - c)

console.log(arr2)

// 3) Sort an array from shortest string to longest

const strings = ["dog", "wolf", "by", "family", "eaten"]

strings.sort((a, b) => a.length - b.length)

console.log("strings: ", strings)

// 4) Sort an array alphabetically

const strings2 = ["dog", "wolf", "by", "family", "eaten"]

strings2.sort()

console.log("Strings2:  ", strings2)

// 5) Sort the objects in the array by age

const characters = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]

characters.sort((one, two) => one.age - two.age)

console.log(characters)