// we can only add objects
let weakSetDemo = new WeakSet()
console.log(weakSetDemo);
// weakSetDemo.add(10) we get Type error bcz we can only add objects
let obj1 ={fname: "Priya",
            }
weakSetDemo.add(obj1);
console.log(weakSetDemo);
