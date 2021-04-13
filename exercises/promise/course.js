//Synchronous Code Examples. These are called "blocking code"

// Example 1
var firstName = "Joe"

// Example 2
function addExcitementToString(str) {
    return str + "!!!!"
}

console.log(addExcitementToString("Hi"))

// Example 3 (recursive function)
function factorial(n) {
    if (n === 1) {
        return 1
    }
    return n * factorial(n - 1)
}

console.log(factorial(5))

//Asynchronous Code Examples. These are called "non-blocking code"

// Example 1
setTimeout(function() {
    console.log("Inside the setTimeout")
}, 3000)

console.log("Outside the setTimeout")

// Example 2
document.getElementById("thing").addEventListener("click", function() {
    // Only runs WHEN the element is clicked
    console.log("Clicked!")
})

// Example 3 (using a promise) - see morebelow under promises section
    /* fetch("https://swapi.dev/api/people/1/", {
        mode:"no-cors"
    })
        .then(response => response.json())
        .then(response => {
            console.log(response) // Runs SECOND
        })
    console.log("Outside the fetch's GET request")  */ // Runs FIRST

// Callbacks - a non ideal way to handle asynchronicity. Example:

function getData1(url, callback) {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const jsonData = xhr.responseText
            const data = JSON.parse(jsonData)
            return callback(data)
        }
    }

    xhr.open("GET", url, true)
    xhr.send()
}

getData1("https://swapi.dev/api/people/1", function(lukeData){
    let lukeWorld = lukeData.homeworld
    console.log(lukeWorld)
    getData1(lukeWorld, function(planetData) {
        lukeWorld = planetData.name
        console.log(lukeWorld)
    })
  
})

// Promises - a better way to handle asynchronicity. Example

fetch("https://api.vschool.io/diogo/todo/")
   .then(res => res.json())
   .then(res => {

        for (let i = 0; i < res.length; i++){
            const h1 = document.createElement("h1")
            h1.textContent = res[i].title
            document.body.appendChild(h1)
        }
   })




