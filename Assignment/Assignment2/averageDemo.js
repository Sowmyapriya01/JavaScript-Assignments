// Adding library
const promptDemo = require("prompt-sync")();
let count = parseInt(promptDemo("Total count "));
let num1 = parseInt(promptDemo("Enter 1st number "));
let num2 = parseInt(promptDemo("Enter 2nd number "));
let num3 = parseInt(promptDemo("Enter 3rd number "));
let num4 = parseInt(promptDemo("Enter 4th number "));
let num5 = parseInt(promptDemo("Enter 5th number "));

let Average = (num1 + num2 + num3 + num4 + num5) / count;
console.log("Average of entered number is ", Average);

