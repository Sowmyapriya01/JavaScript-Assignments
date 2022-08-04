let promptDemo = require("prompt-sync")()
let num1 = parseInt(promptDemo("Enter 1st num "))
let num2 = parseInt(promptDemo("Enter 2nd num "))
let num3 = parseInt(promptDemo("Enter 3rd num "))
let num4 = parseInt(promptDemo("Enter 4th num "))
let num5 = parseInt(promptDemo("Enter 5th num "))

let sum = num1+num2+num3+num4+num5

console.log("Sum of all the number is ",sum);