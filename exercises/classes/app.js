// Constructor functions like the one below store information about what an object "is". It is generally for traits about the object
function Car(make, model) {
    this.make = make
    this.model = model
}
// Prototypes like the one below store what the objects generated from our constructor above can "Do." You'll want to store your methods and functions into the prototype
Car.prototype.honk = function () {
    console.log("honk honk")
}

const ferrari = new Car("ferrari", "360 Modena")
const lambo = new Car("Lamborghini", "Diablo")

function cars(...carsArr) {
    return carsArr
}

console.log(cars(ferrari, lambo))

lambo.honk()

// ES6 updated the approach and syntax to use protypes with "Classes"

class SurfPeak {
    constructor(name, size, location, waveSound) {
        this.name = name
        this.size = size
        this.location = location
        this.waveSound = waveSound
    }

    sound() {
        console.log(this.waveSound)
    }
}

class WakeSurfPeak extends SurfPeak {
    constructor(name, size, location, waveSound, winds) {
        super(name, size, location, waveSound)
        this.winds = winds
    }
}

const peahi = new SurfPeak("Peahi", "Big Wave", "Maui", "Powwwwwww")
const pipeline = new SurfPeak("Pipeline", "Heavy", "Oahu", "fruaaaaaaah")
const utahLake = new WakeSurfPeak("Utah Lake","As Big As Boat Allows", "Utah County","swissssshhh" , "Strong")


function allPeaks(...peaks) {
    return peaks
}

console.log(allPeaks(peahi, pipeline), utahLake)

pipeline.sound()
utahLake.sound() // notice that utahLake doesn't have a sound method from it's WakeSurfPeak constructor. It borrows it from its prototype
