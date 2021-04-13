//promises

// resolve - then :
    //  whenever a function returns a promise, it is a "thenable", meaning, the .then is going to handle whatever the promise was meant to do..then will handle if things did go well as indicated by the resolve. 

// reject - catch : the .catch will handle if things did not go well as indicated by the reject.  

function flipCoin() {
    return new Promise((resolve, reject) => {
        const randNum = Math.floor(Math.random() * 2)

        if(randNum === 0) {
            resolve(`HEADS\n`)
        } else if (randNum === 1) {
            reject(`TAILS\n`)
        }

    })
    
}

flipCoin()
    .then(response => console.log(response))
    .catch(error => console.log(error))

/*
order of operation:

1) flipCoin() is called. 
2) Immediately, it returns the new promise object in a pending state. " I promise that I am going to do this work". 2 parameters are given - resolve and reject (see definitions above)
3) randNum is assigned, suppose it is "HEADS"
4) conditional evaluates to true in the first if
5) resolve is called and given the string value "HEADS" to return. This ends the flipCoing() function
6) .then(response) is then called and it instructs the console to love whatever is assigned to the response

*/

// Asynchronous Demonstration

function getData() {
    return new Promise(resolve => {
        setTimeout(resolve, 3000)
    })
}

getData()
    .then(res => console.log(`1) RESOLVED: This console.log is called *first* through the getData() function, but notice that it appears secondly in the console log\n`))
    .catch(err => console.log(`1) REJECTED: This console.log is called *first* through the getData() function, but notice that it appears secondly in the console log\n`))

console.log(`2) This console.log is called *after* the getData(), but notice it console.logs first. Sequentially, this function runs after getData(), but because the promise is still doing its part in waiting 3 seconds, then resolving, this console.log will appear first.\n `)