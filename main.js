#! /usr/bin/env node
import inquirer from "inquirer";
console.log(" \n \t welcome to faria usman - cli number guessing game \n");
const randomnumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userguessnumber",
        type: "number",
        message: "enter your guess number (number limit from 1 to 5)",
    },
]);
if (answer.userguessnumber === randomnumber) {
    console.log("congratulation! you guess a correct number.");
}
else {
    console.log("sorry, you guess a wrong number");
}
