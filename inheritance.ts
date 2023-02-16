class Employee{  //Base Class
    id:number;
    name:string;
    protected age:number;
    salary:number;

    constructor(name:string){
        this.name=name;
    }

    show():void{
        console.log(`${this.id}- ${this.name}`)
    }
}
class JuniorDevPerson extends Employee {

    constructor(id: number, name: string, age: number) {
        super(name);
        this.id = id;
        this.age = age;
    }


}
class MidDevPerson extends Employee{
    
}
class SeniorDevPerson{
    
}

var mid= new MidDevPerson("ahmet");
var employee = new Employee("mehmet");
