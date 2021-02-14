// VAR : not recommended usage post 2015 ES6 js because the scoping can be a little tricky. Var scopes to the ENTIRE function which it lies in, so although a var may be declared within a NESTED {}, it will still be accessible outside of the {}/

// VAR EXAMPLE: notice that the var 'phrase' is declared in the innermost {} and is still accessible in the 'return' statement.

function compareLess(num1, num2) {
    if (num1 < num2) {
        var phrase = "less than";
    } else {
        var phrase = "greater than";
    }

    return num1 + " is " + phrase + " " + num2
}

console.log(compareLess(8,19));

// LET: is recommended. It is a little more restrictive that VAR in that it may be declared on an outer {} and accessible within its nested {}. But not the other way around. 

// LET GENERAL USAGE: recommended when using strings, numbers, booleans

let name = "Diogo"
let age = 35
let isHappy = true

// LET GOOD EXAMPLE: notice that 'let' declares the 'phrase' in the outer most {} which makes it available within nested {} where 'phrase' is set and in the outer {} where 'return' calls for 'phrase'

function compareLess(num1, num2) {

    let phrase

    if (num1 < num2) {
        phrase = "less than";
    } else {
        phrase = "greater than";
    }

    return num1 + " is " + phrase + " " + num2
}

console.log(compareLess(19,8))

// LET BAD EXAMPLE: running the below function will break because let declares 'phrase' in the inner most {} making it only scoped to that. Yet the return statement calls for 'phrase' in the {} scoped above it. 'let' cannot do this, so therefore, the function breaks. This is why you must reposition the let declaration in the higher level scope {} as you see in the LET GOOD EXAMPLE above. 

/* function compareLess(num1, num2) {
    if (num1 < num2) {
        let phrase = "less than";
    } else {
        let phrase = "greater than";
    }

    return num1 + " is " + phrase + " " + num2
}

console.log(compareLess(8,19)); */

// CONST: is recommended. It is most restrictive and used when the values are not to be changed. 

// CONST GENERAL USAGE: recommended when defining arrays and objects. 

const user = {
    name: "Diogo",
    address: "123 Diogo's World St.",
    city: "Atlas",
    st: "New York"
}

const pets = ["birch", "louie", "plant"]


