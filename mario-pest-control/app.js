const goomba = document.getElementById("goomba")
const bobomb = document.getElementById("bobomb")
const cheepcheep = document.getElementById("cheepcheep")
const ulItems = document.getElementById("ulItems")
const result = document.getElementById("result")

let goombaCount = goomba.value
let bobombCount = bobomb.value
let cheepcheepCount = cheepcheep.value

let goombaCost
let bobombCost
let cheepcheepCost

let total

function calculateCoins(cost, count) {
    return Number(cost) * Number(count)
}

ulItems.addEventListener("input", function(e){
    console.log(e.target)

    if (e.target.id === "goomba") {
        goombaCost = calculateCoins(5, e.target.value)

    } else if (e.target.id === "bobomb") {
        bobombCost = calculateCoins(7, e.target.value)
        
    } else if (e.target.id === "cheepcheep") {
        cheepcheepCost = calculateCoins(11, e.target.value)
    
    } 
    else console.log(`it's me, Mario`)
      
    total = goombaCost + bobombCost + cheepcheepCost

    if (isNaN(total)) {
        console.log(`total is currently ${total}`)
    } else result.textContent = total
    

})


