//1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

const numbers = [3, 4, 1, 6, 8, 2, 5, 60, -1, -3, 18, 4.9]

const fiveAbove = numbers.filter(num => num >=5)

console.log(fiveAbove)

//2) Given an array of numbers, return a new array that only includes the even numbers. NOTE: use numbers arr from #1 problem

const evenNumbers = numbers.filter(num => num % 2 === 0)

console.log(evenNumbers)

//3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length

const strings = ["dog", "wolf", "by", "family", "eaten", "camping"]

const fiveOrLess = strings.filter(string => string.length <= 5)

console.log(fiveOrLess)

//4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club

const people = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]

const members = people.filter(person => person.member)

console.log(members)

//5) Make a filtered list of all the people who are old enough to see The Matrix (older than 18)

const people2 = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]

const oldEnough = people2.filter(person => person.age > 18)

console.log(oldEnough)