// .forEach() : returns "undefined", its purpose is to use in place of a for-loop

// .forEach: this examples uses it to create a new array
    const arr = [1, 2, 3, 4, 5, 6, 7, 8]

    const newArr = []

    arr.forEach(num => num % 2 === 0 && newArr.push(num))

    console.log ("newArr: ", newArr)

// .forEach: this examples uses it to pluralize the items in the list

    const instruments = ["atabaque", "pandeiro", "agogô", "berimbau"]

    const instrumentsPlural = []

    instruments.forEach(item => instrumentsPlural.push(item + "s"))

    console.log("instrumentsPlural: ", instrumentsPlural)

// .find() : returns the first item that matches

// .find(): example used to find a specific user from an array. 

    const users = [
        {name: "Zumbi", specialPowerCount: 7},
        {name: "Exú", specialPowerCount: 13},
        {name: "Besouro", specialPowerCount: 6},
        {name: "Bimba", specialPowerCount: 5}
    ]

    const besouro = users.find(user => user.name === "Besouro")

    console.log("besouro: ",besouro)

// .findIndex(): returns the index number of the first item it finds

// .findIndex(): example used to locate the index number of a list of users. 

    const userIndex = users.findIndex(function(user){
        if (user.name === "Besouro") {
            return true
        }
    })

    console.log("userIndex: ",userIndex)

// .some(): returns true if AT LEAST ONE item in the array matches criteria

// .some(): example used to identify if any user in the array has a corda

    const participants = [
        {name:"Jamaika", corda: true},
        {name:"Pacoca", corda: true},
        {name:"Jabuti", corda: true},
        {name:"Patrola", corda: true},
        {name:"Muralha", corda: true},
        {name:"Newbie", corda: false},
    ]

    const hasCords = participants.some(jogador => jogador.corda)

    console.log("some have cords: ", hasCords)

// .every(): returns true if EVERY (all) item in the array matches criteria

// .every(): example used to identify if all users in the array has a corda

    const allHaveCords = participants.every(player => player.corda)

    console.log("all have cords: ", allHaveCords)

// .sort(): returns the mutated original array that has been sorted

// .sort(): example used to organize a bunch of random numbers in an array.

    const randNumbers = [34, 6, 22, 1, 6, 44, 3, 64, 234, 5] 

    randNumbers.sort((num1, num2) => num1 - num2)

    console.log("randNumbers: ", randNumbers)

// .reduce(): returns whatever you want it to

// .reduce(): 1 - reduce the array of numbers into a sum of all the numbers

    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const result1 = nums.reduce((final, num) => final += num)

    console.log("result1: ", result1)

// 2 - reduce the users to an array of strings of the user's first and last names

    const userNames = [
        { fName: "joe", lName: "smithy" },
        { fName: "tina", lName: "johnson" },
        { fName: "rick", lName: "sanchez" }
    ]

    const userNamesTogether = userNames.reduce(function(final, user) {
        final.push(user.fName + " " + user.lName)
        return final
    }, [])

    console.log("userNamesTogether: ",userNamesTogether)

// 3 - reduce the array into a count of how many people voted
    const voters = [
        { name: "steve", voted: true },
        { name: "janet", voted: true },
        { name: "rebecca", voted: false },
        { name: "harvey", voted: true },
    ]
    
    const votersCount = voters.reduce(function(final, voter){
        if (voter.voted){
            final += 1
        }
        return final
    }, 0)

    console.log("votersCount: ", votersCount)

// Return an object that has a count of both who voted and who didnt
// { didVote: 3, didntVote: 1 }

    const voterStatuses = voters.reduce(function(final, voter) {
        if (voter.voted) {
            final.didVote ++
        } else {
            final.didntVote ++
        }

        return final
    }, {didVote:0, didntVote:0})

    console.log("voterStatuses: ", voterStatuses)
