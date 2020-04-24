// var choice = prompt("Please choose: rock, paper, or scissors");
// array of attack choices
var attacks = ['rock', 'paper', 'scissors']; 

// user chooses attack
var user = attacks[Math.floor(Math.random()*attacks.length)]; 
console.log("The user chose: " + user);

// opponent chooses attack
var opponent = attacks[Math.floor(Math.random()*attacks.length)]; 
console.log("The opponent chose: " + opponent); 

function rules() {
    if(opponent == "rock" && user == "scissors") {
        console.log("Opponent wins!"); 
    }
    else if(opponent == "scissors" && user == "paper") {
        console.log("Opponent wins!")
    }
    else if(opponent == "paper" && user == "rock") {
        console.log("Opponent wins!");
    }
    else if(user == "rock" && opponent == "scissors") {
        console.log("User wins!"); 
    }
    else if(user == "scissors" && opponent == "paper") {
        console.log("User wins!"); 
    }
    else if(user == "paper" && opponent == "rock") {
        console.log("User wins!"); 
    }
    else {
        console.log("It's a tie!");
    }
}

console.log(rules());
