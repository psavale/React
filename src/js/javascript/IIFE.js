var increment=(function(inc)
{
    console.log("inside crement function "+inc);
    
    return function(r)
    {
        console.log("inside closure "+r);
        return inc*r;
    }
}(20));

let a=10;
{
    let a=20;
    console.log("inside func "+a);
}
console.log("variable a "+a);
var incrementVar=increment(30);
console.log(incrementVar);