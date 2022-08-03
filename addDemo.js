// Addition of 2 numbers
let x = 10;
let y = 20;
let add = x + y;
console.log("Addition of 2 numbers is", add);

// Addition of 2 float numbers
let x1 = 200.2223333;
let y1 = 555.2344444;
let add1 = x1 + y1;
console.log("Addition of 2 float numbers", add1);

// Addition of boolean values
let x2 = false;
let y2 = false;
add2 = x2 + y2;
console.log("Addition of boolean values is", add2);

// Addition with object
let addObjDemo = {
  num1: 11,
  num2: 12,
};
console.log("Addition of 2 obj values is", addObjDemo.num1 + addObjDemo.num2);

//Addition with Arrays
let addArrDemo = [10, 20];
let result = 0;
for (let i = 0; i < addArrDemo.length; i++) {
  result = addArrDemo[i] + result;
}
console.log("Addition of 2 array number is ", result);

// Addition with function

let addFunDemo = function () {
  let a = 500;
  let b = 777;
  let c = a + b;
  console.log("Addition of 2 varibales in function is", c);
};
addFunDemo();

//Addition in callback function

function addCallBackFun(addFunDemo) {
  console.log("Call Back Function demo");
  addFunDemo();
}
addCallBackFun(addFunDemo);
