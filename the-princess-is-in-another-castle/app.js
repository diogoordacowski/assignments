class Player {
    constructor(namePicked) {
    
        this.setName(namePicked)
        this.gameActive = true // boolean
        this.status = "Big" // string
        this.totalCoins = 0 // number
        this.hasStar = false // boolean
    }

    setName(namePicked){
         //Has a parameter called namePicked where you pass in "Mario" or "Luigi". Sets name to "Mario" or "Luigi".
         this.name = namePicked
    } 
    gotHit(){
        // whenever the player is hit by an enemy. gotHit() will set the status property accordingly. Powered Up | Big | Small | Dead
        if (this.status === "Powered Up") {
            this.status = "Big"
        } else if (this.status === "Big") {
            this.status = "Small"
        } else if (this.status === "Small"){
            this.status = "Dead"
            this.gameActive = false
        }
    } 
    gotPowerup(){
        // when a powerup is received and sets the status accordingly. (Small | Big | Powered Up. If you are Powered Up and it hits this function, you get a star)
        if (this.status === "Small") {
            this.status = "Big"
        } else if (this.status === "Big") {
            this.status = "Powered Up"
        } else if (this.status === "Powered Up") {
            this.hasStar = true
        }

    } 
    addCoin() {
        // adds a coin to totalCoins
        this.totalCoins += 1
    }

    print() {
        // prints to the console the name, totalCoins, status, and star properties. Make sure you make this look nice such as:
        if (this.hasStar) {
            console.log(`Name: ${this.name}\nTotal Coins: ${this.totalCoins}\nStatus: ${this.status}\nYou Have A Star!\n`)
        } else {
            console.log(`Name: ${this.name}\nTotal Coins: ${this.totalCoins}\nStatus: ${this.status}\n`)
        }  
    } 
}

let newPlayer = new Player("Luigi")
newPlayer.print() 

let startId = setInterval(() => {randomizer()}, 1000)

function randomizer(){

   let randomNum = Math.floor(Math.random() * 3)
   console.log(randomNum)

    if (randomNum === 0) {
        newPlayer.gotHit()
    } else if (randomNum === 1) {
        newPlayer.gotPowerup()
    } else {
        newPlayer.addCoin()
    }
    
    newPlayer.print() 
    
    if (newPlayer.gameActive === false) {
        clearInterval(startId)
    }

}  



    
      
      





