let arrDemo = [1, 11, 111, 222, 555];
let sum = 0;
for (let i = 0; i < arrDemo.length; i++) {
  sum = sum + arrDemo[i];
}
let average = sum / arrDemo.length;
console.log("Average of given number is", average);
