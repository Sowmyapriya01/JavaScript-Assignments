class inheritanceParentDemo{

    funDemo(){
        let name = "Priya"
        console.log("Name is ",name);
    }
}

class inheritanceChildDemo extends inheritanceParentDemo{

}
let childObj = new inheritanceChildDemo();
 
childObj.funDemo();