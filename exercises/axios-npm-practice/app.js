// https://swapi.dev/

const newObject = {
    title: "testing post title 5", 
    description: "testing post description 5",
    completed: false
}

const baseUrl = "https://api.vschool.io/diogo/todo"

const axios = require("axios")

// axios.get("https://swapi.dev/api/people/1/").then(res => console.log(res.data.name, "first")).catch(err => console.log(err))

// axios.get("https://api.vschool.io/diogo/todo").then(res => console.log(res.data.length, "second")).catch(err => console.log(err))

// axios.post("https://api.vschool.io/diogo/todo", newObject).then(res => console.log(res.data.title, "third")).catch(err => console.log(err))

const regex = /.*test.*/i
let count = 0

axios.get("https://api.vschool.io/diogo/todo")
    .then(res =>{
        
        for (let i = 0; i < res.data.length; i++) {
            if (res.data[i].title.match(regex)){
                console.log(res.data[i]._id)
                let itemUrl = baseUrl + "/" + res.data[i]._id
                console.log(itemUrl)
                deleteItem(itemUrl)
                count += 1 
            }
        }
        console.log(count)
    })
    .catch(err => console.log(err))

function deleteItem(itemurl) {
    axios.delete(itemurl).then(res => console.log(res.data))
        .catch(err => console.log(err))
}

