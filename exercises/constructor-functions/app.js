
function Toy (make, name, released, tagline) {
    this.make = make
    this.name = name
    this.released = released
    this.tagline = tagline
    /* this.say = function () {
        console.log(this.say)

        // NOTE: observe the Toy.prototyp.say below. This has been commented out because it can be handled within the prototype efficiently. Otherwise, each new object that is instantiated with the constructor would have a repeat of this function also created, which is doing duplicate instances of the same function in memory and is unnecessary. 
         
    } */
}


var microphone = new Toy ("eKids", "Trolls Microphone", 2018, "throw it up!")
var spiderman = new Toy ("Marvel titans", "Spider-man Action Figure", 2015, "I'm here to save the day")

Toy.prototype.say = function() {    // this prototype is function that can be stored in memory once and reused many times
    console.log(this.tagline)
}

spiderman.say() 

console.log (microphone)

console.log (spiderman)

console.log(spiderman.name)



