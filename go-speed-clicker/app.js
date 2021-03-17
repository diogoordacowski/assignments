const score = document.getElementById("score")
const square = document.getElementById("square")
const timer = document.getElementById("timer")
let count = 0
let storedCount = localStorage.getItem("tracker")
let timeLeft = 15
let timerId = setInterval(countdown, 1000)

score.textContent = storedCount

console.log(timer)

square.addEventListener("click", function(e) {
    if (timeLeft != -1) {
        count = count + 1
        score.textContent = count
        localStorage.setItem("tracker", count)
    }
    
})

function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId)
    } else {
        timer.textContent = timeLeft 
        timeLeft--
    }
}



