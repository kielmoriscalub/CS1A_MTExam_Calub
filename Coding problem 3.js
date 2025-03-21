 // KIEL MORIS CALUB
 // BSCS1A
 
 
let age = prompt("Enter your age:");
age = Number(age); // I am converting the input to a number

if (age < 5) {
    console.log("You are a Toddler.");
} else if (age >= 5 && age <= 12) {
    console.log("You are a Child.");
} else if (age >= 13 && age <= 19) {
    console.log("You are a Teenager.");
} else if (age >= 20 && age <= 35) {
    console.log("You are a Young Adult.");
} else if (age >= 36 && age <= 60) {
    console.log("You are Middle-Aged.");
} else {
    console.log("You are a Senior.");
}

// example if you input 10 the result will be "You are a Toddler" and if its 60 above it will result into "You are a Senior
