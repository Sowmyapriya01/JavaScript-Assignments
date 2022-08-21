// We can only add Objects
let weakMapDemo = new WeakMap()
console.log(weakMapDemo);
let obj1 ={fname: "Priya",
            }
weakMapDemo.set(obj1,"First Object")
console.log(weakMapDemo);
weakMapDemo.get(obj1)