 // KIEL MORIS CALUB
 // BSCS1A
 
 
 let createList = prompt("Do you want to create a grocery list? (y/n)").toLowerCase();
 
 if (createList === "y") {
     let itemCount = Number(prompt("How many items do you want to add?"));
 
     
     let grocery_list = [];
 
 
     for (let i = 0; i < itemCount; i++) {
         let item = prompt(`Enter item ${i + 1}:`);
         grocery_list.push(item);
     }
 
 
 
     let groceryList_Sort = [...grocery_list].sort();
     let groceryList_Reverse = [...grocery_list].reverse();
 
 
 
     alert("Original Grocery List: " + grocery_list.join(", "));
     alert("Sorted Grocery List: " + groceryList_Sort.join(", "));
     alert("Reversed Grocery List: " + groceryList_Reverse.join(", "));
 } else {
     alert("No grocery list created.");
 }
 