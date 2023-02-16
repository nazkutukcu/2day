//typescript değişken tanımlama
let price: number = 20;
let price2: number = 20.44;
let name2: string = "ahmet";
let isShow: boolean = true;
let products: null = null; //değişken var ,içi boş
let product: undefined = undefined; //değişken tanımlanmamış
let price3: any = 24 //any: tüm tipleri kabul eder
price3.toFixed();
let tuple:[string,number] =["a",3] //birden fazla değer dönmek için

let price4: unknown = 30;
(price4 as number).toFixed(); //daha tip güvenli


class Result{
    toplama:number;
    cikarma:number;
    carpma:number;

}
function calculate(a:number,b:number) :[number,number,number]{ //birden fazla değer dönmek istiyoruz
    return [a+b,a*b,a-b];
}
//2.yol daha kısa
function calculate2(a:number,b:number):Result{
    var result = new Result();
    result.toplama=a+b;
    result.cikarma=a+b;
    result.carpma=a*b;
    return result;

}
console.log(`toplam :${calculate(3, 3)[0]}`)
console.log(`çarpım :${calculate(3, 3)[1]}`)
console.log(`çıkarma :${calculate(3, 3)[2]}`)



//array tanımlama
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["ahmet", "mehmet", "hasan"];
//array tanım 2.yol
let productList: Array<string> = ["kalem", "defter", "silgi"]

//for loop
for (let index = 0; index < names.length; index++) {
    const element = names[index];
    console.log(element);
}

//class type
class Student {
    name: string;
    surName: string;
    age: number;
    constructor(name: string, surName: string, age: number) {
        this.name = name;
        this.surName = surName;
        this.age = age;
    }


    show() {
        console.log(`${this.name} ${this.surName} ${this.age}`);
    }

}

var student1 = new Student("ahmet", "yıldız", 25);
// var student2 = new Student(); //throw error verir ,tip güvenli
student1.show();

//Enum
enum Color{
    Red=100,Green=200,Blue=300    
}
enum Gender{
    Kadın ,Erkek
}
var color: Color = Color.Red;
console.log(color); //index ya da belirlediğimiz sayı döner
console.log(Color[color])    //color name

//function
function Add(a:number,b:number) :number{  //dönüş tipini yazmak zorunda değiliz
    //console.log(a+b) //geriye değer dönmüyorsak dönüş tipi: void
    return a+b;
}

//generic function
function GenericAdd<T1,T2,T3>(a:T1,b:T2):T3{
    let sum=(a as number) + (b as number)
    return sum as T3 ;
}


//GENERİC CLASS
class StudentGeneric<T1> {
    name: T1;
    surName: string;
    age: number;
    constructor(name: string, surName: string, age: number) {
        (this.name as string)= name;
        this.surName = surName;
        this.age = age;
    }


    show() {
        console.log(`${this.name} ${this.surName} ${this.age}`);
    }

}
var student1 = new Student("ahmet", "yıldız", 25);
var student2=new StudentGeneric<string>("mehmet","dertli",23);
student1.show();
student2.show();


interface IPerson 
{
   name:string;
   age:number; 
   calculate(): void;
   show(id: string, name: string): number;
  
}
let person: IPerson = { name: "ahmet", age: 23, calculate: function () { }, show: function (id, name) { return 5; } };

class Person implements IPerson {
    name: string;
    age: number;
    

    birthDate:Date;
    calculate(): void {
        throw new Error("Method not implemented.");
    }
    show(id: string, name: string): number {
        throw new Error("Method not implemented.");
    }


}
var p1 = new Person();
p1.age = 20;
p1.name = "ahmet";
p1.birthDate=new Date();

let person2: IPerson = p1;

(person2 as Person).birthDate;