let myForm = document.addItem
let myList = document.getElementById("list")

myForm.addEventListener("submit", function(e) {
    e.preventDefault()
  
    const itemName = myForm.title.value
    
    myForm.title.value = ""

    const myItem = document.createElement("li") // creating list item
    const itemTitle = document.createElement("div") // creating the title of item
    const itemEditButton = document.createElement("button") // creating edit btn
    const itemDeleteButton = document.createElement("button") // creating X btn

    itemTitle.textContent = itemName // giving title the dynamic input value
    itemEditButton.textContent = "edit" // giving edit btn the static text content
    itemEditButton.setAttribute("name", "edit") // giving edit btn a name attribute to easily retrieve later
    itemDeleteButton.textContent = "X" // giving the X btn the static X content
    itemDeleteButton.setAttribute("name","delete") // giving delete btn a name attribute to easily retrieve later


    myItem.appendChild(itemTitle)
    myItem.appendChild(itemEditButton)
    myItem.appendChild(itemDeleteButton)
   
    myList.append(myItem)  

    console.log(myList,000)
    const deleteButton = document.getElementsByName("delete") // gets Node List of all delete buttons 

    for (var i = 0; i < deleteButton.length; i++) {
        deleteButton[i].addEventListener("click", function(e) {
    
            e.target.parentElement.remove()
        })

    } 

    let editButtons = document.getElementsByName("edit")

    for (var i = 0; i < editButtons.length; i++) {
       

        editButtons[i].addEventListener("click", function(e){

        if (e.target.name === "saveButton") {
           
           const saveInputBox = e.target.parentElement.lastChild
           const divItemTitle = e.target.parentElement.firstChild
           
           // const savedInputText = e.target.previousSibling.innerHTML

           divItemTitle.textContent = saveInputBox.value
           e.target.textContent = "edit"
           e.target.setAttribute("name", "edit")
           saveInputBox.remove()
          

        } else {
                
        e.target.textContent = "save" // update 'edit' to 'save'
        const newInputText = e.target.previousSibling.innerHTML // capture the sibling div's text value
        const newInput = document.createElement("input") // create an input element
        newInput.value = newInputText // assign input value the value of the sibling div
        e.target.parentElement.appendChild(newInput) // append the input on the DOM accordingly

        e.target.setAttribute("name", "saveButton")

        }
       
    })

    }

        
 

})


