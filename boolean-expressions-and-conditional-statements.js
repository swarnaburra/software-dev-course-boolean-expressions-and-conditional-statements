/*

Objective:
You will practice creating and combining boolean expressions
to drive logic and outcomes in you program.

Instructions:
If you are not familiar with the concept of a text-based adventure game,
let's set the scene...
Example: "You wake up in a dark forest. There are two paths ahead of you:
one leading to the mountains and one to a village.
Your choices will determine your fate!"

Define the Requirements: You must:
  - Write conditional statements to handle player choices.
  - Use boolean expressions to combine multiple conditions.
  - Include at least one use of logical operators (&&, ||, !).

Starter Code:
  - Run the following command in your terminal to install the readline-sync module:
    npm install readline-sync

Paste the following code into your editor:

*/

const readline = require('readline-sync');
const hasTorch = true;
const hasMap = false;

// let the person chose the path now

console.log("You see two paths: one leads to the mountains, the other to the village.");
const choice = readline.question("Do you go to the 'mountains' or the 'village'?");

if (choice === "mountains" && hasTorch) {
  console.log("You safely navigate through the dark mountains.");
  const hasWeapon = readline.question("Do you have knife?");
  if(hasWeapon === "yes") {
    console.log("Proceed further through the dark mountains.You can use your knife to defend!");
  } else {
    console.log("Be cautious, there are wild animals.");
  }


} else if (choice === "mountains" && !hasTorch) {
  console.log("It's too dark to proceed. You decide to turn back.");
  const hasFlare = readline.question("Do you have flare to throw?");
  if(hasFlare === "yes") {
    console.log("You can use your flare to scare animals and run away");
  } else {
    console.log("Better to go back");
  }

} else if (choice === "village" || hasMap) {
  console.log("You find your way to the village.");
  const hasFood = readline.question("Do you have enough food?");
  if(hasFood === "yes") {
    console.log("Good!, You won't stay hungry. Make sure to finish food before reaching village");
  } else {
    console.log("You can ask villagers to give some food");
  }
} else {
  console.log("You get lost and wander aimlessly.");
}

/*
true && true //true
true && false //false
false && false //false

true || true // true
true || false // true
false || false // false
/*





/* 

Add Customization and expand the game:
  - Add more choices and scenarios.
  - Include additional items (e.g., a sword, a compass).
  - Use nested conditionals and logical operators to create complex outcomes.

*/