var Student={
    name:"Parameshwar",
    marks:[50,60],
    age:35,
    calculatePercentage: function()
    {
        return this.marks.map(x=>x+x);
    },
    updateProfile:function(name)
    {
       return this.name=name;
    }
}

console.log(Student.name);
console.log(Student.calculatePercentage);
console.log(Student.updateProfile("Parameshwar Savale"));

var param=Object.create(Student);
var psavle=Object.create(Student);


console.log(psavle.updateProfile("Parameshwar Savale"));
console.log(Student.prototype);

