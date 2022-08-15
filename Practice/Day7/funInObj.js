let person = {
    name :"sowmya",
    fun : function(){
        console.log("Function with out parameters");
    },
    fun1 :function(num){
console.log("Function with paameters",num);
    }
}
console.log(person);
console.log(person.fun());
console.log(person.fun1(2));