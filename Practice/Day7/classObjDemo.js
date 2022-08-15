class person {
    fun1(){
        console.log("This is first function without parameters");
    }
    fun2(num){
console.log("This is second function with parameters",num);
    }
   
}
let obj1 = new person();
obj1.fun1();
let obj2 = new person();
obj2.fun2(10);

