for (let i = 0; i < 100; i = i + 2) {
  console.log(i);
}

const promptDemo = require("prompt-sync")();
let num = parseInt(promptDemo("Enter a Number "));

for (let i = 0; i < num; i = i + 2) {
  console.log("Prompt even", i);
}
