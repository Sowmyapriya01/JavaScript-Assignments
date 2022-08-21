let mapDemo = new Map()
console.log(mapDemo);
mapDemo.set("Name" , "Priya")
console.log(mapDemo);
// Adding Array
mapDemo.set("Number",[10,20,20])
console.log(mapDemo);
// Adding Object
mapDemo.set("EmpDetails",{fname : "Priya",tech : "QA"})
console.log(mapDemo);

// Iterating forEach x is value and y is key

mapDemo.forEach(function(x,y){
    console.log("x value is ",x);
    console.log("y value is ",y);

})

// Iterating for of x is key and y is value

for(let [x1,y1] of mapDemo)
{
    console.log("x1 value is ",x1);
    console.log("y1 value is ",y1);
}