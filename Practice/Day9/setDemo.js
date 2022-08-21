let setDemo = new Set()
console.log(setDemo);
setDemo.add(10)
setDemo.add("JS")
setDemo.add(10) //No Duplicate values Only unique values
console.log(setDemo);
setDemo.add([99,88,77]) // Adding array into set 
console.log(setDemo);
setDemo.add({fname : "Priya",location : "KA"}) // adding object into set
console.log(setDemo);
// Iterating through set
setDemo.forEach(element => {
    console.log(element);
});

