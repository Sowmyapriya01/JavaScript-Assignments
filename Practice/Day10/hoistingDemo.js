// By using var we can access variables even before initialization

b = 10
console.log(b);
var b;

/* will get reference error ReferenceError: Cannot access 'b1' before initialization
b1 = 10
console.log(b);
let b1;
*/

fun()
function fun(){
    b1 = 20
console.log(b1);
var b1;
}