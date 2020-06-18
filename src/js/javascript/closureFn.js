function sumPart(a)
{
    return(
        function(b)
        {
            return a+b;
        }
    )
}

var addNum=sumPart(10);
console.log(addNum(20));

addNum=null;