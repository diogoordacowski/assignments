// need a hero (the user)

//3 enemies minimum 

//accept user input (readline sync node)

//user needs to be able to walk, check inventory, quit
	



//a variable that is going to keep the game going or stop it


//import any libraries like readline sync (

const readlineSync = require('readline-sync')


let playerIsAlive = true

let hero = {
	name: "",
	hp: 100,
	inventory: [],
	
}

class Enemy {
	constructor (name, strength) {
	this.name = name,
	this.strength = strength,
	}

}

//create new enemies

const enemy1 = new Enemy("voldemort", 120)
const enemy2 = new Enemy("witch", 200)

const enemies = [enemy1, enemy2]

const inputName = readlineSync.question("what is your name?")

hero.inputName = inputName


while(playerIsAlive) {

// game goes here

const input = keyIn("what would you like to do?", {limit:wiq)


	if ( input === 'w') {
	 // keep walking
	let number = Math.floor(Math.random() * 4) + 1  // assign a value from 0 - 1 // 
	if (number === 1) {
	//user comes across an enemy
	

	let attackNumber = Math.floor(Math.random() * 2) + 1
		if (number === 1) {
		//you were attacked
		// you have suffered damage
		}
	
		}
	
	
	//2) if they come across enemy
	//	1. Choose run OR (50% chance they'll escape or be attacked)
	//	2. Choose to fight
	} if (input === 'i') {
		// print inventory
	} else (input === 'q') {
		//quit game
		//playerIsAlive = false;
	}





}