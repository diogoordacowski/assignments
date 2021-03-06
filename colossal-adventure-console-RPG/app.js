// THIS JS FILE WORKS
// INSTRUCTIONS: https://coursework.vschool.io/colossal-adventure-console-rpg/

var readlineSync = require('readline-sync');

// set the stage for game sequence continuation
let isAlive = true

// when player kills enemy, player heals by some amount
let healing = 20

// make a convenient status bar that can be reused
function statusBar() {
    console.log(`\n_ _ - - * STATUS * - - _ _ \nHEALTH: ${player.health} || INVENTORY: ${player.inventory}\n`)
}
   

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
    name: readlineSync.question("\nLet's play Capoeira Adventure!\n\nMay I have your apelido?"),
    health: 100,
    inventory: [],
    damageMax: 30,
    damageMin: 12
}

// create enemy objects
function Enemy (name, health, item, damageMax, damageMin) { 
    this.name = name
    this.health = health
    this.item = item
    this.damageMax = damageMax
    this.damageMin = damageMin
}

let enemy1 = new Enemy ("Zumbi", 50, "corda branca", 30, 5) 
let enemy2 = new Enemy ("Besouro", 50, "patuá", 15, 8)
let enemy3 = new Enemy ("Exú", 50, "dobrão", 20, 2)

// organize enemies array
const enemies = [enemy1, enemy2, enemy3]

// an array to store spliced out enemies after being killed

const deadEnemies = []

// make walking interesting :)
const walkingTypes = [`practicing armadas`, `throwing meia luas`, `esquivando`, `gingando`]
const walkingAction = function (arr) {
    const randomWalk = Math.floor(Math.random() * arr.length)
    return arr[randomWalk]
}

console.log(`Hi ${player.name}! `)
    
while (isAlive) {
    
    // choice from player
    const input = readlineSync.keyIn("What would you like to do? [t] Train, [i] Iventory, [q] Quit ", {limit:["t", "i", "q"]}) 

    if (input === "t") {
        //walk
        console.log(`You are ${walkingAction(walkingTypes)}...`)
        let randomEncounter = Math.floor(Math.random() * 4)
        
            if (randomEncounter === 0) {
                // you will meet an enemy 
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
                        let playerAttack = randomDamage(player.damageMax, player.damageMin)
                        let enemyAttack = randomDamage(enemyChosen.damageMax, enemyChosen.damageMin)
                        
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
            
                        } else if (runAwayResult === 1) {
                            // Enemy caught player while trying to run away and inflicts damage                
                            let enemyCatchesAttack = randomDamage(enemyChosen.damageMax, enemyChosen.damageMin)
                            
                            player.health -= enemyCatchesAttack
            
                            console.log (`${enemyChosen.name} attacked you while you tried to run away reducing your health by ${enemyCatchesAttack}`)
                            console.log(`You have ${player.health}% remaining health`)
                        }
                    }

                    // determine if player is alive before continuing sequence of while loops
                    if (player.health <= 0) {
                        isAlive = false
                        isBattling = false
                        console.log(`\nYou couldn't withstand the intense quebra gereba.\n\nVocê morreu irmão\n\nVá com Deus jogar nas rodas do além`)

                    } else if (player.health > 0 && enemyChosen.health <= 0) {
                        isBattling = false
                        // REMOVE the enemyChosen from the array - it can no longer be randomly chosen
                        deadEnemies.push(enemies.splice(enemies.indexOf(enemyChosen),1))

                        //add item from enemy to player's inventory and heal by healing amount
                        player.inventory.push(enemyChosen.item)
                        player.health += healing

                        console.log(`\nYou killed ${enemyChosen.name}!\n\nAs you walk over his carcass, you grab his ${enemyChosen.item} to store in your inventory for later.\n\nYou consume his axé and heal by ${healing} points`)

                        statusBar()

                        if (enemies.length === 0) {
                            isAlive = false
                            console.log(`You, ${player.name}, are a true capoeira Mestre. Salve!`)
                        }

                        

                    }              
                }
            } 
            
    }  else if (input === "i") {
        //show inventory
        statusBar()
        
        /* For quick sample of randomized attacks, uncomment this block and view the inventory

        let playerAttackSample = randomDamage(player.damageMax, player.damageMin)
        let enemyAttackSample =  randomDamage(enemies[1].damageMax, enemies[1].damageMin)

        console.log(playerAttackSample, enemyAttackSample)

        */

    }   else if (input === "q") {
        //quit the game
        console.log("You quit the game")
        isAlive = false
    }

}


