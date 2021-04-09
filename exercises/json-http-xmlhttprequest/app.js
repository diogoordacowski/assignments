//how to make http requests?

// XMLHttpRequest

// xhr.onreadystatechange - is a property of the XMLHttpRequest object that allows a function to be called with each state update from the server. Note all lowercase associated with this syntax
// xhr.readyState - these are the different states that are cycled through during a server request
// xhr.status - this is the end server status that tells us if we were successful in obtaining or doing what we wanted 
// xhr.responseText - this is the information that is retrieved after the server finishes

// xhr.open() - this is how we prepare an http request. It has 3 parameters:
//          *METHOD: "GET" , "POST", etc
//          *URL: the end point where we are sending this request to, example: "https://swapi.co/api/people"
//          *ASYNC: 
// xhr.send() - this formally sends out the request

// xhr.readyState  
    // 1 - request has been sent
    // 2 
    // 3
    // 4 - everything is finished and the server is done with the request, it is time to handle your data
    
// xhr.status
    // 200
    // 404 - not found
    // 201
    // 500

// --------------------------------------------------------------------------------------------------

const xhr = new XMLHttpRequest() // this is instantiating an object that is capable of handling http requests. It comes with many properties

xhr.open("GET", "https://swapi.co/api/people/", true)
xhr.send()

xhr.onreadystatechange = function() {
    //this is saying, when the server state changes, run this function
    if (xhr.readyState === 4 && xhr.status === 200) {
        //this is saying, when the server state has reached 4 AND the server status is 200, then do something this function tells you to do
        const JSONdata = xhr.responseText // this is the JSON giant string that is stored in the xhr object after the server finishes
        const data = JSON.parse(JSONdata) // this is converting the above giant JSON string into a formal object that is consumable by js for handling
        console.log(data.results)
        showAllNames(data.results)
    }
}

function showAllNames(arr) {
    for (let i = 0; i < arr.length; i++) {
        const h1 = document.createElement("h1")
        h1.textContent = arr[i].name
        document.body.appendChild(h1)
    }
}