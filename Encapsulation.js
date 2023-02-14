

class Person {
    static ageConst = 60; //scope'u çok geniş,her yerden erişilebilir

    constructor(name, age) {
        this.name = name; //instance variable
        this.age = age;
    }
    calculate(ageConst2) {
        console.log(`${this.name} ${ageConst2 - this.age}`)
    }
}

var p1 = new Person("ahmet", 20);
console.log(p1.calculate()); //çıktı: undefined?
var p2=new Person("mehmet",30)

console.log(Person.ageConst)
console.log(`${p1.name} ${Person.ageConst-p1.age} `);
console.log(`${p2.name} ${Person.ageConst-p2.age} `);


class Product {

    #stock = 500 //private
    constructor(name, price) {
        /* var name;  //private
         var price;
         */
        this.name = name;
        this.price = price;
    }
    setStock(stock) {    //belli kurallar ile değer almak için => set
        if (stock > 1000) {
            this.#stock = stock;
        }
        else
            throw "stock değeri 1000'den fazla olmalıdır";
    }
    getStock() {      //değer okumak => get
        return this.#stock;
    }

    setPrice(price) {
        if (price > 1 && price < 100) {
            this.price = price;
        }
        else {
            throw "price değeri 1 ile 100 arasında olmalı"
        }
    }

    getPrice() {     //public method
        return this.price;
    }

    publicCalculate() {  //private method
        return this.#Calculate();
    }

    //private method
    #Calculate() {
        return 10;
    }
}




//Access Modifiers

/*
const product = new Product();
//console.log(product.name)  //undefined , var değişkeni ile const da nesne tanımlarsak
product.setPrice(5);
console.log(product.getPrice());
console.log(product.publicCalculate());
//console.log(product.Calculate());

product.setStock(4000);
console.log(product.getStock());
*/