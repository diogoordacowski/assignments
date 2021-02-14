// EXAMPLE 1
// OBJECTS: properties of ojects come in key: value format

var person = {
    name: "Bob",
    age: 40,
    siblings: ["malcom", "kevin", "karen"],
    address: {
        street: "123 Bob Street",
        city: "Sandy",
        zip: 89645,
    }
}

// DOT . NOTATION: the means by which we access the object and its various properties through the '.' character

console.log(person.age) 

// BRACKET [] NOTATION: the means by which we access the object and its various properties through the [] symbols

console.log(person["name"])
console.log(person["address"]["zip"])


// EXAMPLE 2

var computer = {
    brand: "dell",
    hd: 250,
    ram: 8,
    previousOwners: ["bob", "cameron", "faith"],
    components: {
        screen: 13,
        usb: 2,
        hdmi: 1,
        camera: 1,
        mouse: 1,
    }
    
}

console.log(computer.brand)
console.log(computer["previousOwners"][1])
console.log(computer["components"]["mouse"])

// METHOD - a method is an object that holds a function. In the example below, we call the honkSound() method which has an explicit string to console.log(). We also have a sound() method which also has a console.log() but that references ANOTHER PROPERTY WITHIN THE OBJECT with the 'this'. The 'this' keyword means, within the object I'm already in.  

var car = {
    type: "honda",
    color: ["red", "orange", "pink", "blue", "green"],
    honkSound: function () {
        console.log("hoooooonk hooooooonk")
    },
    engineSound: "vroom vroooooom",
    sound: function() {
        console.log(this.engineSound)
    }
}

car.honkSound()
car.sound()
console.log("   ^ the above was console.logged with the 'this' keyword referencing another property within the object")