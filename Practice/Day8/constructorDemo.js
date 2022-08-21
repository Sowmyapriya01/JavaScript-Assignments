class constructorDemo{

    constructor(name,tech,location){
            this.name = name
            this.tech = tech
            this.location = location
    }
set empEmail(email)
{
    this.email=email
}
    show(){
console.log(`Name is ${this.name} .Tech is ${this.tech} .Locations is ${this.location} .Email is ${this.email}`);
    }
}

let obj = new constructorDemo('Priya', 'QA', 'Banglore','Priya@gmail.com');
obj.show();

obj.empEmail