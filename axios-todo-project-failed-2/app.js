
const newTodo = document.getElementById("currenttodos")


axios.get("https://api.vschool.io/diogo/todo").then(res => createTodo(res.data))
    .catch(err => console.log(err))

function createTodo (data) {

    const widgetContainer = document.createElement("div")
    widgetContainer.setAttribute("id", data._id)
    newTodo.appendChild(widgetContainer)

    for (let i = 0; i < data.length; i++) {
  
        const imageTag = document.createElement("div")
        const statusTag = document.createElement("div")
        const deleteTag = document.createElement("div")
        const editTag = document.createElement("div")
        const titleTag = document.createElement("div")
        const descriptionTag = document.createElement("div")
        const priceTag = document.createElement("div")

        imageTag.setAttribute("class","image")
        imageTag.textContent = data.imgurl
        widgetContainer.appendChild(imageTag)

    }
}