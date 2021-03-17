const form = document.travelForm

const firstName = form.firstName
const lastName = form.lastName
const age = form.age
const genderOptions = form.gender
const destination = form.destination
const dietRestrictOptions = form.dietaryRestrict

let selectedDietRestricts = []
let selectedGender

form.addEventListener("submit", function(e){
    e.preventDefault()


    for (let i = 0; i < genderOptions.length; i++) {
        if (genderOptions[i].checked) {
            selectedGender = genderOptions[i].value
        }
    }

    for (let s = 0; s < dietRestrictOptions.length; s++) {
        if (dietRestrictOptions[s].checked) {
            selectedDietRestricts.push(dietRestrictOptions[s].value)
        }
    }

    alert(`First Name: ${firstName.value}\nLast Name: ${lastName.value}\nAge: ${age.value}\nGender: ${selectedGender}\nDestination: ${destination.value}\nDietary Restrictions: ${selectedDietRestricts.join(", ")}`)

    selectedDietRestricts.splice(0,selectedDietRestricts.length)
})