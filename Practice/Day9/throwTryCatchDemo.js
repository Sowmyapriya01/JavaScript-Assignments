class checkMarksDemo{
checkmarks(n)
{

    try{
    if(n<0)
    throw new RangeError ("Number should be greater than 0")
    }
    catch(error)
    {
        console.log(error.name, " & ", error.message);
    }

}
}
let obj = new checkMarksDemo();
obj.checkmarks(-10);
/*let str = "priya"
try {
if(str.startsWith('priya'))
{
    throw new SyntaxError ("Enter different name")
}
}
catch(error)
{
    console.log(error.message);
}
*/


