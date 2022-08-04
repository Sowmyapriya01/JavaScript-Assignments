setTimeout(show, 1000);

function show(){
    console.log("showing");
}
setTimeout(()=>{
    console.log("Anonymos fun");
}, 2000);
console.log("fun");
/*let arr=[1,2,3,4]
arr.forEach(callBackFun)
{
    console.log(arr);
}
function callBackFun(){
    console.log("call Back fun ");
}

let callBackFun = ()=>{
    console.log("Hello I am call back function");
}
let newFunDemo = function(){
    callBackFun()

    console.log("I am a new function and I can call back a function :) ");

}
newFunDemo()*/