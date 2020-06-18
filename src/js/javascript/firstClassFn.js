
function testfunction(a,b, addFn)
{
    addFn(a,b);
}

var anthorfunction=function(a,b)
{
    console.log(a+b);
}

// testfunction(5);
// anthorfunction(20);
console.log(testfunction(10,20, anthorfunction));