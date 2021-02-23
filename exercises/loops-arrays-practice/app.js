//count how many "computers" there are. Log the final count:
var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

let countComputer = 0
for (var i = 0; i < officeItems.length; i++) {
    if (officeItems[i] === "computer") {
        countComputer = countComputer + 1
    }
}

console.log (countComputer)

//   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -

//log to the console "old enough" if they are 18 or older, and "not old enough" if thy aren't 18.

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 
  
  let pronoun
  let ageQualifier
  let permission

  for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
      if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
          pronoun = "He's"
      } else pronoun = "She's"

      if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
          ageQualifier = "old enough"
          permission = "allowed"
      } else 
            ageQualifier = "not old enough"
            permission = "not allowed"

      console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is " + ageQualifier + ". " + pronoun + " " + permission + " inside" )
  }

//   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -   -

//Imagine you have a button that toggles a light on and off. Loop through the following array of numbers and toggle the button the numbers of times for each number. The array [2, 3, 2] would toggle the button 7 times. The light is off to start with. Log to the console whether or not the light is on at the end.

let lightSwitching = [2, 3, 2]

let countOfToggles = 0

for (var i = 0; i < lightSwitching.length; i++) {
    countOfToggles = countOfToggles + lightSwitching[i]
}

if(countOfToggles % 2 === 0) {
    console.log(countOfToggles + " The light is OFF")
} else console.log(countOfToggles + " The light is ON")

