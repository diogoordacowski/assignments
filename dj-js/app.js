const square = document.getElementById("square");
square.addEventListener("mouseenter", makeBlue);
square.addEventListener("mousedown", makeRed);
square.addEventListener("mouseup", makeYellow);
square.addEventListener("dblclick", makeGreen);

document.body.addEventListener("wheel", makeOrange);

var keyPressed = document.addEventListener("keydown", keyCommands);

function makeBlue() {
    square.style.backgroundColor = "#0062FE";
}

function makeRed() {   
    square.style.backgroundColor = "#CA3433";
}

function makeYellow() {
    square.style.backgroundColor = "#FADA5E";
}

function makeGreen() {
    square.style.backgroundColor = "#50C878";
}

function makeOrange() {
    square.style.backgroundColor = "#F79862";
}

function keyCommands(event) {
    let exactKey = event.which;

    if (exactKey === 66) {
        makeBlue();
    } else if (exactKey === 82) { 
        makeRed();
    } else if (exactKey === 89) {
        makeYellow();
    } else if (exactKey === 71) {
        makeGreen();
    } else if (exactKey === 79) {
        makeOrange();
    } else {
        console.log("no valid color key was pressed")
    }

}


