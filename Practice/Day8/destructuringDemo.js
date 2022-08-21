// Destructuring Object
let emp = {
    name1 : "Priya",
    tech1 : "QA"
}
let {name1,tech1} = emp
console.log(name1);
console.log(tech1);
let {name1:n,tech1:t} = emp
console.log(n);
console.log(t);

// Destructuring array

let arrDemo = [333,4444]
let [a,b] = arrDemo
console.log(a);
console.log(b);