var greet=require('./greet/index')
module.exports=function(name, lang)
{
    if(lang==='es')
    {
        greet.greetEs(name);
    }else{
        greet.greetEn(name);
    }
}