 // KIEL MORIS CALUB
 // BSCS1A
 
 
 let theFavNumber = 19; 
 let userGuess = Number(prompt("Guess my favorite number:"));
 while (userGuess !== theFavNumber) {
     if (userGuess > theFavNumber) {
         console.log("Too high! Try again.");
     } else {
         console.log("Too low! Try again.");
     }
     userGuess = Number(prompt("Guess again:"));
 }
 
 console.log("Correct! You guessed my favorite number;)");
 