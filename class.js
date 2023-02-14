"use strict";  //best practice,dezavantaj: tüm tarayıcılarda çalışmaz

class Vehicle{  

    constructor(name,maker,engine){ //nesneleri yapıcı method ile tanımladık
        this.name=name;
        this.maker=maker;
        this.engine=engine;
    }

    showDetails(){
        return `${this.name} ${this.maker} ${this.engine}`;
    }
   
}

//nesne üretelim
var vehicle1= new Vehicle("model 1","renault","engine renault");
var vehicle2= new Vehicle("model 2","opel","engine opel");
var vehicle3= new Vehicle();

//nesnelerdeki değerleri showDetails metodu ile görelim
console.log(vehicle1.showDetails());
console.log(vehicle2.showDetails());
console.log(vehicle3.showDetails());  //çıktı: undefined

//nesne prop erişim
console.log(vehicle1.name);
console.log(vehicle2.name);
console.log(vehicle3.name);

