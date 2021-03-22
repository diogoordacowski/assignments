const numbersArr = [1,2,3]

// 1) Turn an array of numbers into a total of all the numbers

    const sum = numbersArr.reduce(function(final, num) {
        final += num
        return final
    })

    console.log("1) Sum: ", sum)

// 2) Turn an array of numbers into a long string of all those numbers.

    const longstring = numbersArr.reduce(function(final, num) {
        final += num
        return final
    },"")

    console.log("2) longString: ", longstring)

//  - - - - - - -  - - - - - - - - - - - - - -  - - - - - - - - - - -  - - - - - - - - - - - 

    var voters = [
        {name:'Bob' , age: 30, voted: true},
        {name:'Jake' , age: 32, voted: true},
        {name:'Kate' , age: 25, voted: false},
        {name:'Sam' , age: 20, voted: false},
        {name:'Phil' , age: 21, voted: true},
        {name:'Ed' , age:55, voted:true},
        {name:'Tami' , age: 54, voted:true},
        {name: 'Mary', age: 31, voted: false},
        {name: 'Becky', age: 43, voted: false},
        {name: 'Joey', age: 41, voted: true},
        {name: 'Jeff', age: 30, voted: true},
        {name: 'Zack', age: 19, voted: false}
    ]

// 3) Turn an array of voter objects into a count of how many people voted

    const votedCount = voters.reduce(function(final, voter){
        if (voter.voted) {
            final++
        }
        return final
    }, 0)

    console.log("3) votedCount: ", votedCount)

//  - - - - - - -  - - - - - - - - - - - - - -  - - - - - - - - - - -  - - - - - - - - - - - 

    var wishlist = [
        { title: "Tesla Model S", price: 90000 },
        { title: "4 carat diamond ring", price: 45000 },
        { title: "Fancy hacky Sack", price: 5 },
        { title: "Gold fidgit spinner", price: 2000 },
        { title: "A second Tesla Model S", price: 90000 }
    ]

// 4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

    const fullPrice = wishlist.reduce(function(final, item) {
        final += item.price
        return final
    }, 0)

    console.log("4) fullPrice: ", fullPrice)

//  - - - - - - -  - - - - - - - - - - - - - -  - - - - - - - - - - -  - - - - - - - - - - - 
    
    var arrays = [
        ["1", "2", "3"],
        [true],
        [4, 5, 6]
    ]

// 5) Given an array of arrays, flatten them into a single array

    //using a for loop

    const singleArr = arrays.reduce(function(final, array){
        for (let i = 0; i < array.length; i++) {
            final.push(array[i])
        }
        return final
    },[])

    console.log("5) singleArr: ", singleArr)

    //using concat()

    const singleArr2 = arrays.reduce(function(final, arr) {
        final = final.concat(arr)

        return final
    }, [])

    console.log(singleArr2)

//  - - - - - - -  - - - - - - - - - - - - - -  - - - - - - - - - - -  - - - - - - - - - - - 

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]

// 6) Given an array of potential voters, return an object representing the results of the vote

    //sort by age to make it easier to determine the age groups
    voters.sort((a, b) => a.age - b.age)
    console.log(voters)

    //25 & below = young
    // 26 & 35 = mid
    // 36 & above = old

    //determine ifs for each age group

    const voterTurnout = voters.reduce(function(final, voter){
        if (voter.age <= 25) {
            //count young people
            final.youngPeople++
            if (voter.voted) {
                //count young votes
                final.youngVotes++
            }
            
        } else if (voter.age > 25 && voter.age <= 35) {
            //count mid people
            final.midPeople++
            if (voter.voted) {
                //count mid votes
                final.midVotes++
            }
        } else {
            //count olds
            final.oldPeople++
            if (voter.voted) {
                //count old votes
                final.oldVotes++
            }
        }

        return final

    }, {youngVotes:0, youngPeople:0, midVotes:0, midPeople:0, oldVotes:0, oldPeople:0})

    console.log(voterTurnout)

// Extra credit: Using AJAX, do a GET request to your own Github repositories endpoint.Once you get the data, use .reduce() to figure out how many watchers you have across all of your repositories. The URL will be https://api.github.com/users/<YOUR GITHUB USERNAME HERE>/repos.




