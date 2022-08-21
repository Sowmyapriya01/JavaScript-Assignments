class constructorSetGetDemo{
    constructor(name,tech)
    {
        this.name = name
        this.tech = tech
    }
    getempDetails(){
        console.log(`name is ${this.name} .Tech is ${this.tech} .location is ${this.location}`);
    }
    setempLocation(location){
        this.location = location
    }
}

let obj = new constructorSetGetDemo("priya","QA");
obj.setempLocation('Banglore')
obj.getempDetails()


