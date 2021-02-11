

//getElementByID - returns a single object. If nothing has the specified ID, then it returns NULL

var result7 = document.getElementById("specialparagraph")
console.log(result7)
result7.textContent = "I overrode the original HTML content with javascript"

//getElementsByClassName & getElementsByTag - most commonly used. Brings back an array-like object that can be treated as an array where you may specify the return value with [0]. If nothing has the specified class name or tag name, it returns an EMPTY ARRAY

var thing = document.getElementsByClassName("things")
console.log(thing)

for (var i = 0; i < thing.length; i++) {
    console.log(thing[i].innerHTML)
    thing[i].textContent = "Overriding text " + i
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
    result6[i].textContent = "Classified"
}



