'use strict'

//////////////////
// define the variable named "name" and set the value to the user input of the prompt
function yourName() {
    let name;
        name = prompt('What is your name?');
        console.log(name);
    return document.write(name);
}

function guessANumber() {
    let answer;

    while (answer != 7) {
        answer = prompt('Guess a number between 1-10');
        if (answer !=7) {
            alert('Try again!');
        } else {
            alert('You are correct!');
        }
    }
}

function greetUser() {
    usersName = prompt("What is your name?"); // reassing value of global function
    if (usersName == ""){                     // check if user didn't type anything
      usersName = prompt("Please enter your name!"); // give them another chance
    }
    console.log(usersName); // print their response to console.
    document.write("Hi " + usersName + " welcome to my page!"); // write message to page
    return usersName;      // return usersName from function - must be last step!
  }