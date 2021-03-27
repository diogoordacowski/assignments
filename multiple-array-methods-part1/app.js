// exercise found here https://coursework.vschool.io/multiple-array-methods-practice-1/

/* write a function that:

Returns a list of everyone older than 18, which is
sorted alphabetically by last name, and where
each name and age is embedded in a string that looks like an HTML <li> element.

*/

var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

function arrayMethodFunction(array) {

array.sort((a,b) => (a.lastName > b.lastName) ? 1 : -1) 

const adults = array.reduce(function(final, person){

    if (person.age >= 18) {
        final.push(`<li>${person.firstName} ${person.lastName} is ${person.age}</li>`)
    }

    return final

}, [])

console.log(adults)

}

// Extra Credit: 

// Create another array of one or more individuals and add it to the original array.

const otherPeople = [
    {
        firstName: "Diogo",
        lastName: "Ordacowski",
        age: 35
    },
    {
        firstName: "Brandon",
        lastName: "Phillips",
        age: 34
    },
    {
        firstName: "Raymond",
        lastName: "Mona",
        age:80
    },
    {
        firstName: "Bob",
        lastName: "Salisbury",
        age: 72
    }
]

const allThePeople = peopleArray.concat(otherPeople)

arrayMethodFunction(allThePeople)

//console.log(allThePeople[0].lastName.slice(-1))

// Create a function that filters out all people who's last names end with "y" or "a" and save those people in another array.
// Remove the second individual from the array.
// Return the array in reverse order.

function noYA(arr) {
    const noYorA = arr.filter(person => person.lastName.slice(-1) === "y" || person.lastName.slice(-1) === "a")
    console.log(`Before (has all individuals): `)
    console.log(noYorA)

    noYorA.splice(1,1)
    console.log(`After (removes 2nd individual): `)
    console.log(noYorA)

    noYorA.reverse()
    console.log(`Reversing order the array is presented in`)
    console.log(noYorA)

}

noYA(allThePeople)