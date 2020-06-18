function Greet(name, lang, greetEn, greetEn)
{
   if(lang==="es")
   {
    greetHn(name);
   }else{
    greetEn(name);
   }
}

var greetHn=function GreetInHn(name)
{
    console.log("Greet in Hindi"+" "+name);
    return("hello "+name);
}

var greetEn=function GreetInEn(name)
{
    console.log("Greet in english"+ " " +name);
    return("hello "+name);
}

var greeting=Greet("Param","en",greetEn,greetHn)
console.log(greeting);