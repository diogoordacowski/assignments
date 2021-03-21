//1) Make an array of numbers that are doubles of the first array
    const arr1 = [2, 4, 6, 8, 10]

    // ANSWER 1-1 : uses the traditional js syntax

    const arr2 = arr1.map(function(num){
        return num *2
    })
    console.log("With Normal js Syntax" , arr2)

    // ANSWER 1-2 : uses the ES6 arrow function syntax

    const arr3 = arr1.map(num => num * 2)
    console.log("With ES6 Arrow Function" , arr2 )

//2) Take an array of numbers and make them strings

    const arr4 = [2, 5, 100]

    // ANSWER: 

    const arr5 = arr4.map(num => num.toString())
    console.log(arr5)

//3) Capitalize each of an array of names. 
    //process is : for each array string, slice the first letter and uppercase it, then slice the remaining and upper case and concatente them together

    // ANSWER:

    const arr6 = ["john", "JACOB", "jinGleHeimer", "schmidt"]

    const arr7 = arr6.map(function(name){
        return name.slice(0,1).toUpperCase() + name.slice(1).toLowerCase()
    })

    console.log(arr7)

//4) Make an array of strings of the names

    const arr8 = [
        {
            name: "Angelina Jolie",
            age: 80
        },
        {
            name: "Eric Jones",
            age: 2
        },
        {
            name: "Paris Hilton",
            age: 5
        },
        {
            name: "Kayne West",
            age: 16
        },
        {
            name: "Bob Ziroll",
            age: 100
        }
    ]

    const arr9 = arr8.map(function(userObject){
        return userObject.name
    })

    console.log(arr9)

//5) Make an array of strings of the names saying whether or not they can go to The Matrix NOTE: uses #4 array

    const arr10 = arr8.map(function(user){
        if (user.age <= 18 ) {
            // not old enough
            return `${user.name} is under age!!`
        } else {
            // old enough
            return `${user.name} can go to The Matrix`
        }
    })

    console.log(arr10)

//6) Make an array of the names in h1s, and the ages in h2s NOTE: uses #4 array

    const arr11 = arr8.map(function(userObj){
        let h1 = `<h1>${userObj.name}</h1>`
        let h2 = `<h2>${userObj.age}</h2>`

        return h1 + h2
    })

    console.log(arr11)


