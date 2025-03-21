// KIEL MORIS CALUB
// CS1A


// Create two arrays to store enrolled students
let DSA = [];
let WebDev = [];

// Function to display the menu and get user input
function mainMenu() {
   let subjectChoice = prompt("Select a subject:\n(A) DSA\n(B) WebDev").toUpperCase();
   
   if (subjectChoice === "A") {
      operations(DSA, "DSA");
   } else if (subjectChoice === "B") {
      operations(WebDev, "WebDev");
   } else {
      console.log("Invalid choice. Please try again.");
      mainMenu();
   }
}

// Function to handle operations for the selected subject
function operations(subjectArray, subjectName) {
   let operation = prompt(`Operations for ${subjectName}:\n(A) Enroll\n(B) Unenroll\n(C) Select Another Subject\n(D) Exit`).toUpperCase();
   
   if (operation === "A") {
      enrollStudent(subjectArray, subjectName);
   } else if (operation === "B") {
      unenrollStudent(subjectArray, subjectName);
   } else if (operation === "C") {
      mainMenu();
   } else if (operation === "D") {
      exitProgram();
   } else {
      console.log("Invalid choice. Please try again.");
      operations(subjectArray, subjectName);
   }
}

// Function to enroll a student
function enrollStudent(subjectArray, subjectName) {
   let studentName = prompt(`Enter student name to enroll in ${subjectName}:`);
   if (studentName) {
      subjectArray.push(studentName); // Add student to the array
      console.log(`${studentName} has been enrolled in ${subjectName}.`);
   }
   operations(subjectArray, subjectName);
}

// Function to unenroll a student
function unenrollStudent(subjectArray, subjectName) {
   if (subjectArray.length === 0) {
      console.log(`No students enrolled in ${subjectName}.`);
   } else {
      console.log(`Currently enrolled students in ${subjectName}: ${subjectArray.join(", ")}`);
      let studentName = prompt("Enter student name to unenroll:");
      let index = subjectArray.indexOf(studentName);
      if (index !== -1) {
         subjectArray.splice(index, 1); // Remove the student from the array
         console.log(`${studentName} has been unenrolled from ${subjectName}.`);
      } else {
         console.log("Student not found.");
      }
   }
   operations(subjectArray, subjectName);
}

// Function to exit and display final enrolled students
function exitProgram() {
   console.log("Final student lists:");
   console.log("DSA:", DSA.length > 0 ? DSA.join(", ") : "No students enrolled.");
   console.log("WebDev:", WebDev.length > 0 ? WebDev.join(", ") : "No students enrolled.");
   console.log("Exiting the program.");
}

// Start the program
mainMenu();