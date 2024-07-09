let gamNum = 25;
let UserNum = prompt("Guess the game number:");

while(gamNum != UserNum){
    UserNum  = prompt("Guess the wrong number.Guess again:");
}

console.log("congratulation, you entered the right number");