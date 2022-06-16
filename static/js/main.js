function funcExample() {
    console.log("Hello World");

};

// terminating lines required semicolon
// variable are camelCase

let my_name = "Person" // variable declaration for a mutable variable.

const my_last_name = "O'Connell" // variable declaration for an immutable variable.


if (my_name === "Person") {
    console.log(`Hello, ${my_name}!`)
} else {
    console.log("You're not Person!")
};

function reallyGoodFunction (num1, num2) {
    let result = num1 + num2;
    return result;
};


function taskHider ()
    let element = document.getElementById("task-box")
    element.classList.toggle("hidden") 