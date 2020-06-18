function athlet(name, age, energy)
{
    this.name=name;
    this.age=age;    
    this.energy=energy;
   
}

function cricketer(name, age, energy)
{
    athlet.call(this,name,age,energy);
}

function footballer(name, age, energy)
{
    athlet.call(this,name,age,energy);
}

athlet.prototype.eat=function()
{
    this.energy-=5;
}

athlet.prototype.walk=function()
{
    this.energy -=5;
}

cricketer.prototype.play=function()
{
    this.energy-=10;
}

footballer.prototype.kick=function()
{
    this.energy-=20;
}


cricketer.prototype=Object.create(athlet.prototype);
footballer.prototype=Object.create(athlet.prototype);

var kohli= new cricketer("Kohli",29,40);

var Ronaldo= new footballer("Ronaldo",31,80);

kohli.eat();
Ronaldo.eat();

kohli.play();
console.log(kohli);

cricketer.prototype.play=function()
{
    this.energy=15
}

console.log(kohli);
console.log(Ronaldo);

Ronaldo.kick();
console.log(Ronaldo);



