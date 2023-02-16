//typescript değişken tanımlama
var price = 20;
var price2 = 20.44;
var name2 = "ahmet";
var isShow = true;
var products = null; //değişken var ,içi boş
var product = undefined; //değişken tanımlanmamış
var price3 = 24; //any: tüm tipleri kabul eder
price3.toFixed();
var tuple = ["a", 3]; //birden fazla değer dönmek için
var price4 = 30;
price4.toFixed(); //daha tip güvenli
var Result = /** @class */ (function () {
    function Result() {
    }
    return Result;
}());
function calculate(a, b) {
    return [a + b, a * b, a - b];
}
//2.yol daha kısa
function calculate2(a, b) {
    var result = new Result();
    result.toplama = a + b;
    result.cikarma = a + b;
    result.carpma = a * b;
    return result;
}
console.log("toplam :".concat(calculate(3, 3)[0]));
console.log("\u00E7arp\u0131m :".concat(calculate(3, 3)[1]));
console.log("\u00E7\u0131karma :".concat(calculate(3, 3)[2]));
//array tanımlama
var numbers = [1, 2, 3, 4, 5];
var names = ["ahmet", "mehmet", "hasan"];
//array tanım 2.yol
var productList = ["kalem", "defter", "silgi"];
//for loop
for (var index = 0; index < names.length; index++) {
    var element = names[index];
    console.log(element);
}
//class type
var Student = /** @class */ (function () {
    function Student(name, surName, age) {
        this.name = name;
        this.surName = surName;
        this.age = age;
    }
    Student.prototype.show = function () {
        console.log("".concat(this.name, " ").concat(this.surName, " ").concat(this.age));
    };
    return Student;
}());
var student1 = new Student("ahmet", "yıldız", 25);
// var student2 = new Student(); //throw error verir ,tip güvenli
student1.show();
//Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 100] = "Red";
    Color[Color["Green"] = 200] = "Green";
    Color[Color["Blue"] = 300] = "Blue";
})(Color || (Color = {}));
var Gender;
(function (Gender) {
    Gender[Gender["Kad\u0131n"] = 0] = "Kad\u0131n";
    Gender[Gender["Erkek"] = 1] = "Erkek";
})(Gender || (Gender = {}));
var color = Color.Red;
console.log(color); //index ya da belirlediğimiz sayı döner
console.log(Color[color]); //color name
//function
function Add(a, b) {
    //console.log(a+b) //geriye değer dönmüyorsak dönüş tipi: void
    return a + b;
}
/*
//generic function
function GenericAdd<T1,T2>(a:T1,b:T2):T3{
    let sum=(a as number) + (b as number)
    //return sum as T3 ;
}
*/
//GENERİC CLASS
var StudentGeneric = /** @class */ (function () {
    function StudentGeneric(name, surName, age) {
        this.name = name;
        this.surName = surName;
        this.age = age;
    }
    StudentGeneric.prototype.show = function () {
        console.log("".concat(this.name, " ").concat(this.surName, " ").concat(this.age));
    };
    return StudentGeneric;
}());
var student1 = new Student("ahmet", "yıldız", 25);
var student2 = new StudentGeneric("mehmet", "dertli", 23);
student1.show();
student2.show();
//let person:IPerson={name:"ahmet",age:23,calculate:function(){}}
