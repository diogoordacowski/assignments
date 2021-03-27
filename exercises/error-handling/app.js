const two = 4

// try something to determine if there is an error
try {
    if (two === 2) {
        console.log("this is true")
    } else {
        throw new Error ( "this is false") // This stops everything because an error has been thrown. So a new Error was created to signal many valuable properties in js that allow us to better handle errors. The throw throws this occurrence to the catch below where the error is dealt with in a function. 
    }
    
}

catch(err) {
    console.log(err)
}

// whenever we need some code to run no matter what EVEN if error has been thrown or not
finally { 
    console.log("I'm running no matter what")
}