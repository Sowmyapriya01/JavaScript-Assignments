const promptFname = require("prompt-sync")()
let fName= promptFname("Enter your first name ")
const promptLname = require("prompt-sync")()
let lName = promptLname("Enter your last name ")
console.log(fName,"",lName);