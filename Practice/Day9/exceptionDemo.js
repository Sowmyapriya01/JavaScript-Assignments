class exceptionDemo {
    showException(){
    try {
       let fname = priya
        console.log(fname);
    }
    catch(err){
        console.log(err.name);
        console.log(err.message);
        // console.log(err);
    }
    finally{
    console.log("Close all db connects and close all the open files");
    }
}
}

let obj = new exceptionDemo();
obj.showException()