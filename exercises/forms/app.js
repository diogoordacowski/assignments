console.log(document["my-form"]) // document["my-form"] is quickly retrieving the form element

var myForm = document["my-form"]

console.log(document.getElementById("my-other-form")) // this retrieves the element through the typical method of 'getElementByID()'

//---------------------------------------------------------------------------//

// SUBMIT EVENT | a button click inside of a form tag fires the SUBMIT event. The event is added to the FORM and NOT THE BUTTON. By default, the click on the button refreshes the page. 

myForm.addEventListener("submit", function(e){
    e.preventDefault()
    console.log(myForm.firstName) // here I select the <input> element through '.' notation
    console.log(myForm["last-name"]) // here I select the <input> element through [] notation

    const firstName = myForm.firstName.value
    const lastName = myForm["last-name"].value

    console.log(firstName + " " + lastName)

    myForm.firstName.value = ""
    myForm["last-name"].value = ""

    // write to the DOM with the following steps

    // 1. Create the element <h2>
    const h2 = document.createElement("h2")

    // 2. Give the element some content

    h2.textContent = firstName + " " + lastName

    // 3. Append the element created in step 1 (meaning actually go place the h2 element object as a tag on the DOM). Make sure to identify where it should go

    document.getElementById("h2-inputs").append(h2)    
    
})

//RADIO FORM | html will force the selection of a single radio when all <inputs> have the same name= attribute. 

const radioForm = document.radioForm

radioForm.addEventListener("submit", function(e) {
    e.preventDefault()
    console.log(radioForm.gender.value) // this value is returned because it is a SINGLE value
})

//CHECKBOX FORM | html allows multiple selection here, so there are multiple values retrievable. Each input has a possible value so they are ALL collected into an array that must be looped through to retrieve the values.  

const checkBoxForm = document["check-box-form"]

console.log (checkBoxForm.foods) // notice this logs a "Radio Node List" 

const selectedFoods = [] //this is an empty array for now. It will later house values from the function below

checkBoxForm.addEventListener("submit", (e) => {
    e.preventDefault()

    for (var i = 0; i < checkBoxForm.foods.length; i++) {
        if(checkBoxForm.foods[i].checked) {
            selectedFoods.push(checkBoxForm.foods[i].value) // this pushes the checked = true input values into the selectedFoods array above
        }
    }

    console.log(selectedFoods)
})

// USING THE SAME FORM name="bundleForm"

const bundleForm = document.bundleForm

bundleForm.addEventListener ("submit", (e) => {
    e.preventDefault()

    console.log(bundleForm.city.value)
    console.log(bundleForm.city.value)

})


