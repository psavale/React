function test()
{
    console.log(this.a);
}

a=10;
test();
console.log(window);