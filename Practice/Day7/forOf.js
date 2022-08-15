let arrayDemo = ["sowmya","js",01]

for (const key in arrayDemo) {
   console.log("for in index",key);//Prints index value
   console.log("for in value",arrayDemo[key]);
}
for (const iterator of arrayDemo) {
    console.log("For of",iterator);
}