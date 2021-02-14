

//getElementByID - returns a single object. If nothing has the specified ID, then it returns NULL

var result7 = document.getElementById("specialparagraph")
console.log(result7)
result7.textContent = "I overrode the original html content with javascript"

//getElementsByClassName & getElementsByTag - most commonly used. Brings back an array-like object that can be treated as an array where you may specify the return value with something like [0] or [1] etc. If nothing has the specified class name or tag name, it returns an EMPTY ARRAY

var thing = document.getElementsByClassName("things")
console.log(thing)

for (var i = 0; i < thing.length; i++) {
    console.log(thing[i].innerHTML)
    thing[i].textContent = "Overriding text with for loop " + i
}

var things2 = document.getElementsByClassName("things2")
console.log(things2)

for (var i = 0; i < things2.length; i++) {
    things2[i].textContent = "I overrode this h2 with javascript"
}



//querySelector - select a SINGLE element from the page and returns it. Returns the first element it finds that matches the query

var result1 = document.querySelector("#favorite-things") 
console.log(result1)

var result2 = document.querySelector("#favorite-things > li") 
console.log(result2)

//querySelectorALL - select all elements from the page that match the query


var result3 = document.querySelectorAll("#favorite-things") 
console.log(result3)

var result4 = document.querySelectorAll("#favorite-things > li") 
console.log(result4)

var result5 = document.querySelectorAll("#favorite-things > li") 
console.log(Array.from(result5))

var result6 = document.querySelectorAll("#favorite-things > li")

for (var i = 0; i < result6.length; i++) {
    result6[i].textContent = "Original html content is classified"
}

/*
1. Select the h3 element
 * 2. Save the h3 element's text to a variable
 * 3. Change the paragraph element's text to be the same as the text inside the h3
*/

var h3 = document.getElementById("h3text").textContent
console.log(h3)

document.getElementById("placeholder").textContent = h3


/*
1. Select the h4 element
 * 2. Save the h4 element's text to a variable
 * 3. Change the paragraph element's text to be the same as the text inside the h4
*/

var h4 = document.querySelector("#h4text")
console.log(h4)

h4.style.color = "red"

/*
1. Select the whole page, or in other words, the <body> element
 * 2. Change the whole page's background color to something interesting
*/
document.body.style.backgroundColor = "burlywood"

// modifying CSS classes within elements with className. Notice how the console.log for this returns 3 total classes when the html only has 2. It records 3 classes as PLAIN STRING, making this not ideal for multiple manipulations as you'd have to parse out the string. 

var h5 = document.querySelector("#header").className += " new-class"
console.log(h5) 

// modifying CSS classes within elements with classList

document.querySelector("#header2").classList.add("burger") // ADD: adds a new class called 'burger' with javascript
console.log(document.querySelector("#header2").className + " // NOTE: burger is added") 
document.querySelector("#header2").classList.remove("title") // REMOVE:  removes an existing class called 'title' which came from the original html 
console.log(document.querySelector("#header2").className + " // NOTE: title is removed") 
document.querySelector("#header2").classList.toggle("burger") // TOGGLE:  if class 'burger' exists then remove it, but if it doesn't exist, then add it. HERE IT REMOVES 'BURGER'
console.log(document.querySelector("#header2").className + " // NOTE: burger is removed") 
document.querySelector("#header2").classList.toggle("burger") // TOGGLE: (see above definition) HERE IT ADDS 'BURGER'
console.log(document.querySelector("#header2").className + " // NOTE: burger is added") 

// modifying HTML value from a form input

var inputBox = document.getElementById("text-input")
console.log(inputBox.value)

inputBox.value = "I changed this prefilled input tag value with javascript"

