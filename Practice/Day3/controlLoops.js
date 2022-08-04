/* for 
while
dowhile*/
for (let i = 0; i < 10; i = i + 5) {
  console.log(i);
}
let i = 10;
while (i < 5) {
  console.log(i);
  i++;
}
do {
  console.log("i value is", i);
} while (i > 10);

//Break(stops current execution) and Continue(skips current execution)

for (let i = 0; i < 5; i++) {
  console.log(i);

  if (i == 2) {
    break;
  }
}
for (let i = 0; i < 5; i++) {
  if (i == 2) {
    continue
  }
  console.log(i);

}
