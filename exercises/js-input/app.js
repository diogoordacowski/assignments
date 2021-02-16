const buttonElement = document.getElementById("btn-click")
console.log(buttonElement)

buttonElement.addEventListener("click", buttonClicked)

function buttonClicked(){
    
    var inputBox = document.getElementById("user-input");
    var userInput = inputBox.value;

    console.log(userInput);

    var newParagraph = document.createElement("p");
    newParagraph.textContent = userInput;

    document.body.append(newParagraph)
}