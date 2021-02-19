const h1 = document.getElementById("clickable")
h1.addEventListener("click", function(e){       // <- this is an example of an ANONYMOUS FUNCTION. It has no name. It cannot be called/requested in anyway other than the click
    h1.textContent = "clicked"    
})

// the above can be written as an ARROW FUNCTION as such:

const h1 = document.getElementById("clickable")

h1.addEventListener("click", e => {          // if you have only 1 argument (like the e in this example, you can remove the parentheses)
    h1.textContent = "clicked"
})


// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------//

const birds = ["robin", "pelican", "goose"]

const bigBirds = birds.map(function(bird){
    return "big " + bird
})

// the above can be written as an ARROW FUNCTION as such:

const birds = ["robin", "pelican", "goose"]

const bigBirds = birds.map( bird => "big" + bird ) // this is called an IMPLICIT RETURN (we don't need to use the keyword 'return', it is implied)

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------//

function addTwo(first, second){
    return first + second
}

// the above can be written as an ARROW FUNCTION as such:

const addTwo = (first, second) => first + second