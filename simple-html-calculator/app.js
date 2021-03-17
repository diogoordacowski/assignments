const calcForm = document.calculator

let noOperation = true
let operationType

const inputDisplays = document.querySelectorAll(".calc-display")
const inputDisplay1 = calcForm.display1
const inputDisplay2 = calcForm.display2

const clearButton = document.getElementById("clear")
const operationButtons = document.getElementById("operation-buttons")
const operations = document.querySelectorAll(".operations")
const equals = document.getElementById("equal")
const mainDisplay = document.getElementById("mainDisplay")

function solveProblem(num1, num2){
    console.log(operationType)
    if (operationType === "multiply") {
        return num1 * num2
    } else if (operationType === "sum") {
        return num1 + num2
    } else if (operationType === "subtract") {
        return num1 - num2
    } else if (operationType === "divide") {
        return num1 / num2
    } else {
        return "failed"
    }
}

calcForm.addEventListener("submit", function(e) {
    e.preventDefault()

    if (typeof(operationType) === "undefined") {
        console.log("it is undefined") 
        // in display write no operation was selected
        mainDisplay.textContent = "Please Select An Operation"
        

    } else if (typeof(operationType) != "undefined") {
      
        mainDisplay.textContent = solveProblem(Number(inputDisplay1.value),Number(inputDisplay2.value))

        unpressOperations() 
        noOperation = true 
    
    }

 
})


inputDisplay1.addEventListener("keypress", eraseZero)
inputDisplay2.addEventListener("keypress", eraseZero)


function eraseZero(e){
    if (e.target.value === "0") {
        e.target.value =""
    } 
}

clearButton.addEventListener("click", function(e) {
    
    for (let i = 0; i < inputDisplays.length; i++) {
        inputDisplays[i].value = "0"
    }
    unpressOperations()  
    mainDisplay.textContent = "Enter Numbers"  
})

clearButton.addEventListener("mousedown", function(e){
    e.target.classList.add("runActive")
})

clearButton.addEventListener("mouseup", function(e){
    e.target.classList.remove("runActive")
})
clearButton.addEventListener("mouseout", function(e){
    e.target.classList.remove("runActive")
})

operationButtons.addEventListener("click", function(e){
   

    if (noOperation) {
        e.target.classList.add("operationActive")
        noOperation = false       
        operationType = e.target.id

    } else if (noOperation === false) {
       
       unpressOperations()
       e.target.classList.add("operationActive")
       operationType = e.target.id
       console.log(e.target)
       console.log(operationType)
    }
})

function unpressOperations() {
    for(let t = 0; t < operations.length; t++) {
        operations[t].classList.remove("operationActive")
    }
}



