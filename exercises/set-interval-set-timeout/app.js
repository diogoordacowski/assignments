const timer = document.getElementById("timer")
const startBtn = document.getElementById("start")
const stopBtn = document.getElementById("stop")
const resetBtn = document.getElementById("reset")

let count = 0
timer.textContent = count

let startId

function incrementTime () {
    count++
    timer.textContent = count
}

startBtn.addEventListener("click", function(e){
    startId = setInterval(incrementTime, 1000)    
})

stopBtn.addEventListener("click", function(e){
    clearInterval(startId)
})

resetBtn.addEventListener("click", function(e){
    count = 0
    timer.textContent = count
})