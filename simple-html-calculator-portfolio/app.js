const calcForm = document.calculator

let noOperation = true
let operationType = ""

let input1 = ""
let input2 = ""

calcForm.addEventListener("submit", function(e) {
    e.preventDefault()
    
})

const inputDisplay = document.getElementById("calculator-display")
const numberButtons = document.querySelector(".calculator-buttons")
const clearButton = document.getElementById("clear")
const operationButtons = document.querySelectorAll(".operations")


console.log(numberButtons)
numberButtons.addEventListener("click", function(e){
    console.log(e.target.value, e.target.className)
    
    if (e.target.className === "numbers" && noOperation === true) {
        if (inputDisplay.value === "0" ) {
                inputDisplay.value = e.target.value
            } else {
                inputDisplay.value =  inputDisplay.value + e.target.value
            }
    
    } else if (e.target.className === "operations") {
        
        e.target.classList.add("operationActive")
        noOperation = false

        operationType = e.target.value
        input1 = inputDisplay.value
        console.log(input1)

    } else if (e.target.id === "clear") {
        console.log("we are clearing")
        inputDisplay.value = "0"
        noOperation = true
        operationType = 0

        for (let b = 0; b < operationButtons.length; b++) {
            operationButtons[b].classList.remove("operationActive")
        }

    } else if (e.target.id === "equal") {
        console.log("we are calculating")
    }
})





