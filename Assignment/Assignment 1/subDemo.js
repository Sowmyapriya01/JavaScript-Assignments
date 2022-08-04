// Sub of 2 numbers
let x = 200;
let y = 55;
let z = x - y;
console.log("Sub of 2 numbers", z);

// Sub of 2 float numbers
let x1 = 44.55555555;
let y1 = 33.2211223;
let z1 = x1 - y1;
console.log("Sub of 2 float numbers", z1);

// Sub of 2 boolean values
let x2 = true;
let y2 = false;
let z2 = x2 - y2;
console.log("Sub of 2 boolean values", z2);

//Sub with Objects
let subObj = {
  val1: 34,
  val2: 3,
};
let result1 = subObj.val1 - subObj.val2;
console.log("Sub with Objects", result1);

// Sub with Arrays
let subArr = [11, 33];
let result = 0;
for (let i = 0; i < subArr.length; i++) {
  result = subArr[i] - result;
}
console.log("Sub with Arrays", result);

// Sub with functions
let subFunDemo = () => {
  let x = 30 - 2;
  console.log("Sub with functions", x);
};
subFunDemo();
// Sub with call back function
function fun(subFunDemo) {
  console.log("call back fun demo");
  subFunDemo();
}
fun(subFunDemo);
