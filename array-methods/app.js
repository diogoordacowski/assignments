var fruits = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

console.log("fruits: ", fruits);
console.log("vegetables: ", vegetables);

//Remove the last item from the vegetable array.
vegetables.pop();


console.log("fruits: ", fruits);
console.log("vegetables: ", vegetables);

//Remove the first item from the fruit array.
fruits.shift();

console.log("fruits: ", fruits);
console.log("vegetables: ", vegetables);

//Find the index of "orange."
console.log(fruits.indexOf("orange"));

//Add that number to the end of the fruit array.
fruits.push(fruits.indexOf("orange"));

console.log("fruits: ", fruits);
console.log("vegetables: ", vegetables);

//Use the length property to find the length of the vegetable array.
console.log(vegetables.length);

//Add that number to the end of the vegetable array.
vegetables.push(vegetables.length);

console.log("fruits: ", fruits);
console.log("vegetables: ", vegetables);

//Put the two arrays together into one array. Fruit first. Call the new Array "food".
var food = fruits.concat(vegetables);

console.log(food)

//Remove 2 elements from your new array starting at index 4 with one method.
food.splice(4,2)

console.log(food)

//Reverse your array.
food.reverse()

console.log(food)

//Turn the array into a string and return it.
var stringFruits =  food.join()

console.log(stringFruits)
