const jsContent = document.getElementById("jscontent")
const baseUrl = "https://api.vschool.io/diogo/todo"
const todoForm = document.todoform
const title = todoForm.newtitle
const price = todoForm.newprice
const description = todoForm.newdescription
const image = todoForm.newimage

todoForm.addEventListener("submit", e => {
    e.preventDefault()
    console.log("click worked")

    const newTodo = {
        title: title.value,
        price: price.value,
        description: description.value,
        imgUrl: image.value
    }

    title.value = ""
    price.value = ""
    description.value = ""
    image.value= ""

    axios.post(baseUrl, newTodo)
        .then(res => {
            console.log(res.data)
            getData()
        })
        .catch(err => console.log(err))
})

getData()

function getData() {

    clearContents(jsContent)

    axios.get(baseUrl)
        .then(res => {
            for (let i = 0; i < res.data.length; i++) {
                const todoCard = document.createElement("div")
                todoCard.setAttribute("id", res.data[i]._id)
                jsContent.appendChild(todoCard)

                const title = document.createElement("h3")
                title.textContent = res.data[i].title
                if (res.data[i].completed === true) {
                    title.setAttribute("class", "strike")
                }
                todoCard.appendChild(title)

                const description = document.createElement("p")
                description.textContent = res.data[i].description
                todoCard.appendChild(description)

                const price = document.createElement("p")
                price.textContent = res.data[i].price
                todoCard.appendChild(price)

                const image = document.createElement("img")
                image.setAttribute("src", res.data[i].imgUrl)
                image.setAttribute("alt", "image not available")
                todoCard.appendChild(image)

                const status = document.createElement("input")
                status.setAttribute("type", "checkbox")
                if (res.data[i].completed === true) {
                    status.setAttribute("checked", true)
                }
                todoCard.appendChild(status)
                status.addEventListener("click", e => {
                    console.log(e.target.checked)
                    const statusId = e.target.parentElement.id
                     if (e.target.checked === false) {
                        updates = {
                            completed: false
                        }
                    } else if (e.target.checked === true) {
                        updates = {
                            completed: true
                        }
                    } 
                    
                    axios.put(baseUrl + "/" + statusId, updates)
                        .then(res => {
                            console.log(res.data)
                            getData()
                        })
                        .catch(err => console.log(err))

                })

                const deleteButton = document.createElement("button")
                deleteButton.textContent = "Delete"
                deleteButton.setAttribute("class", "delete")
                todoCard.appendChild(deleteButton)
                deleteButton.addEventListener("click", e => {
                    console.log(e.target)
                    const itemToDelete = e.target.parentElement
                    const itemToDeleteName = itemToDelete.firstChild.textContent
                    const deleteItemId = itemToDelete.id
                    console.log(itemToDelete, itemToDeleteName, deleteItemId)
                    
                    const checkDelete = confirm(`Are you sure you want to delete "${itemToDeleteName}"`)

                    if (checkDelete === true) {
                        //delete http request
                        console.log("deleting http request")
                        axios.delete(`${baseUrl}/${deleteItemId}`)
                            .then(res => {
                                console.log(res.data)
                                getData()
                            })
                            .catch(err => console.log(err))
                            
                    } else {
                        console.log("we have not deleted the item")
                    }

                })

                const editButton = document.createElement("button")
                editButton.textContent = "Edit"
                editButton.setAttribute("class", "edit")
                todoCard.appendChild(editButton)
                editButton.addEventListener("click", e => {
                    const itemToEdit = e.target.parentElement
                    const editItemId = itemToEdit.id
                    const domItems = itemToEdit.children
                    console.log(itemToEdit, editItemId, domItems)

                    const inputTitle = domItems[0].textContent
                    const inputDesc = domItems[1].textContent
                    const inputPrice = domItems[2].textContent
                    const inputImgUrl = domItems[3].src

                    clearContents(itemToEdit)

                    const titleInput = document.createElement("input")
                    titleInput.value = inputTitle
                    itemToEdit.appendChild(titleInput)

                    const descInput = document.createElement("input")
                    descInput.value = inputDesc
                    itemToEdit.appendChild(descInput)

                    const priceInput = document.createElement("input")
                    priceInput.value = inputPrice
                    itemToEdit.appendChild(priceInput)

                    const imgUrlInput = document.createElement("input")
                    imgUrlInput.value = inputImgUrl
                    itemToEdit.appendChild(imgUrlInput)

                    const saveButton = document.createElement("button")
                    saveButton.textContent = "Save"
                    saveButton.setAttribute("class", "save")
                    itemToEdit.appendChild(saveButton)
                    saveButton.addEventListener("click", e => {
                        const updates = {
                            title: titleInput.value,
                            price: priceInput.value,
                            description: descInput.value,
                            imgUrl: imgUrlInput.value
                        }
                        const putUrl = `${baseUrl}/${editItemId}`

                        putRequest(putUrl, updates)
                    })



                   // const inputTitle = itemToEdit[0]

                    //COMPLETE | store the values 
                    //COMPLETE | clear the elements from the DOM
                    //COMPLETE | add inputs to the DOM with the stored values as placeholder text
                    //COMPLETE | add a Save button
                    // Save button click sends a put request and calls the getData()

                    //

                })
            }
            console.log(res.data)
        })
        .catch(err => console.log(err))

}


function clearContents(node) {
    while (node.firstChild) {
        node.removeChild(node.firstChild)
    }
}

function putRequest(url, updates) {
    console.log(url, updates)

    axios.put(url, updates)
        .then(res=>{
            console.log(res.data)
            getData()
        })
        .catch(err => console.log(err))
}




