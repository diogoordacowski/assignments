// GET ELEMENT BY ID | getElementByID - returns a single object. If nothing has the specified ID, then it returns NULL

var result7 = document.getElementById("specialparagraph")
console.log(result7)
result7.textContent = "I overrode the original html content with javascript"

// GET ELEMENTS BY CLASS NAME | getElementsByClassName & getElementsByTag - most commonly used. Brings back an array-like object that can be treated as an array where you may specify the return value with something like [0] or [1] etc. If nothing has the specified class name or tag name, it returns an EMPTY ARRAY

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

// QUERY SELECTOR | querySelector - select a SINGLE element from the page and returns it. Returns the first element it finds that matches the query

var result1 = document.querySelector("#favorite-things") 
console.log(result1)

var result2 = document.querySelector("#favorite-things > li") 
console.log(result2)

// QUERY SELECTORALL | querySelectorALL - select all elements from the page that match the query

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

/* EXERCISE
1. Select the h3 element
 * 2. Save the h3 element's text to a variable
 * 3. Change the paragraph element's text to be the same as the text inside the h3
*/

var h3 = document.getElementById("h3text").textContent
console.log(h3)

document.getElementById("placeholder").textContent = h3

/* EXERCISE
1. Select the h4 element
 * 2. Save the h4 element's text to a variable
 * 3. Change the paragraph element's text to be the same as the text inside the h4
*/

var h4 = document.querySelector("#h4text")
console.log(h4)

h4.style.color = "red"

/* EXERCISE
1. Select the whole page, or in other words, the <body> element
 * 2. Change the whole page's background color to something interesting
*/
document.body.style.backgroundColor = "burlywood"

// CLASS NAME | modifying CSS classes within elements with className. Notice how the console.log for this returns 3 total classes when the html only has 2. It records 3 classes as PLAIN STRING, making this not ideal for multiple manipulations as you'd have to parse out the string. 

var h5 = document.querySelector("#header").className += " new-class"
console.log(h5) 

// CLASS LIST | modifying CSS classes within elements with classList

document.querySelector("#header2").classList.add("burger") // ADD: adds a new class called 'burger' with javascript
console.log(document.querySelector("#header2").className + " // NOTE: burger is added") 
document.querySelector("#header2").classList.remove("title") // REMOVE:  removes an existing class called 'title' which came from the original html 
console.log(document.querySelector("#header2").className + " // NOTE: title is removed") 
document.querySelector("#header2").classList.toggle("burger") // TOGGLE:  if class 'burger' exists then remove it, but if it doesn't exist, then add it. HERE IT REMOVES 'BURGER'
console.log(document.querySelector("#header2").className + " // NOTE: burger is removed") 
document.querySelector("#header2").classList.toggle("burger") // TOGGLE: (see above definition) HERE IT ADDS 'BURGER'
console.log(document.querySelector("#header2").className + " // NOTE: burger is added") 

// INPUT VALUE | modifying HTML value from a form input

var inputBox = document.getElementById("text-input")
console.log(inputBox.value)

inputBox.value = "I changed this prefilled input tag value with javascript"

// CREATE ELEMENT | creating new HTML elements and giving them values with createElement() method

var myList = document.getElementById("my-list");
var newLi = document.createElement("li");
var newLi2 = document.createElement("li");

newLi.textContent = "NOT IN ORIGINAL HTML FILE: This li was added with javascript 'append()' js method and 'textContent' js property."
newLi2.textContent = "NOT IN ORIGINAL HTML FILE: This li was added with javascript 'prepend()' js method and 'textContent' js property."

myList.append(newLi);
myList.prepend(newLi2);

//--------------------------------

var jsParagraph = document.getElementById("js-paragraph");
var newParagraph = document.createElement("p");

newParagraph.textContent = "The js property called '.textContent' was used to create this brand new paragraph's content. The <p> element itself was added with the createElement() method in javascript and therefore, this <p> element does not exist in the original html. The colors and fonts in this text have also been styled with javascript via the '.style' property"

newParagraph.style.textAlign = "center"
newParagraph.style.fontSize = "20px"
newParagraph.style.color = "green"

jsParagraph.append(newParagraph);
console.log(newParagraph.textContent);

var mySecondList = document.getElementById("my-list2");
mySecondList.innerHTML += "<li> This li was added with javascript through the '.innerHTML' property.</li>" + "<li>'.innerHTML' is a stringifyied representation of the html elements </li>" + "<li>Just keep adding li as a giant string concatenation </li>" + "<li>Don't believe me? Look at the js file! </li>" + "<li id='inner-html-li'> You can even give innerHTML elements their own id attributes, like this one to change this singular li to blue</li>";

document.getElementById("inner-html-li").style.color = "blue";

console.log(mySecondList.innerHTML);

// USING FOR LOOPS WITH CREATE ELEMENT & INNER HTML | shows how a set of data like the array below can be cycled thorugh a for loop in order to write onto the DOM

var powerRangers = [
    "Jason Lee Scott", 
    "Kimberly Hart", 
    "Zack Taylor", 
    "Trini Kwan", 
    "Billy Cranston"
]

// CREATE ELEMENT
var rangersList = document.getElementById("rangers")
    
for (var i = 0; i < powerRangers.length; i++) {
   
    var newName = document.createElement("li")
    newName.textContent = powerRangers[i]
    rangersList.append(newName)
}

// INNER HTML

var rangersList2 = document.getElementById("rangers2")
    
for (var i = 0; i < powerRangers.length; i++) {
   rangersList2.innerHTML += "<li>" + powerRangers[i] + "</li>"
}

// CREATE ELEMENT AND ACCESSING OBJECTS & THEIR RESPECTIVE PROPERTIES WITHIN THE ARRAY

var powerRangersObjects = [
    {name: "Jason Lee Scott", color: "Red"}, 
    {name: "Kimberly Hart", color: "Pink"}, 
    {name: "Zack Taylor", color: "Black"}, 
    {name: "Trini Kwan", color: "Yellow"}, 
    {name: "Billy Cranston", color: "Blue"},
    {name: "Tommy Oliver", color: "Green"}
]

var rangersList3 = document.getElementById("rangers3")
    
for (var i = 0; i < powerRangersObjects.length; i++) {
   
    var createName = document.createElement("li")
    createName.textContent = powerRangersObjects[i].color + ":  " +  powerRangersObjects[i].name
    rangersList3.append(createName)
}














