let studentObj = {
    name : "priya",
    subject : "JS"
}
for (const key in studentObj) {
    console.log("for in key",key);//prints key value
    console.log("for in value",studentObj[key]);
}

// we cannot iterate through object so its only for arrays and strings
/*for (const iterator of studentObj) {
    console.log(iterator);
}*/