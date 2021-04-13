//- https://coursework.vschool.io/v-schools-todo-api-documentation/
// url: https://api.vschool.io/diogo/todo

const jscontent = document.getElementById("jscontent")

// GET: requests with axios
// GET: All of the objects

getData()

function getData() {
    // not all browsers support innerHTML to erase the contents of the DOM, so this approach is commented out

    /* const jsContent = document.getElementById("jscontent")
    jsContent.innerHTML = "" */ 

    //Instead, we'll use an actual function to loop through the div's elements and remove each of them

    clearContents()

    axios.get("https://api.vschool.io/diogo/todo")
    .then(res => {
        for (let i = 0; i < res.data.length; i++) {
            const h3 = document.createElement("h3")
            h3.textContent = res.data[i].title
            jscontent.appendChild(h3)
        }
        console.log(res.data)
    })
    .catch(err => console.log(err))
}

function clearContents() {
    while (jscontent.firstChild) {
        jscontent.removeChild(jscontent.firstChild)
    }
}

// GET:  One single object

axios.get("https://api.vschool.io/diogo/todo/606fcd90ee6f8d3fc3fed1e7")
    .then(res => console.log(res.data))
    .catch(err => console.log(err))

// POST : needs a body to be passed in as an argument. In the case below, a variable called newTodo that holds an object
    // Form: allowing the Form on the DOM to collect the information that we will POST

const todoForm = document.todoform
const title = todoForm.newtitle
const description = todoForm.newdescription
const image = todoForm.newimage

todoForm.addEventListener("submit", function(e){
    e.preventDefault()

    const newTodo = {
        title: title.value,
        description: description.value,
        imgUrl: image.value
    }

    title.value = ""
    description.value = ""
    image.value = ""

    axios.post("https://api.vschool.io/diogo/todo", newTodo)
        .then(res => {
            console.log(res.data)
            getData()
        })
        .catch(err => console.log(err))

})

// DELETE

axios.delete("https://api.vschool.io/diogo/todo/6071249cee6f8d3fc3fed1f2")
    .then(res => console.log(res.data))
    .catch(err => console.log(err))

// PUT

const updates = {
    title: "test 7 changed with put"
}

axios.put("https://api.vschool.io/diogo/todo/6071dfc7ee6f8d3fc3fed201", updates)
    .then(res => {
        console.log(res.data)
        getData()
    })
    .catch(err => console.log(err))