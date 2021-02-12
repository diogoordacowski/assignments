// NOTE: use terminal command 'node app.js' to confirm the following conditionals below

// SWITCH || this statement will console.log to 'the color is blue'

var colorBall = "blue";

switch (colorBall) {
    case "red":
        console.log("the color is red")
        break
    case "blue":
        console.log("the color is blue")
        break
    case "yellow":
        console.log("the color is yelow")
    default:
        console.log("the color is not red, blue, or yellow")
}

// IF || this statement will console.log to "the apple is red"

var apple = "red";

if (apple === "red") {
    console.log("the apple is red")
} else if (apple === "green") {
    console.log("the apple is green")
} else if (apple === "yellow") {
    console.log("the apple is yellow")
} else {
    console.log("I don't know what color the apple is")
}
    // FALSEY OPERATORS: 0, "", null, undefined, false, NaN
    // LOGIC OPERATORS: && (AND), || (OR), ! (NOT)
    // COMPARISON OPERATORS: < (less than), > (greater than), <= (less than or equal to), >= (greater than or equal to), === (equal to), !== (not equal to)

