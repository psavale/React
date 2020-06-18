class Athlet
{
    constructor(name, age, energy)
    {
        this.name=name;
        this.age=age;
        this.energy=energy;
    }

    walk()
    {
        this.energy-=5;
    }
    eat()
    {
        this.energy+=5;

    }
    play()
    {
        this.energy-=20;
    }

   
}

class Cricketer extends Athlet{
    constructor(name,age,energy)
    {
        super(name,age,energy);
    }

    play()
    {
        this.energy-=30;
    }
}

var kohli= new Cricketer("Kohli",29, 90);
kohli.walk();
console.log(kohli);
kohli.eat();
console.log(kohli);