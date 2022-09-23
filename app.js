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

let rating = prompt("How would you rate my page? 1-5");
for (let i = 0; (i<rating && i<5); i++){
   console.log(i);
   document.write("<img style= 'width: 50px;' src= 'https://cdn.shopify.com/s/files/1/0306/6419/6141/products/soccer_1000x.jpg' alt= 'soccer ball picture'/>");
   
}