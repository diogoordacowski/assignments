// 1) This will be viewed in the browser. Convert the function below to an arrow function
    
    //all of this below needs to be uncommented and viewed in a browser, NOT in Node. It wil break in node if you try it
        /* const button = document.getElementById('button')
        const output = document.getElementById('output')
        const output2 = document.getElementById("output2")
        const input = document.getElementById('input')
        // change this function to be an arrow function
        button.addEventListener('click', function(){
            output.innerText = "NORMAL FUNCTION: " + input.value
        })
        // 1) Answer: 
        button.addEventListener('click', () => output2.innerText = `ARROW FUNCTION: ${input.value}`
        ) */

//-------------------------------------------------------------------------------------------
// 2) Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:

    /* function collectAnimals("your code here") {  
        "more code here"
    } */

// 2) Answer: this is because the ...rest operator prepares the ingestion of the argument into the function as an Array, therefore, all we need to do is return it. 
function collectAnimals(...animalsArr) {  
    return animalsArr
}

animals = collectAnimals("dog", "cat", "mouse", "jackolope", "platypus", "horse", "cow", "pig", "rat"); 

console.log(animals)

//-------------------------------------------------------------------------------------------
// 3) Use destructuring to use the property names as variables:
const vacation = {  
    location: "Burly Idaho",
    duration: "2 weeks"
};
    /* 
    function parseSentence("parameter goes here"){
        return `We're going to have a good time in ${location} for ${duration}`
    } */

  console.log(parseSentence(vacation))

// 3) Answer: we know that the function will take in an OBJECT, therefore, the parameter will be set up with curly braces were we can destructure the object's properties by simply listing them separated by comma. 
  function parseSentence({location, duration}){
    return `We're going to have a good time in ${location} for ${duration}`
  }
  
//-------------------------------------------------------------------------------------------
// 4)  Make the following function more ES6xy. Use at least both the rest and spread operators:
  // this function should add as many items to the front of the returned array as the caller of the function wants
  
  /* function unshift(array, a, b, c, d, e) {  
    return [a, b, c, d, e].concat(...array);
  } */

// 4) ANSWER: ...letters is an argument that uses the ...rest operator that converts its values into an array then passing it into the function. Since the function now takes in 2 arrays, to make all of it into a single array would require using the ...spread operator to spread all of the array elements into a single array. 

  function unshift(array, ...letters) {
      return [...letters, ...array]
  }

  const colors = ["red", "green", "black"]
  let restAndSpread = unshift(colors, "a", "b", "c", "d")

  console.log(restAndSpread)
  
  //-------------------------------------------------------------------------------------------
  // 5) Make "greeting" default to "hello"

    /*  function greet(name, greeting ){
        return greeting + ", " + name
    }
     */
    
    function greet(name, greeting = "hello") {
        return greeting + ", " + name
    }
    console.log("DEFAULT: (no greeting passed in as argument)", greet('Emily'))
    console.log("OVERIDDEN: (greeting IS passed in as argument)", greet('Emily', "Hi"))