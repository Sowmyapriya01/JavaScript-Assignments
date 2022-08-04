let person = {
    fname :'priya',
    age : 50
}
//Adding a property
person.lname = 'sowmya'
//Adding boolean value
person.status= false
//Adding an Array
person.phoneArray=[33333333333,222222222,1111111111]
// Adding an Object
person.skills={
    programming :'JavaScript',
    framework : 'Selenium',
    VersionControl:'git',
    CICD:'Jenkins'
}
// Adding a function
// let fun = function(){
//     console.log("I am a function");
// }
// person.fun

// Delete a Property
delete person.age
// Update a property
person.status =true
console.log(person);
