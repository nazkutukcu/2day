class person {  //base class
    id: number;
    name: string;
    salary: number;
    childCount: number;

    calculateSalary() {
        return this.salary + (this.childCount * 1000);
    }
}


class JuniorDevPerson extends person {  //child class

    calculateSalary(){
    var baseSalary = super.calculateSalary();
    return baseSalary*2;
}
}

class MidDevPerson extends person {

    age:number;
    calculateSalary(){
    var baseSalary = super.calculateSalary();
    return baseSalary*4;
}
}

class SeniorDevPerson extends person {

    calculateSalary(){
    var baseSalary = super.calculateSalary();
    return baseSalary*8;
}
}

var junior = new JuniorDevPerson();
junior.id=1;
junior.name="ahmet";
junior.salary=1000;
junior.childCount=3;
console.log(`junior maaş hesaplama:${junior.calculateSalary()}`)

var mid = new MidDevPerson();
mid.id=2;
mid.name="mehmet";
mid.salary=1000;
mid.childCount=3;
console.log(`mid maaş hesaplama:${mid.calculateSalary()}`)

var senior = new SeniorDevPerson();
senior.id=1;
senior.name="ahmet";
senior.salary=1000;
senior.childCount=3;
console.log(`senior maaş hesaplama:${senior.calculateSalary()}`)

console.log("-------------------------------")
//casting işlemi
let basePerson:person=junior;   //base class'tan türetmiş olduğumuz sınıflar için yapabiliriz tersi olmaz
console.log(`base junior person maaş hesaplama:${basePerson.calculateSalary()}`);
basePerson=mid;
console.log(`base mid person maaş hesaplama:${basePerson.calculateSalary()}-age:${(basePerson as MidDevPerson).age}`);  //??
 basePerson=senior;
console.log(`senior senior person maaş hesaplama:${basePerson.calculateSalary()}`);

var person5: person = new person();
person5.id = 5;
person5.name = "mehmet";
person5.childCount = 2;
person5.salary = 2000;

// doğru yaklaşım değil.
//let mid5:  JuniorDevPerson = person5;    
