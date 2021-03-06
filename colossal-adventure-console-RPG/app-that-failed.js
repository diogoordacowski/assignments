// THIS JS FILE WAS A FAILURE, BUT I KEPT IT FOR REFERENCE

// INSTRUCTIONS: https://coursework.vschool.io/colossal-adventure-console-rpg/

var readlineSync = require('readline-sync');

let isAlive = true

// player and enemy damage calculator
const randomDamage = function(max,min){
    return Math.floor((Math.random() * max) + min)
}

// runaway potential 
const runAway = function() {
    return Math.floor(Math.random() * 2)
}

// create the player object
let player = {
    name: readlineSync.question("Let's play Colossal Adventure!\nMay I have your name? "),
    health: 100,
    inventory: [],
    damage: randomDamage(20, 5),
    min: randomDamage(5,1)
}

// create enemy objects
function Enemy (name, health, item, damage) { 
    this.name = name
    this.health = health
    this.item = item
    this.damage = damage
}

let enemy1 = new Enemy ("Zumbi", 50, "corda azul", randomDamage(30,5)) 
let enemy2 = new Enemy ("Besouro", 50, "patuá", randomDamage(15,8))
let enemy3 = new Enemy ("Exú", 50, "dobrão", randomDamage(20,2))

// organize enemies array
const enemies = [enemy1, enemy2, enemy3]

// make walking interesting :)
const walkingTypes = [`strolling`, `trecking along`, `marching onward`, `wandering about`]
const walkingAction = function (arr) {
    const randomWalk = Math.floor(Math.random() * arr.length)
    return arr[randomWalk]
}

console.log(`Hi ${player.name}! `)

// start game
walkMode()

function walkMode() {
    
    while (isAlive) {
        // Choice from player
        const input = readlineSync.keyIn("What would you like to do? [w] Walk, [i] Iventory, [q] Quit ", {limit:["w", "i", "q"]}) 

        if (input === "w") {
            //walk
            console.log(`You are ${walkingAction(walkingTypes)}...`)
            let randomEncounter = Math.floor(Math.random() * 4)
            
                if (randomEncounter === 0) {
                    //you will meet an enemy 
                    battleMode()
                } 
                
        }  else if (input === "i") {
            //show inventory
            console.log(`_ _ - - * STATUS * - - _ _ \nHEALTH: ${player.health} || INVENTORY: ${player.inventory}`)
            let playerAttackSample = randomDamage(player.min, player.damage)
            let enemyAttackSample = enemies[1].damage

            console.log(playerAttackSample, enemyAttackSample)

        }   else if (input === "q") {
            //quit the game
            console.log("You quit the game")
            isAlive = false
        }

    }

}

function battleMode() {
    // determine what keeps the player battling
    let isBattling = true 

    // random enemy must be selected
    let randomEnemy = Math.floor(Math.random() * enemies.length)
    let enemyChosen = enemies[randomEnemy]
    console.log(`An enemy is approaching... it is ${enemyChosen.name}!`)
    
    while (isBattling) {
        // choice from player
        const input2 = readlineSync.keyIn("What would you like to do? [a] attack, [r] run ", {limit:["a" ,"r"]}) 

        if (input2 === "a") {
            // player attacks
            let playerAttack = randomDamage(player.min, player.damage)
            let enemyAttack = enemyChosen.damage
            
            // reduce health points from enemy and player
            enemyChosen.health -= playerAttack
            player.health -= enemyAttack

            console.log (`You attacked ${enemyChosen.name} and reduced his health by ${playerAttack}\n${enemyChosen.name} attacked you, ${player.name}, and reduced your health by ${enemyAttack}%`)
            
            // console.log(player.name, player.health, enemyChosen.name, enemyChosen.health)

        } else if (input2 === "r") {     
            
            // run chance of running away and evaluate possible outcomes
            let runAwayResult = runAway()

            if (runAwayResult === 0) {
                // player ran away
                console.log (`You were able to run away!`)
                isBattling = false
                walkMode()

            } else if (runAwayResult === 1) {
                // Enemy caught player while trying to run away and inflicts damage                
                let enemyCatchesAttack = enemyChosen.damage
                
                player.health -= enemyCatchesAttack

                console.log (`${enemyChosen.name} attacked you while you tried to run away reducing your health by ${enemyCatchesAttack}`)
                console.log(`You have ${player.health}% remaining health`)
            }
        }

    }

}

