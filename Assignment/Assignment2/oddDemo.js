for (let i = 1; i < 100; i = i + 2) {
  console.log(i);
}

const promptDemo = require("prompt-sync")();
let num = promptDemo("Enter a number");
for (i = 1; i < num; i = i + 2) {
  console.log("Prompt Odd ", i);
}
