// GUESS THAT NUMBER
// Message to be used throughout the project/file
const enterNumText = `Please enter a number greater than zero`;
// For starting, restarting, and ending the game
let restartGame = true;
// For storing the range of the number to be guessed
let rangeNum;
// For storing the number that the user will attempt to guess
let randomNum;
// For storing the number of attempts the user has left
let attempts;
// For storing the user's guess
let guess;
// For storing the user's response to play again or not play again
let playAgain;

const secretCode = "pink";

alert(`Welcome to "GUESS THAT NUMBER!" Please click "OK" to start the game`);

while (restartGame){
  rangeNum = prompt(`Please enter a maximum number for the range:`);
  rangeNum = parseInt(rangeNum);

  alert(rangeNum);

  while (!rangeNum || rangeNum <= 1){
    rangeNum = parseInt(prompt(enterNumText));
  }

  randomNum = Math.floor(Math.random() * rangeNum + 1);

  alert(randomNum);

  attempts = parseInt(prompt(`Please enter a number of attempts allowed:`));

  while (!attempts || attempts < 1 || attempts >= rangeNum){
    attempts = parseInt(prompt(`Please enter a number from 1 to ${rangeNum}`));
  }

  alert(attempts);

  guess = prompt(`Please enter a guess from 1 to ${rangeNum}. You have ${attempts} attempt(s) left:`);

  while (true){

    
    let enteredCode = prompt("Enter the secret code to reveal the number:");
    if (enteredCode === secretCode) {
      alert(`The secret number is ${randomNum}!`);
      break;  
    }

    guess = parseInt(guess);

    while (!guess || guess <= 0 || guess > rangeNum) {
     guess = parseInt(prompt(`Please enter a number from 1 to ${rangeNum}`));
    }

    alert(guess);

    attempts--;

    if (guess === randomNum) {
      alert(`CONGRATS YOU GUESSED THE CORRECT NUMBER: ${randomNum}`);
      break;
    } else if (attempts < 1){
      alert(`Sorry, but you have run out of attempts :(\nThe number was ${randomNum}`);
      break;
    } else if (guess < randomNum){
      guess = prompt(`Too low. You have ${attempts} attempt(s) left`);
    } else {
      guess = prompt(`Too high. You have ${attempts} attempt(s) left`);
    }
  }

  playAgain = prompt(`Would you like to play again? Y for yes. N for no.`);

  while (true){
    if (playAgain === `N` || playAgain === `n`) {
      alert(`Thanks for playing!`)
      restartGame = false;
      break;
    } else if (playAgain === `Y` || playAgain === `y`){
      break;
    } else {
      playAgain = prompt(`Please enter Y or N:`);
    }
  }
}

