var header = document.getElementById("header");
var newH1 = document.createElement("h1");
newH1.textContent = "JavaScript Made This!!";
newH1.style.fontSize = "50px";
newH1.style.textAlign = "center";

header.append(newH1);

header.innerHTML += "<h2><center><span id='innerh2'>Diogo Ordacowski</span> wrote the JavaScript</center></h2>";

var innerH2Style = document.getElementById("innerh2").style;
innerH2Style.color = "#FFDBBA";

var messages = document.querySelectorAll(".message");

var betterMessages = ["hey, guess what man?", "what's up John?", "I'm learning javascript", "that's awesome! Congrats 🎉"];

for (var i = 0; i < messages.length; i++) {
    messages[i].textContent = betterMessages[i];
}

const clearButton = document.getElementById("clear-button");

clearButton.addEventListener("click", clearMessages);

function clearMessages() {
    var deleteMsgs = document.querySelectorAll(".message");
    for (var i = 0; i < deleteMsgs.length; i++) {
        deleteMsgs[i].remove();
    }

}





function themeColors() {
    const themeSelected = document.getElementById("theme-drop-down").value;

    if (themeSelected === "theme-one") {
        changeThemeColors("#1E8EFD", "white", "#CCB391", "black");

    } else if (themeSelected === "theme-two") {
        changeThemeColors("#EA3C53", "black", "#393939", "white");

    } else if (themeSelected === "theme-three") {
        changeThemeColors("#50C878", "black", "#9966CC", "white");
        
    } else if (themeSelected === "theme-four") {
        changeThemeColors("#663399", "white", "#F79862", "white");
    }
   
}

function changeThemeColors (leftBack, leftFont, rightBack, rightFont) {
var rightMessages = document.querySelectorAll(".right");
var leftMessages = document.querySelectorAll(".left");

    for (var i = 0; i < rightMessages.length; i++) {
            leftMessages[i].style.backgroundColor = leftBack;
            leftMessages[i].style.color = leftFont;
            rightMessages[i].style.backgroundColor = rightBack;
            rightMessages[i].style.color = rightFont;
    }
}

// GOLD - I can currently add more messages, but the clear button fails to delete all the new divs added. Also, no styling is applied to the new div that is added. 
var form = document.message
var counter = 0

form.addEventListener("submit", function(e) {
    e.preventDefault()
    const msgDiv = document.getElementById("messages-div")
    const newItems = form.title.value
    var newDiv = document.createElement("div")
    newDiv.textContent = newItems
    


    if (counter % 2 === 0) {
        msgDiv.appendChild(newDiv)
        newDiv.className = "message left"
        counter++
        console.log(newDiv)

    } else {
        msgDiv.appendChild(newDiv)
        newDiv.className = "message right"
        counter++
        console.log(newDiv)
    }

    
    
}
)




