// FOR LOOP EXAMPLE 1

for (var i = 0; i < 5; i++) {
    console.log("I'm getting good at for loops")
}


// FOR LOOP EXAMPLE 2
var favFoods = ['pizza', 'pasta','banana']

console.log (favFoods[0])
console.log (favFoods[1])
console.log (favFoods[2])

for (var i = 0; i < favFoods.length; i++) {
    console.log(favFoods[i] + " NOTE: handled with for loop")
}

// FOR LOOP EXAMPLE 3 | this example uses the operator % which is called a 'remainder' as in 5 / 2 = 2 with 1 remaining so 5 % 2 = 1. 1 is the remainder and this can be used to evaluate for eveness as in the statement below

var numbers = [1,2,3,4,5,6,7,8,9,10]

for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log("The number " + numbers[i] + " is even")
    } 
}

// WHILE LOOP EXAMPLE 1

var cars = ['mustang', 'viper', 'bmw', 'alfa-romeo', 'passat']
var carsCount = 0

while (carsCount < cars.length ) {
    console.log(cars[carsCount])
    carsCount++
}